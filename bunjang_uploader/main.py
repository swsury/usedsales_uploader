"""
번개장터 판매글 일괄 자동 업로드 프로그램
대상: https://m.bunjang.co.kr/
"""

import tkinter as tk
from tkinter import ttk, filedialog, messagebox, scrolledtext
import threading
import csv
import os
import time
import json
from datetime import datetime

# Selenium imports
try:
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.chrome.options import Options
    from selenium.webdriver.chrome.service import Service
    from selenium.webdriver.common.action_chains import ActionChains
    from selenium.webdriver.common.keys import Keys
    SELENIUM_AVAILABLE = True
except ImportError:
    SELENIUM_AVAILABLE = False


# ─────────────────────────────────────────────
# 상수 / 설정
# ─────────────────────────────────────────────
BUNJANG_URL = "https://bunjang.co.kr/"
BUNJANG_LOGIN_URL = "https://bunjang.co.kr/login"
BUNJANG_SELL_URL = "https://bunjang.co.kr/products/new"

CATEGORY_MAP = {
    "디지털/가전": "digitals",
    "패션의류": "fashion",
    "패션잡화": "accessories",
    "뷰티/미용": "beauty",
    "스포츠/레저": "sports",
    "취미/게임/음반": "hobby",
    "도서/티켓/문구": "books",
    "생활/가공식품": "living",
    "유아동/출산": "baby",
    "식물": "plant",
    "반려동물용품": "pet",
    "자동차용품": "car",
    "공구/산업용품": "tools",
    "기타": "etc",
}

# 상품 상태 → scroll-condition li 인덱스 매핑
CONDITION_INDEX = {
    "새상품 (미사용)": 1,
    "사용감 없음":   2,
    "사용감 적음":   3,
    "사용감 많음":   4,
    "고장/파손 상품": 5,
    # CSV 편의 별칭
    "새상품":  1,
    "거의새것": 2,
    "중고":    3,
}

APP_VERSION = "1.0.0"


# ─────────────────────────────────────────────
# 로깅 헬퍼
# ─────────────────────────────────────────────
class Logger:
    def __init__(self, text_widget: scrolledtext.ScrolledText):
        self.widget = text_widget

    def log(self, msg: str, level: str = "INFO"):
        timestamp = datetime.now().strftime("%H:%M:%S")
        color_tag = {"INFO": "info", "SUCCESS": "success", "ERROR": "error", "WARN": "warn"}.get(level, "info")
        full_msg = f"[{timestamp}] [{level}] {msg}\n"
        self.widget.configure(state="normal")
        self.widget.insert(tk.END, full_msg, color_tag)
        self.widget.see(tk.END)
        self.widget.configure(state="disabled")

    def info(self, msg):    self.log(msg, "INFO")
    def success(self, msg): self.log(msg, "SUCCESS")
    def error(self, msg):   self.log(msg, "ERROR")
    def warn(self, msg):    self.log(msg, "WARN")


# ─────────────────────────────────────────────
# 번개장터 자동화 엔진
# ─────────────────────────────────────────────
class BunjangAutomator:
    def __init__(self, logger: Logger, headless: bool = False):
        self.logger = logger
        self.headless = headless
        self.driver = None
        self.wait = None

    # ── 드라이버 초기화 ──────────────────────
    def init_driver(self):
        self.logger.info("Chrome 드라이버를 초기화하는 중...")
        options = Options()
        # 데스크톱 User-Agent (Windows Chrome)
        options.add_argument(
            "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/124.0.0.0 Safari/537.36"
        )
        options.add_argument("--window-size=1280,900")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--disable-blink-features=AutomationControlled")
        options.add_experimental_option("excludeSwitches", ["enable-automation"])
        options.add_experimental_option("useAutomationExtension", False)

        if self.headless:
            options.add_argument("--headless=new")

        self.driver = webdriver.Chrome(options=options)
        self.driver.execute_script(
            "Object.defineProperty(navigator, 'webdriver', {get: () => undefined})"
        )
        self.wait = WebDriverWait(self.driver, 20)
        self.logger.success("Chrome 드라이버 초기화 완료 (데스크톱 모드)")

    # ── 사이트 열기 ──────────────────────────
    def open_site(self):
        self.logger.info(f"번개장터 접속 중... {BUNJANG_URL}")
        self.driver.get(BUNJANG_URL)
        time.sleep(2)

    # ── 로그인 여부 확인 ─────────────────────
    def is_logged_in(self) -> bool:
        try:
            self.driver.get(BUNJANG_URL)
            time.sleep(2)
            # 프로필 아이콘 또는 마이페이지 링크 탐색
            page_src = self.driver.page_source
            return "logout" in page_src.lower() or "mypage" in page_src.lower()
        except Exception:
            return False

    # ── 네이버 로그인 ────────────────────────
    def naver_login(self, naver_id: str, naver_pw: str) -> bool:
        self.logger.info("네이버 로그인 시도 중...")
        try:
            self.driver.get(BUNJANG_LOGIN_URL)
            time.sleep(2)

            # 네이버 로그인 버튼 클릭
            naver_btn = self.wait.until(
                EC.element_to_be_clickable(
                    (By.XPATH, "//*[contains(text(),'네이버') or contains(@class,'naver')]")
                )
            )
            naver_btn.click()
            time.sleep(2)

            # 네이버 로그인 팝업 처리
            handles = self.driver.window_handles
            if len(handles) > 1:
                self.driver.switch_to.window(handles[-1])

            id_field = self.wait.until(EC.presence_of_element_located((By.ID, "id")))
            id_field.clear()
            id_field.send_keys(naver_id)

            pw_field = self.driver.find_element(By.ID, "pw")
            pw_field.clear()
            pw_field.send_keys(naver_pw)

            login_btn = self.driver.find_element(By.ID, "log.login")
            login_btn.click()
            time.sleep(3)

            # 원래 창으로 복귀
            if len(self.driver.window_handles) > 1:
                self.driver.switch_to.window(handles[0])

            self.logger.success("로그인 완료")
            return True
        except Exception as e:
            self.logger.error(f"로그인 실패: {e}")
            return False

    # ── 판매 글 등록 (단건) ──────────────────
    def register_product(self, product: dict, progress_cb=None) -> bool:
        """
        product keys:
          image_paths (list[str]), name, category, condition, description, price, quantity
        """
        try:
            self.logger.info(f"상품 등록 시작: {product.get('name', '?')}")
            self.driver.get(BUNJANG_SELL_URL)
            time.sleep(3)

            # ① 이미지 등록
            self._upload_images(product.get("image_paths", []))
            if progress_cb: progress_cb(15)

            # ② 상품명
            self._fill_product_name(product["name"])
            if progress_cb: progress_cb(30)

            # ③ 카테고리
            self._select_category(product["category"])
            if progress_cb: progress_cb(45)

            # ④ 상품 상태
            self._select_condition(product["condition"])
            if progress_cb: progress_cb(60)

            # ⑤ 설명
            self._fill_description(product["description"])
            if progress_cb: progress_cb(70)

            # ⑥ 가격
            self._fill_price(str(product["price"]))
            if progress_cb: progress_cb(80)

            # ⑦ 수량
            self._fill_quantity(str(product.get("quantity", 1)))
            if progress_cb: progress_cb(90)

            # ⑧ 등록하기 버튼
            self._click_register()
            if progress_cb: progress_cb(100)

            self.logger.success(f"등록 완료: {product['name']}")
            return True

        except Exception as e:
            self.logger.error(f"등록 실패 ({product.get('name', '?')}): {e}")
            return False

    # ── 내부 헬퍼들 ─────────────────────────
    def _upload_images(self, image_paths: list):
        if not image_paths:
            self.logger.warn("이미지 경로가 없습니다.")
            return
        try:
            file_inputs = self.wait.until(
                EC.presence_of_all_elements_located((By.CSS_SELECTOR, "input[type='file']"))
            )
            if file_inputs:
                valid_paths = [p for p in image_paths if os.path.exists(p)]
                if valid_paths:
                    file_inputs[0].send_keys("\n".join(valid_paths))
                    time.sleep(2)
                    self.logger.info(f"이미지 {len(valid_paths)}개 업로드")
                else:
                    self.logger.warn("유효한 이미지 파일 없음 (경로 확인 필요)")
        except Exception as e:
            self.logger.warn(f"이미지 업로드 중 오류: {e}")

    def _fill_product_name(self, name: str):
        try:
            # scroll-name 컨테이너 내 실제 입력 영역
            container = self.wait.until(
                EC.presence_of_element_located(
                    (By.XPATH, "//*[@id='scroll-name']/div[1]/div[3]")
                )
            )
            # 내부 input 또는 contenteditable div 탐색
            try:
                field = container.find_element(By.TAG_NAME, "input")
            except Exception:
                field = container.find_element(By.XPATH, ".//*[@contenteditable='true']")
            self.driver.execute_script("arguments[0].scrollIntoView({block:'center'});", field)
            field.click()
            field.clear()
            field.send_keys(name)
            time.sleep(0.5)
            self.logger.info(f"상품명 입력 완료: {name}")
        except Exception as e:
            self.logger.warn(f"상품명 입력 오류: {e}")

    def _select_category(self, category: str):
        """
        category 값은 CSV의 '카테고리' 컬럼.
        슬래시(/) 구분자로 단계를 분리한다.
          예) "디지털/가전"        → 대분류만
              "디지털/가전/스마트폰" → 대·중·소 3단계
        각 단계는 ul[1], ul[2], ul[3] 에 순서대로 표시된다.
        """
        try:
            levels = [v.strip() for v in category.split("/") if v.strip()]
            BASE = "//*[@id='scroll-categoryId']/div[1]/div[3]/div[1]"

            for depth, label in enumerate(levels, start=1):
                ul_xpath = f"{BASE}/ul[{depth}]"
                # 해당 ul 안에서 텍스트가 일치하는 li 항목 클릭
                item_xpath = f"{ul_xpath}/li[normalize-space(.)='{label}']"
                item = self.wait.until(
                    EC.element_to_be_clickable((By.XPATH, item_xpath))
                )
                self.driver.execute_script("arguments[0].scrollIntoView({block:'center'});", item)
                time.sleep(0.2)
                item.click()
                time.sleep(0.8)
                self.logger.info(f"카테고리 {depth}단계 선택: {label}")

            self.logger.info(f"카테고리 선택 완료: {category}")

        except Exception as e:
            self.logger.error(f"카테고리 선택 실패: {e}")

    def _select_condition(self, condition: str):
        """
        CONDITION_INDEX 매핑으로 scroll-condition 내 li[n] 을 직접 클릭.
        """
        try:
            idx = CONDITION_INDEX.get(condition, 3)   # 기본값: 사용감 적음(3)
            li_xpath = (
                f"//*[@id='scroll-condition']/div[1]/div[3]/div/ul/li[{idx}]"
            )
            item = self.wait.until(
                EC.element_to_be_clickable((By.XPATH, li_xpath))
            )
            self.driver.execute_script("arguments[0].scrollIntoView({block:'center'});", item)
            item.click()
            time.sleep(0.5)
            self.logger.info(f"상품 상태 선택 완료: {condition} (li[{idx}])")
        except Exception as e:
            self.logger.error(f"상품 상태 선택 실패: {e}")

    def _fill_description(self, description: str):
        try:
            # scroll-description 내 실제 편집 영역
            container = self.wait.until(
                EC.presence_of_element_located(
                    (By.XPATH, "//*[@id='scroll-description']/div[1]/div[3]/div[1]/div[1]")
                )
            )
            self.driver.execute_script("arguments[0].scrollIntoView({block:'center'});", container)
            # textarea 또는 contenteditable div
            try:
                field = container.find_element(By.TAG_NAME, "textarea")
            except Exception:
                try:
                    field = container.find_element(By.XPATH, ".//*[@contenteditable='true']")
                except Exception:
                    field = container   # 컨테이너 자체가 편집 가능한 경우
            field.click()
            # 기존 내용 전체 선택 후 교체
            field.send_keys(Keys.CONTROL + "a")
            field.send_keys(description)
            time.sleep(0.5)
            self.logger.info("본문 입력 완료")
        except Exception as e:
            self.logger.error(f"본문 입력 실패: {e}")

    def _fill_price(self, price: str):
        try:
            field = self.wait.until(
                EC.presence_of_element_located(
                    (By.XPATH, "//input[contains(@placeholder,'가격') or contains(@placeholder,'price')]")
                )
            )
            field.clear()
            field.send_keys(price.replace(",", ""))
            time.sleep(0.5)
        except Exception as e:
            self.logger.warn(f"가격 입력 오류: {e}")

    def _fill_quantity(self, quantity: str):
        try:
            field = self.wait.until(
                EC.presence_of_element_located(
                    (By.XPATH,
                     "//*[@id='scroll-quantity']/div[1]/div[3]/div/div/div/input")
                )
            )
            self.driver.execute_script("arguments[0].scrollIntoView({block:'center'});", field)
            field.click()
            field.clear()
            field.send_keys(quantity)
            time.sleep(0.5)
            self.logger.info(f"수량 입력 완료: {quantity}")
        except Exception as e:
            self.logger.warn(f"수량 입력 오류 (무시): {e}")

    def _click_register(self):
        try:
            btn = self.wait.until(
                EC.element_to_be_clickable(
                    (By.XPATH, "//*[contains(text(),'등록하기') or contains(text(),'판매하기')]")
                )
            )
            btn.click()
            time.sleep(3)
        except Exception as e:
            self.logger.warn(f"등록 버튼 클릭 오류: {e}")

    def quit(self):
        if self.driver:
            self.driver.quit()
            self.driver = None


# ─────────────────────────────────────────────
# CSV 유틸
# ─────────────────────────────────────────────
def load_csv(filepath: str) -> list[dict]:
    products = []
    with open(filepath, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            images = [p.strip() for p in row.get("이미지경로", "").split("|") if p.strip()]
            products.append({
                "image_paths": images,
                "name": row.get("상품명", "").strip(),
                "category": row.get("카테고리", "기타").strip(),
                "condition": row.get("상품상태", "중고").strip(),
                "description": row.get("설명", "").strip(),
                "price": row.get("가격", "0").strip().replace(",", ""),
                "quantity": row.get("수량", "1").strip(),
            })
    return products


def create_sample_csv(filepath: str):
    headers = ["이미지경로", "상품명", "카테고리", "상품상태", "설명", "가격", "수량"]
    samples = [
        [
            "C:/images/item1.jpg|C:/images/item1_2.jpg",
            "아이폰 14 128GB 블루",
            "디지털/가전",
            "거의새것",
            "구매 후 1개월 사용. 케이스, 충전기 포함. 흠집 없음.",
            "700000",
            "1",
        ],
        [
            "C:/images/item2.jpg",
            "나이키 에어맥스 270 270mm",
            "패션잡화",
            "중고",
            "6개월 착용. 밑창 상태 양호. 박스 없음.",
            "45000",
            "1",
        ],
    ]
    with open(filepath, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        writer.writerows(samples)


# ─────────────────────────────────────────────
# GUI 메인 창
# ─────────────────────────────────────────────
class BunjangUploaderApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title(f"번개장터 일괄 업로드 v{APP_VERSION}")
        self.geometry("900x720")
        self.resizable(True, True)
        self.configure(bg="#1a1a2e")

        self.automator: BunjangAutomator | None = None
        self.products: list[dict] = []
        self.upload_thread: threading.Thread | None = None
        self._stop_flag = threading.Event()

        self._apply_theme()
        self._build_ui()
        self.protocol("WM_DELETE_WINDOW", self._on_close)

    # ── 테마 ─────────────────────────────────
    def _apply_theme(self):
        style = ttk.Style(self)
        style.theme_use("clam")
        bg   = "#1a1a2e"
        card = "#16213e"
        acc  = "#e94560"
        fg   = "#eaeaea"
        style.configure("TFrame",       background=bg)
        style.configure("Card.TFrame",  background=card)
        style.configure("TLabel",       background=bg,   foreground=fg, font=("Malgun Gothic", 10))
        style.configure("Header.TLabel",background=bg,   foreground=acc, font=("Malgun Gothic", 13, "bold"))
        style.configure("TButton",      background=acc,  foreground="#fff",
                        font=("Malgun Gothic", 10, "bold"), padding=6, relief="flat")
        style.map("TButton", background=[("active", "#c73652")])
        style.configure("Secondary.TButton", background="#0f3460", foreground=fg)
        style.map("Secondary.TButton",       background=[("active", "#1a5276")])
        style.configure("TEntry",       fieldbackground="#0f3460", foreground=fg,
                        insertcolor=fg, borderwidth=0, padding=4)
        style.configure("TCheckbutton", background=bg, foreground=fg, font=("Malgun Gothic", 10))
        style.configure("TProgressbar", troughcolor=card, background=acc)
        style.configure("TNotebook",          background=bg, borderwidth=0)
        style.configure("TNotebook.Tab",      background=card, foreground=fg,
                        font=("Malgun Gothic", 10), padding=[12, 6])
        style.map("TNotebook.Tab",            background=[("selected", acc)],
                  foreground=[("selected", "#fff")])

    # ── UI 구성 ──────────────────────────────
    def _build_ui(self):
        # 상단 헤더
        header = tk.Frame(self, bg="#e94560", height=50)
        header.pack(fill=tk.X)
        tk.Label(header, text="⚡ 번개장터 일괄 업로드", bg="#e94560", fg="#fff",
                 font=("Malgun Gothic", 14, "bold")).pack(side=tk.LEFT, padx=16, pady=10)
        tk.Label(header, text=f"v{APP_VERSION}", bg="#e94560", fg="#ffcccc",
                 font=("Malgun Gothic", 9)).pack(side=tk.RIGHT, padx=16)

        # 탭
        nb = ttk.Notebook(self)
        nb.pack(fill=tk.BOTH, expand=True, padx=10, pady=8)

        tab1 = ttk.Frame(nb, style="TFrame")
        tab2 = ttk.Frame(nb, style="TFrame")
        tab3 = ttk.Frame(nb, style="TFrame")
        nb.add(tab1, text="  🔑 로그인 설정  ")
        nb.add(tab2, text="  📦 상품 목록  ")
        nb.add(tab3, text="  📋 실행 로그  ")

        self._build_login_tab(tab1)
        self._build_product_tab(tab2)
        self._build_log_tab(tab3)

        # 하단 상태바
        status_frame = tk.Frame(self, bg="#0f3460", height=32)
        status_frame.pack(fill=tk.X, side=tk.BOTTOM)
        self.status_var = tk.StringVar(value="준비됨")
        tk.Label(status_frame, textvariable=self.status_var, bg="#0f3460", fg="#aaa",
                 font=("Malgun Gothic", 9)).pack(side=tk.LEFT, padx=10, pady=6)

    # ── 탭 1 : 로그인 ────────────────────────
    def _build_login_tab(self, parent):
        pad = {"padx": 20, "pady": 10}

        ttk.Label(parent, text="네이버 계정으로 번개장터 로그인", style="Header.TLabel").pack(**pad)

        card = ttk.Frame(parent, style="Card.TFrame", padding=20)
        card.pack(fill=tk.X, **pad)

        ttk.Label(card, text="네이버 아이디").grid(row=0, column=0, sticky=tk.W, pady=6)
        self.naver_id_var = tk.StringVar()
        ttk.Entry(card, textvariable=self.naver_id_var, width=35).grid(row=0, column=1, padx=10)

        ttk.Label(card, text="네이버 비밀번호").grid(row=1, column=0, sticky=tk.W, pady=6)
        self.naver_pw_var = tk.StringVar()
        ttk.Entry(card, textvariable=self.naver_pw_var, show="●", width=35).grid(row=1, column=1, padx=10)

        self.headless_var = tk.BooleanVar(value=False)
        ttk.Checkbutton(card, text="브라우저 창 숨기기 (헤드리스)", variable=self.headless_var).grid(
            row=2, column=0, columnspan=2, sticky=tk.W, pady=8)

        btn_frame = tk.Frame(card, bg="#16213e")
        btn_frame.grid(row=3, column=0, columnspan=2, sticky=tk.W, pady=4)
        ttk.Button(btn_frame, text="🚀 브라우저 실행 & 로그인", command=self._start_browser).pack(side=tk.LEFT, padx=4)
        ttk.Button(btn_frame, text="🔌 브라우저 종료", command=self._quit_browser,
                   style="Secondary.TButton").pack(side=tk.LEFT, padx=4)

        self.login_status_var = tk.StringVar(value="● 브라우저 미실행")
        ttk.Label(card, textvariable=self.login_status_var).grid(
            row=4, column=0, columnspan=2, sticky=tk.W, pady=4)

        # 안내
        info = ttk.Frame(parent, style="Card.TFrame", padding=14)
        info.pack(fill=tk.X, **pad)
        ttk.Label(info, text="⚠️  보안 안내", font=("Malgun Gothic", 10, "bold"),
                  foreground="#f0a500", background="#16213e").pack(anchor=tk.W)
        ttk.Label(info, text=(
            "• 비밀번호는 메모리에만 저장되며 파일로 기록되지 않습니다.\n"
            "• 2단계 인증 사용 시 직접 인증을 완료해 주세요.\n"
            "• 개인 사용 목적으로만 활용하세요."
        ), background="#16213e", foreground="#aaa", font=("Malgun Gothic", 9),
                  justify=tk.LEFT).pack(anchor=tk.W, pady=4)

    # ── 탭 2 : 상품 목록 ─────────────────────
    def _build_product_tab(self, parent):
        pad = {"padx": 20, "pady": 6}

        # CSV 로드 영역
        csv_frame = ttk.Frame(parent, style="Card.TFrame", padding=14)
        csv_frame.pack(fill=tk.X, **pad)
        ttk.Label(csv_frame, text="CSV 파일 경로", background="#16213e").grid(row=0, column=0, sticky=tk.W)
        self.csv_path_var = tk.StringVar()
        ttk.Entry(csv_frame, textvariable=self.csv_path_var, width=50).grid(row=0, column=1, padx=8)
        ttk.Button(csv_frame, text="📂 찾아보기", command=self._browse_csv).grid(row=0, column=2)
        ttk.Button(csv_frame, text="📥 불러오기", command=self._load_csv).grid(row=0, column=3, padx=4)
        ttk.Button(csv_frame, text="📄 샘플 생성", command=self._create_sample,
                   style="Secondary.TButton").grid(row=0, column=4, padx=4)

        # CSV 형식 안내
        fmt_frame = ttk.Frame(parent, style="Card.TFrame", padding=10)
        fmt_frame.pack(fill=tk.X, **pad)
        ttk.Label(fmt_frame, text="CSV 컬럼 형식: 이미지경로 | 상품명 | 카테고리 | 상품상태 | 설명 | 가격 | 수량",
                  background="#16213e", foreground="#aaa", font=("Malgun Gothic", 9)).pack(anchor=tk.W)
        ttk.Label(fmt_frame, text="이미지는 | 구분자로 여러 파일 지정 가능  예) C:/img/a.jpg|C:/img/b.jpg",
                  background="#16213e", foreground="#aaa", font=("Malgun Gothic", 9)).pack(anchor=tk.W)

        # 상품 목록 테이블
        tbl_frame = ttk.Frame(parent, style="TFrame")
        tbl_frame.pack(fill=tk.BOTH, expand=True, **pad)

        cols = ("#", "상품명", "카테고리", "상품상태", "가격", "수량", "이미지수")
        self.tree = ttk.Treeview(tbl_frame, columns=cols, show="headings", height=12)
        widths = [40, 220, 100, 80, 80, 50, 60]
        for col, w in zip(cols, widths):
            self.tree.heading(col, text=col)
            self.tree.column(col, width=w, anchor=tk.CENTER if col != "상품명" else tk.W)

        vsb = ttk.Scrollbar(tbl_frame, orient=tk.VERTICAL, command=self.tree.yview)
        self.tree.configure(yscrollcommand=vsb.set)
        self.tree.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        vsb.pack(side=tk.RIGHT, fill=tk.Y)

        # 진행 상황
        prog_frame = ttk.Frame(parent, style="Card.TFrame", padding=10)
        prog_frame.pack(fill=tk.X, **pad)
        self.progress_var = tk.IntVar(value=0)
        self.progress_bar = ttk.Progressbar(prog_frame, variable=self.progress_var,
                                             maximum=100, length=500)
        self.progress_bar.pack(side=tk.LEFT, fill=tk.X, expand=True)
        self.progress_label = ttk.Label(prog_frame, text="0 / 0", background="#16213e", width=8)
        self.progress_label.pack(side=tk.RIGHT, padx=8)

        # 실행 버튼
        btn_row = ttk.Frame(parent, style="TFrame")
        btn_row.pack(fill=tk.X, padx=20, pady=6)
        ttk.Button(btn_row, text="▶  업로드 시작", command=self._start_upload).pack(side=tk.LEFT, padx=4)
        ttk.Button(btn_row, text="■  중단", command=self._stop_upload,
                   style="Secondary.TButton").pack(side=tk.LEFT, padx=4)

        self.item_count_var = tk.StringVar(value="등록된 상품: 0개")
        ttk.Label(btn_row, textvariable=self.item_count_var).pack(side=tk.RIGHT, padx=4)

    # ── 탭 3 : 로그 ──────────────────────────
    def _build_log_tab(self, parent):
        log_frame = tk.Frame(parent, bg="#1a1a2e")
        log_frame.pack(fill=tk.BOTH, expand=True, padx=10, pady=8)

        self.log_text = scrolledtext.ScrolledText(
            log_frame, state="disabled", bg="#0d0d1a", fg="#ccc",
            font=("Consolas", 9), wrap=tk.WORD, borderwidth=0
        )
        self.log_text.pack(fill=tk.BOTH, expand=True)
        self.log_text.tag_configure("info",    foreground="#7ec8e3")
        self.log_text.tag_configure("success", foreground="#51cf66")
        self.log_text.tag_configure("error",   foreground="#ff6b6b")
        self.log_text.tag_configure("warn",    foreground="#ffd43b")

        ttk.Button(log_frame, text="🗑 로그 지우기", command=self._clear_log,
                   style="Secondary.TButton").pack(side=tk.RIGHT, pady=4)

        self.logger = Logger(self.log_text)
        self.logger.info("프로그램이 시작되었습니다.")

        if not SELENIUM_AVAILABLE:
            self.logger.error("selenium 패키지가 설치되지 않았습니다. 터미널에서 아래 명령을 실행하세요:")
            self.logger.error("  pip install selenium webdriver-manager")

    # ── 이벤트 핸들러 ────────────────────────
    def _start_browser(self):
        if not SELENIUM_AVAILABLE:
            messagebox.showerror("오류", "selenium이 설치되지 않았습니다.\npip install selenium")
            return
        if self.automator and self.automator.driver:
            self.logger.warn("브라우저가 이미 실행 중입니다.")
            return

        def _run():
            try:
                self.automator = BunjangAutomator(self.logger, headless=self.headless_var.get())
                self.automator.init_driver()
                self.automator.open_site()

                nid = self.naver_id_var.get().strip()
                npw = self.naver_pw_var.get().strip()

                if nid and npw:
                    ok = self.automator.naver_login(nid, npw)
                    self.login_status_var.set("● 로그인 완료" if ok else "● 로그인 실패")
                else:
                    self.login_status_var.set("● 브라우저 실행됨 (수동 로그인 필요)")
                    self.logger.warn("아이디/비밀번호를 입력하지 않아 수동 로그인이 필요합니다.")
                self.status_var.set("브라우저 실행 중")
            except Exception as e:
                self.logger.error(f"브라우저 실행 오류: {e}")
                self.login_status_var.set("● 브라우저 실행 실패")

        threading.Thread(target=_run, daemon=True).start()

    def _quit_browser(self):
        if self.automator:
            self.automator.quit()
            self.automator = None
        self.login_status_var.set("● 브라우저 종료됨")
        self.status_var.set("준비됨")
        self.logger.info("브라우저를 종료했습니다.")

    def _browse_csv(self):
        path = filedialog.askopenfilename(
            title="CSV 파일 선택",
            filetypes=[("CSV 파일", "*.csv"), ("모든 파일", "*.*")]
        )
        if path:
            self.csv_path_var.set(path)

    def _load_csv(self):
        path = self.csv_path_var.get().strip()
        if not path or not os.path.exists(path):
            messagebox.showwarning("경고", "유효한 CSV 파일 경로를 입력하세요.")
            return
        try:
            self.products = load_csv(path)
            self._refresh_table()
            self.logger.success(f"CSV 로드 완료: {len(self.products)}개 상품")
            self.item_count_var.set(f"등록된 상품: {len(self.products)}개")
        except Exception as e:
            messagebox.showerror("오류", f"CSV 파일 읽기 실패:\n{e}")
            self.logger.error(f"CSV 읽기 오류: {e}")

    def _create_sample(self):
        path = filedialog.asksaveasfilename(
            title="샘플 CSV 저장",
            defaultextension=".csv",
            filetypes=[("CSV 파일", "*.csv")]
        )
        if path:
            create_sample_csv(path)
            self.csv_path_var.set(path)
            messagebox.showinfo("완료", f"샘플 CSV가 생성되었습니다:\n{path}")
            self.logger.success(f"샘플 CSV 생성: {path}")

    def _refresh_table(self):
        for row in self.tree.get_children():
            self.tree.delete(row)
        for i, p in enumerate(self.products, 1):
            self.tree.insert("", tk.END, values=(
                i, p["name"], p["category"], p["condition"],
                f"{int(p['price']):,}원", p["quantity"], len(p["image_paths"])
            ))

    def _start_upload(self):
        if not self.products:
            messagebox.showwarning("경고", "상품 목록을 먼저 불러오세요.")
            return
        if not self.automator or not self.automator.driver:
            messagebox.showwarning("경고", "먼저 브라우저를 실행하고 로그인하세요.")
            return
        if self.upload_thread and self.upload_thread.is_alive():
            messagebox.showwarning("경고", "업로드가 이미 진행 중입니다.")
            return

        confirm = messagebox.askyesno("확인", f"{len(self.products)}개 상품을 업로드하시겠습니까?")
        if not confirm:
            return

        self._stop_flag.clear()
        self.upload_thread = threading.Thread(target=self._upload_worker, daemon=True)
        self.upload_thread.start()

    def _upload_worker(self):
        total = len(self.products)
        success_count = 0
        self.logger.info(f"업로드 시작 — 총 {total}개 상품")
        self.status_var.set(f"업로드 중 (0/{total})")

        for idx, product in enumerate(self.products, 1):
            if self._stop_flag.is_set():
                self.logger.warn("업로드가 사용자에 의해 중단되었습니다.")
                break

            self.logger.info(f"[{idx}/{total}] {product['name']} 처리 중...")

            def prog_cb(v, i=idx, t=total):
                item_prog = (i - 1) / t * 100 + v / t
                self.progress_var.set(int(item_prog))
                self.progress_label.configure(text=f"{i} / {t}")
                self.status_var.set(f"업로드 중 ({i}/{t})")

            ok = self.automator.register_product(product, progress_cb=prog_cb)
            if ok:
                success_count += 1
            time.sleep(1)  # 사이트 부하 방지

        self.progress_var.set(100)
        self.progress_label.configure(text=f"{total} / {total}")
        self.logger.success(f"업로드 완료 — 성공: {success_count}/{total}")
        self.status_var.set(f"완료 ({success_count}/{total} 성공)")

        if success_count == total:
            self.after(0, lambda: messagebox.showinfo("완료", f"모든 상품({total}개) 업로드 성공!"))
        else:
            self.after(0, lambda: messagebox.showwarning(
                "부분 완료", f"{total}개 중 {success_count}개 성공\n{total-success_count}개 실패 (로그 확인)"))

    def _stop_upload(self):
        self._stop_flag.set()
        self.logger.warn("중단 요청됨. 현재 항목 완료 후 중단됩니다.")

    def _clear_log(self):
        self.log_text.configure(state="normal")
        self.log_text.delete(1.0, tk.END)
        self.log_text.configure(state="disabled")

    def _on_close(self):
        if messagebox.askokcancel("종료", "프로그램을 종료하시겠습니까?"):
            self._stop_flag.set()
            if self.automator:
                self.automator.quit()
            self.destroy()


# ─────────────────────────────────────────────
# 진입점
# ─────────────────────────────────────────────
if __name__ == "__main__":
    app = BunjangUploaderApp()
    app.mainloop()
