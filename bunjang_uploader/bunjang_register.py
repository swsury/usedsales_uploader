"""
번개장터 상품 자동등록 프로그램 (tkinter GUI + Selenium)

PDF 프로세스 그대로 구현:
  프로그램 실행 → Chrome 실행 → 로그인 여부 판단 → (미로그인 시) 네이버 로그인
  → 판매 목록 입력 (CSV UTF-8 일괄 로드)
  → 등록 예정 물품 목록 (수정 가능, 트리뷰)
  → 등록할 물품 선택 → 등록하기 버튼 → 행마다 반복 실행

요구 패키지: pip install selenium
크롬드라이버는 Selenium Manager가 자동 다운로드 (Selenium 4.6+).
"""

from __future__ import annotations

import csv
import os
import threading
import tkinter as tk
from dataclasses import dataclass, field, asdict
from pathlib import Path
from tkinter import filedialog, messagebox, ttk
from typing import List, Optional

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import (
    ElementClickInterceptedException,
    NoSuchElementException,
    TimeoutException,
)
import time

# ─────────────────────────────────────────────────────────────
# 사이트 정보 (bunjang.json 기반)
# ─────────────────────────────────────────────────────────────

NEW_PRODUCT_URL = "https://www.bunjang.co.kr/products/new"
LOGIN_URL = "https://www.bunjang.co.kr/login"
HOME_URL = "https://www.bunjang.co.kr/"

SEL = {
    "image_input": '#scroll-media input[type="file"]',
    "name_input": "#scroll-name input",
    "category_root": "#scroll-categoryId",
    "description_textarea": "#scroll-description textarea",
    "price_input": "#scroll-price input",
    "quantity_input": "#scroll-quantity input",
    "submit_xpath": '//button[normalize-space()="등록하기"]',
}

PRODUCT_STATUSES = (
    "새 상품 (미사용)",
    "사용감 없음",
    "사용감 적음",
    "사용감 많음",
    "고장/파손 상품",
)

# ─────────────────────────────────────────────────────────────
# 데이터 모델
# ─────────────────────────────────────────────────────────────

@dataclass
class Product:
    image_paths: str = ""        # 쉼표 구분 (CSV 칼럼 그대로 보존)
    name: str = ""
    category_l: str = ""
    category_m: str = ""
    category_s: str = ""
    status: str = ""
    description: str = ""
    price: str = ""
    quantity: str = "1"
    selected: bool = True

    def images(self) -> List[str]:
        return [p.strip() for p in self.image_paths.split(",") if p.strip()]

    def validate(self) -> Optional[str]:
        imgs = self.images()
        if not (1 <= len(imgs) <= 12):
            return f"이미지 수 오류 ({len(imgs)})"
        for p in imgs:
            if not Path(p).is_file():
                return f"이미지 파일 없음: {p}"
        if not self.name:
            return "상품명 누락"
        if len(self.name) > 40:
            return "상품명 40자 초과"
        if not self.category_l:
            return "카테고리(상) 누락"
        if self.status not in PRODUCT_STATUSES:
            return f"상품상태 오류: {self.status!r}"
        if not self.price.isdigit() or int(self.price) <= 0:
            return "가격 오류"
        if not self.quantity.isdigit() or int(self.quantity) < 1:
            return "수량 오류"
        return None


# ─────────────────────────────────────────────────────────────
# Selenium 컨트롤러
# ─────────────────────────────────────────────────────────────

class Bunjang:
    def __init__(self):
        self.driver: Optional[webdriver.Chrome] = None
        self.wait: Optional[WebDriverWait] = None

    def is_running(self) -> bool:
        return self.driver is not None

    def start_chrome(self, user_data_dir: Optional[str] = None, headless: bool = False) -> None:
        options = Options()
        if user_data_dir:
            options.add_argument(f"--user-data-dir={user_data_dir}")

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

        if headless:
            options.add_argument("--headless=new")

        self.driver = webdriver.Chrome(options=options)
        self.driver.execute_script(
            "Object.defineProperty(navigator, 'webdriver', {get: () => undefined})"
        )
        self.wait = WebDriverWait(self.driver, 20)
        self.driver.get(HOME_URL)

    def is_logged_in(self) -> bool:
        if not self.driver:
            return False
        self.driver.get(NEW_PRODUCT_URL)
        time.sleep(1.2)
        return "/login" not in self.driver.current_url

    def goto_login(self) -> None:
        self.driver.get(LOGIN_URL)

    def quit(self) -> None:
        if self.driver:
            try:
                self.driver.quit()
            except Exception:
                pass
            self.driver = None
            self.wait = None

    # ───── 등록 흐름 ─────

    def open_new_product(self):
        self.driver.get(NEW_PRODUCT_URL)
        self.wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, SEL["name_input"])))

    def upload_images(self, paths: List[str]):
        try:
            file_input = self.driver.find_element(By.CSS_SELECTOR, SEL["image_input"])
        except NoSuchElementException:
            self.driver.execute_script(
                f"document.querySelector('{SEL['image_input']}').style.display='block';"
            )
            file_input = self.driver.find_element(By.CSS_SELECTOR, SEL["image_input"])

        abs_paths = [str(Path(p).expanduser().resolve()) for p in paths]
        if file_input.get_attribute("multiple") is not None:
            file_input.send_keys("\n".join(abs_paths))
        else:
            for p in abs_paths:
                file_input.send_keys(p)
                time.sleep(0.3)
        time.sleep(1.0)

    def _set_text(self, css: str, value: str):
        el = self.driver.find_element(By.CSS_SELECTOR, css)
        # ★ 스티키 푸터(_footer_1bl5l_5)에 가리지 않도록 뷰포트 중앙으로 먼저 스크롤
        self.driver.execute_script(
            "arguments[0].scrollIntoView({block:'center', behavior:'instant'});", el
        )
        time.sleep(0.3)
        # ★ JS click으로 ElementClickInterceptedException(푸터 오버레이) 완전 우회
        self.driver.execute_script("arguments[0].click();", el)
        el.send_keys(Keys.CONTROL + "a")
        el.send_keys(Keys.DELETE)
        el.send_keys(value)

    def fill_name(self, name: str):
        self._set_text(SEL["name_input"], name)

    def select_category(self, l: str, m: str, s: str):
        if l:
            self._click_category(1, l)
        if m:
            self._click_category(2, m)
        if s:
            self._click_category(3, s)

    def _click_category(self, level: int, text: str):
        xpath = (
            f'//*[@id="scroll-categoryId"]//ul[{level}]/li'
            f'[normalize-space()="{text}" or .//span[normalize-space()="{text}"]]'
        )
        try:
            el = self.wait.until(EC.element_to_be_clickable((By.XPATH, xpath)))
        except TimeoutException:
            raise RuntimeError(f"카테고리(레벨 {level}) '{text}' 못 찾음")
        self._safe_click(el)
        time.sleep(0.4)

    def select_status(self, status: str):
        # 0) #scroll-condition 섹션을 화면 중앙으로 스크롤
        try:
            sec = self.driver.find_element(By.ID, "scroll-condition")
            self.driver.execute_script(
                "arguments[0].scrollIntoView({block:'center', behavior:'instant'});", sec
            )
            time.sleep(0.4)
        except NoSuchElementException:
            pass

        # 1) 드롭다운 트리거 버튼 클릭 — 여러 셀렉터 순서대로 시도
        trigger_selectors = [
            (By.CSS_SELECTOR, "#scroll-condition > div:nth-child(1) > div:nth-child(3) > div > button"),
            (By.CSS_SELECTOR, "#scroll-condition > div > div:nth-child(3) > div > button"),
            (By.CSS_SELECTOR, "#scroll-condition button"),
            (By.XPATH,        '//*[@id="scroll-condition"]//button'),
        ]
        trigger = None
        for by, sel in trigger_selectors:
            try:
                trigger = WebDriverWait(self.driver, 5).until(
                    EC.element_to_be_clickable((by, sel))
                )
                break
            except TimeoutException:
                continue
        if trigger is None:
            raise RuntimeError("상품상태 드롭다운 트리거 버튼을 찾을 수 없음")

        self._safe_click(trigger)
        time.sleep(1.2)  # ★ 드롭다운 열림 애니메이션 완료 대기

        # 2) 옵션 탐색 — 짧은 타임아웃으로 순차 시도 (20 s 타임아웃 → 자동 닫힘 방지)
        short_wait = WebDriverWait(self.driver, 3)
        option = None

        option_strategies = [
            # A: #scroll-condition 내부에서 텍스트 완전 일치
            (By.XPATH, f'//*[@id="scroll-condition"]//*[normalize-space()="{status}"]'),
            # B: ARIA role 기반
            (By.XPATH, f'//*[@role="listbox"]//*[normalize-space()="{status}"]'),
            (By.XPATH, f'//*[@role="menu"]//*[normalize-space()="{status}"]'),
            (By.XPATH, f'//*[@role="option"][normalize-space()="{status}"]'),
            # C: 공통 CSS 클래스 패턴
            (By.XPATH,
             f'//*[contains(@class,"option") or contains(@class,"Option")'
             f' or contains(@class,"item") or contains(@class,"Item")'
             f' or contains(@class,"list") or contains(@class,"List")]'
             f'[normalize-space()="{status}"]'),
            # D: 일반 리스트/버튼 요소
            (By.XPATH, f'//li[normalize-space()="{status}"]'),
            (By.XPATH, f'//button[normalize-space()="{status}"]'),
            # E: 최광역 — 페이지 어디서든 텍스트 일치
            (By.XPATH, f'//*[normalize-space()="{status}"]'),
        ]
        for by, sel in option_strategies:
            try:
                option = short_wait.until(EC.element_to_be_clickable((by, sel)))
                break
            except (TimeoutException, NoSuchElementException):
                continue

        # F: JS 폴백 — offsetParent 체크로 실제 표시 중인 요소만 선택
        if option is None:
            try:
                option = self.driver.execute_script(
                    """
                    var text = arguments[0];
                    var tags = ['li', 'button', 'span', 'div', 'a', '[role="option"]'];
                    var elems = document.querySelectorAll(tags.join(','));
                    // 1차: 완전 일치 + 표시 중
                    for (var i = 0; i < elems.length; i++) {
                        if (elems[i].textContent.trim() === text
                                && elems[i].offsetParent !== null) {
                            return elems[i];
                        }
                    }
                    // 2차: 포함 일치 + 표시 중
                    for (var i = 0; i < elems.length; i++) {
                        if (elems[i].textContent.trim().includes(text)
                                && elems[i].offsetParent !== null) {
                            return elems[i];
                        }
                    }
                    return null;
                    """,
                    status,
                )
            except Exception:
                pass

        if option is None:
            raise RuntimeError(
                f"상품상태 옵션 '{status}'을 찾을 수 없음 "
                "(드롭다운이 열리지 않았거나 DOM 구조가 변경됨)"
            )

        self._safe_click(option)
        time.sleep(0.4)

    def fill_description(self, text: str):
        self._set_text(SEL["description_textarea"], text)

    def fill_price(self, price: str):
        self._set_text(SEL["price_input"], price)

    def fill_quantity(self, qty: str):
        # 기본값이 이미 "1"이므로 수량 1이면 입력 생략
        if qty == "1":
            return
        # 수량이 1이 아닌 경우: 기존 기본값 "1"을 지우고 새 값 입력
        self._set_text(SEL["quantity_input"], qty)

    def submit(self):
        el = self.wait.until(EC.element_to_be_clickable((By.XPATH, SEL["submit_xpath"])))
        self._safe_click(el)
        time.sleep(2.0)

    def _safe_click(self, el: WebElement):
        try:
            self.driver.execute_script("arguments[0].scrollIntoView({block:'center'});", el)
            el.click()
        except ElementClickInterceptedException:
            self.driver.execute_script("arguments[0].click();", el)

    def register_one(self, p: Product, log):
        log("  · 판매 게시글 입력 페이지 이동")
        self.open_new_product()
        log(f"  · 이미지 등록 ({len(p.images())}개)")
        self.upload_images(p.images())
        log(f"  · 상품명 입력: {p.name}")
        self.fill_name(p.name)
        log(f"  · 카테고리: {p.category_l} > {p.category_m or '-'} > {p.category_s or '-'}")
        self.select_category(p.category_l, p.category_m, p.category_s)
        log(f"  · 상품상태: {p.status}")
        self.select_status(p.status)
        log("  · 설명 입력")
        self.fill_description(p.description)
        log(f"  · 가격 입력: ₩{int(p.price):,}")
        self.fill_price(p.price)
        if p.quantity == "1":
            log("  · 수량 1 → 입력 생략 (기본값 유지)")
        else:
            log(f"  · 수량 입력: {p.quantity}")
            self.fill_quantity(p.quantity)
        log("  · 등록하기 버튼 클릭")
        self.submit()


# ─────────────────────────────────────────────────────────────
# CSV 파서 (멀티라인 quoted 필드 지원)
# ─────────────────────────────────────────────────────────────

# 헤더 키 → Product 필드 매핑 (공백을 모두 제거한 정규화 키 기준)
HEADER_ALIASES = {
    "image_paths": ("이미지파일경로", "이미지경로", "이미지", "images", "imagepaths"),
    "name": ("상품명", "name", "title"),
    "category_l": ("카테고리상", "카테고리1", "카테고리대분류", "categoryl", "category1"),
    "category_m": ("카테고리중", "카테고리2", "카테고리중분류", "categorym", "category2"),
    "category_s": ("카테고리하", "카테고리3", "카테고리소분류", "categorys", "category3"),
    "status": ("상품상태", "상태", "status", "condition"),
    "description": ("설명", "description", "desc"),
    "price": ("가격", "price"),
    "quantity": ("수량", "quantity", "qty"),
}

def _norm_key(k: str) -> str:
    # 공백/BOM 제거, 소문자
    return "".join((k or "").split()).lower().lstrip("\ufeff")

def _pick(row_norm: dict, field: str) -> str:
    for alias in HEADER_ALIASES[field]:
        v = row_norm.get(_norm_key(alias))
        if v:
            return v.strip()
    return ""

def load_csv(path: str) -> List[Product]:
    items: List[Product] = []
    with open(path, encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        for raw in reader:
            row_norm = {_norm_key(k): (v or "") for k, v in raw.items()}
            items.append(Product(
                image_paths=_pick(row_norm, "image_paths"),
                name=_pick(row_norm, "name")[:40],
                category_l=_pick(row_norm, "category_l"),
                category_m=_pick(row_norm, "category_m"),
                category_s=_pick(row_norm, "category_s"),
                status=_pick(row_norm, "status"),
                description=_pick(row_norm, "description"),
                price=_pick(row_norm, "price"),
                quantity=(_pick(row_norm, "quantity") or "1") or "1",
            ))
    return items


# ─────────────────────────────────────────────────────────────
# 카테고리 트리 로드 (src/imports/카테고리_목록.csv)
# ─────────────────────────────────────────────────────────────

def load_category_tree() -> dict:
    """{ '여성의류': { '아우터': ['패딩', ...] } } 구조로 반환"""
    here = Path(__file__).resolve().parent
    candidates = [
        here / "../src/imports/카테고리_목록.csv",
        here / "카테고리_목록.csv",
    ]
    tree: dict = {}
    csv_path = next((c for c in candidates if c.exists()), None)
    if not csv_path:
        return tree
    with open(csv_path, encoding="utf-8-sig", newline="") as f:
        for i, row in enumerate(csv.reader(f)):
            if i == 0 or not row:
                continue
            l = row[0].strip() if len(row) > 0 else ""
            m = row[1].strip() if len(row) > 1 else ""
            s = row[2].strip() if len(row) > 2 else ""
            if not l:
                continue
            tree.setdefault(l, {})
            if not m:
                continue
            tree[l].setdefault(m, [])
            if s and s not in tree[l][m]:
                tree[l][m].append(s)
    return tree


# ─────────────────────────────────────────────────────────────
# 등록 이력 영속화
# ─────────────────────────────────────────────────────────────

import json
from datetime import datetime

HISTORY_FILE = Path.home() / ".bunjang_register_history.json"

@dataclass
class HistoryItem:
    image_paths: str = ""
    name: str = ""
    category_l: str = ""
    category_m: str = ""
    category_s: str = ""
    status: str = ""
    description: str = ""
    price: str = ""
    quantity: str = "1"
    registered_at: str = ""

def load_history() -> List[HistoryItem]:
    if not HISTORY_FILE.exists():
        return []
    try:
        data = json.loads(HISTORY_FILE.read_text(encoding="utf-8"))
        return [HistoryItem(**d) for d in data]
    except Exception:
        return []

def save_history(items: List[HistoryItem]) -> None:
    try:
        HISTORY_FILE.write_text(
            json.dumps([asdict(i) for i in items], ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
    except Exception:
        pass


# ─────────────────────────────────────────────────────────────
# tkinter GUI
# ─────────────────────────────────────────────────────────────

ACCENT = "#ff6b00"  # 시뮬레이터 헤더의 오렌지 톤

class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("번개장터 자동등록")
        self.geometry("1280x900")
        self.bj = Bunjang()
        self.products: List[Product] = []
        self.user_dir = os.path.expanduser("~/.bunjang_chrome")
        self.category_tree = load_category_tree()
        self.history: List[HistoryItem] = load_history()

        # ttk 스타일 (조금 더 모던하게)
        style = ttk.Style(self)
        try:
            style.theme_use("clam")
        except tk.TclError:
            pass
        style.configure("Accent.TButton", background=ACCENT, foreground="white", padding=6)
        style.map("Accent.TButton", background=[("active", "#e85f00")])
        style.configure("Section.TLabelframe.Label", font=("Helvetica", 11, "bold"))
        style.configure("Header.TLabel", font=("Helvetica", 16, "bold"))
        style.configure("Sub.TLabel", foreground="#666")

        self._build_ui()
        self.protocol("WM_DELETE_WINDOW", self._on_close)
        self._refresh_history()

    # ───── UI 구성 ─────

    def _build_ui(self):
        # 헤더
        header = ttk.Frame(self, padding=(14, 10))
        header.pack(fill="x")
        title_box = ttk.Frame(header)
        title_box.pack(side="left")
        icon = tk.Label(title_box, text="⚡", bg=ACCENT, fg="white",
                        font=("Helvetica", 18, "bold"), width=2)
        icon.pack(side="left", padx=(0, 8))
        ttk.Label(title_box, text="번개장터 자동등록", style="Header.TLabel").pack(side="left")
        ttk.Label(header,
                  text="Python + tkinter + Selenium 자동등록 프로그램",
                  style="Sub.TLabel").pack(side="left", padx=12)

        # 스크롤 컨테이너
        outer = ttk.Frame(self)
        outer.pack(fill="both", expand=True)
        canvas = tk.Canvas(outer, highlightthickness=0)
        vsb = ttk.Scrollbar(outer, orient="vertical", command=canvas.yview)
        canvas.configure(yscrollcommand=vsb.set)
        canvas.pack(side="left", fill="both", expand=True)
        vsb.pack(side="right", fill="y")
        body = ttk.Frame(canvas, padding=(14, 0, 14, 14))
        body_id = canvas.create_window((0, 0), window=body, anchor="nw")

        def _on_body_configure(_):
            canvas.configure(scrollregion=canvas.bbox("all"))
        def _on_canvas_configure(e):
            canvas.itemconfigure(body_id, width=e.width)
        body.bind("<Configure>", _on_body_configure)
        canvas.bind("<Configure>", _on_canvas_configure)
        # 휠 스크롤
        def _on_wheel(e):
            canvas.yview_scroll(int(-1 * (e.delta / 120)), "units")
        canvas.bind_all("<MouseWheel>", _on_wheel)
        canvas.bind_all("<Button-4>", lambda e: canvas.yview_scroll(-1, "units"))
        canvas.bind_all("<Button-5>", lambda e: canvas.yview_scroll(1, "units"))

        # ── 1. 브라우저 / 로그인 ─────────────────────────────
        sec1 = ttk.LabelFrame(body, text=" 1. 브라우저 / 로그인 ", style="Section.TLabelframe", padding=10)
        sec1.pack(fill="x", pady=(10, 8))
        self.btn_chrome = ttk.Button(sec1, text="Chrome 실행", command=self._on_run_chrome)
        self.btn_chrome.grid(row=0, column=0, padx=4, pady=4, sticky="w")
        self.btn_quit_chrome = ttk.Button(sec1, text="Chrome 종료", command=self._on_quit_chrome, state="disabled")
        self.btn_quit_chrome.grid(row=0, column=1, padx=4, pady=4)
        self.btn_login = ttk.Button(sec1, text="네이버 로그인", command=self._on_login, state="disabled")
        self.btn_login.grid(row=0, column=2, padx=4, pady=4)
        self.btn_check = ttk.Button(sec1, text="로그인 여부 판단", command=self._on_check_login, state="disabled")
        self.btn_check.grid(row=0, column=3, padx=4, pady=4)
        self.lbl_status = ttk.Label(sec1, text="● Chrome 미실행", foreground="gray")
        self.lbl_status.grid(row=0, column=4, padx=12)
        ttk.Label(
            sec1,
            text="프로그램 실행 → Chrome 실행 → 로그인 여부 판단 → (미로그인 시) 네이버 로그인",
            style="Sub.TLabel",
        ).grid(row=1, column=0, columnspan=5, sticky="w", pady=(6, 0))

        # ── 2. 판매 목록 입력 (CSV UTF-8 일괄 등록) ──────────
        sec2 = ttk.LabelFrame(body, text=" 2. 판매 목록 입력 (CSV UTF-8 일괄 등록) ", style="Section.TLabelframe", padding=10)
        sec2.pack(fill="x", pady=8)
        ttk.Button(sec2, text="📂 CSV 파일 불러오기", command=self._on_load_csv).grid(row=0, column=0, padx=4, pady=4)
        ttk.Button(sec2, text="＋ 빈 행 추가", command=self._on_add_row).grid(row=0, column=1, padx=4)
        ttk.Label(
            sec2,
            text="컬럼: 이미지 파일 경로, 상품명(40자), 카테고리 상/중/하, 상품상태, 설명, 가격, 수량 · 이미지는 쉼표(,)로 구분",
            style="Sub.TLabel", wraplength=1100, justify="left",
        ).grid(row=1, column=0, columnspan=6, sticky="w", pady=(6, 0))

        # ── 3. 등록 예정 물품 목록 ──────────────────────────
        sec3 = ttk.LabelFrame(body, text=" 3. 등록 예정 물품 목록 ", style="Section.TLabelframe", padding=10)
        sec3.pack(fill="both", expand=True, pady=8)

        # 일괄 적용 도구
        tools = ttk.Frame(sec3)
        tools.pack(fill="x", pady=(0, 6))
        self.lbl_selcount = ttk.Label(tools, text="선택됨: 0개", style="Sub.TLabel")
        self.lbl_selcount.grid(row=0, column=0, sticky="w", padx=(0, 12))
        ttk.Button(tools, text="전체 선택", command=lambda: self._select_all(True)).grid(row=0, column=1, padx=2)
        ttk.Button(tools, text="전체 해제", command=lambda: self._select_all(False)).grid(row=0, column=2, padx=2)

        # 상품상태 일괄
        ttk.Label(tools, text="상품상태").grid(row=1, column=0, sticky="e", padx=(0, 6), pady=(8, 0))
        self.cb_bulk_status = ttk.Combobox(tools, values=PRODUCT_STATUSES, state="readonly", width=20)
        self.cb_bulk_status.grid(row=1, column=1, columnspan=2, sticky="w", pady=(8, 0))
        ttk.Button(tools, text="선택 항목에 적용", command=self._apply_bulk_status).grid(row=1, column=3, padx=6, pady=(8, 0))

        # 카테고리 일괄
        ttk.Label(tools, text="카테고리").grid(row=2, column=0, sticky="e", padx=(0, 6), pady=(6, 0))
        self.cb_bulk_l = ttk.Combobox(tools, values=sorted(self.category_tree.keys()), state="readonly", width=18)
        self.cb_bulk_l.grid(row=2, column=1, sticky="w", pady=(6, 0))
        self.cb_bulk_m = ttk.Combobox(tools, values=[], state="readonly", width=18)
        self.cb_bulk_m.grid(row=2, column=2, sticky="w", pady=(6, 0))
        self.cb_bulk_s = ttk.Combobox(tools, values=[], state="readonly", width=18)
        self.cb_bulk_s.grid(row=2, column=3, sticky="w", padx=(2, 0), pady=(6, 0))
        ttk.Button(tools, text="선택 항목에 적용", command=self._apply_bulk_category).grid(row=2, column=4, padx=6, pady=(6, 0))
        self.cb_bulk_l.bind("<<ComboboxSelected>>", self._on_bulk_l_changed)
        self.cb_bulk_m.bind("<<ComboboxSelected>>", self._on_bulk_m_changed)

        # 일괄 삭제
        ttk.Label(tools, text="일괄 삭제").grid(row=3, column=0, sticky="e", padx=(0, 6), pady=(6, 0))
        ttk.Button(tools, text="🗑 선택 항목 삭제", command=self._on_delete_selected).grid(row=3, column=1, columnspan=2, sticky="w", pady=(6, 0))

        # Treeview
        tree_box = ttk.Frame(sec3)
        tree_box.pack(fill="both", expand=True)
        cols = ("sel", "name", "cat", "status", "price", "qty", "imgs")
        self.tree = ttk.Treeview(tree_box, columns=cols, show="headings", selectmode="extended", height=10)
        for c, label, w, anchor in [
            ("sel", "선택", 50, "center"),
            ("name", "상품명", 240, "w"),
            ("cat", "카테고리 (상 > 중 > 하)", 260, "w"),
            ("status", "상품상태", 120, "w"),
            ("price", "가격", 110, "e"),
            ("qty", "수량", 60, "center"),
            ("imgs", "이미지 수", 80, "center"),
        ]:
            self.tree.heading(c, text=label)
            self.tree.column(c, width=w, anchor=anchor)
        sb = ttk.Scrollbar(tree_box, orient="vertical", command=self.tree.yview)
        self.tree.configure(yscrollcommand=sb.set)
        self.tree.pack(side="left", fill="both", expand=True)
        sb.pack(side="right", fill="y")
        self.tree.bind("<Button-1>", self._on_tree_click)
        self.tree.bind("<Double-1>", self._on_tree_double_click)
        ttk.Label(sec3, text="행 더블클릭 → 수정 모달이 열립니다", style="Sub.TLabel").pack(anchor="w", pady=(4, 0))

        # ── 4. 등록하기 ───────────────────────────────────
        sec4 = ttk.LabelFrame(body, text=" 4. 선택 항목 등록하기 ", style="Section.TLabelframe", padding=10)
        sec4.pack(fill="x", pady=8)
        self.btn_register = ttk.Button(sec4, text="▶  선택 항목 등록하기", style="Accent.TButton",
                                       command=self._on_register)
        self.btn_register.pack(side="left", padx=4, pady=4)
        self.lbl_progress = ttk.Label(sec4, text="대기", style="Sub.TLabel")
        self.lbl_progress.pack(side="left", padx=12)
        self.pb = ttk.Progressbar(sec4, mode="determinate", length=340)
        self.pb.pack(side="left", padx=8)

        # ── 5. 등록 이력 / 수정 ─────────────────���───────────
        sec5 = ttk.LabelFrame(body, text=" 5. 등록 이력 / 수정 ", style="Section.TLabelframe", padding=10)
        sec5.pack(fill="x", pady=8)
        head5 = ttk.Frame(sec5)
        head5.pack(fill="x")
        ttk.Label(head5, text="🔍 상품명 검색").pack(side="left")
        self.var_search = tk.StringVar()
        self.var_search.trace_add("write", lambda *a: self._refresh_history())
        ttk.Entry(head5, textvariable=self.var_search, width=40).pack(side="left", padx=6)
        self.lbl_hist_count = ttk.Label(head5, text="0건", style="Sub.TLabel")
        self.lbl_hist_count.pack(side="left", padx=6)
        ttk.Button(head5, text="번개장터 관리 페이지 열기", command=self._open_manage_page).pack(side="right", padx=2)
        ttk.Button(head5, text="이력 전체 삭제", command=self._on_clear_history).pack(side="right", padx=2)

        hist_box = ttk.Frame(sec5)
        hist_box.pack(fill="x", pady=(6, 0))
        hcols = ("name", "cat", "status", "price", "qty", "at")
        self.tree_hist = ttk.Treeview(hist_box, columns=hcols, show="headings", height=6)
        for c, label, w, anchor in [
            ("name", "상품명", 260, "w"),
            ("cat", "카테고리", 240, "w"),
            ("status", "상태", 110, "w"),
            ("price", "가격", 100, "e"),
            ("qty", "수량", 60, "center"),
            ("at", "등록일", 160, "w"),
        ]:
            self.tree_hist.heading(c, text=label)
            self.tree_hist.column(c, width=w, anchor=anchor)
        hsb = ttk.Scrollbar(hist_box, orient="vertical", command=self.tree_hist.yview)
        self.tree_hist.configure(yscrollcommand=hsb.set)
        self.tree_hist.pack(side="left", fill="x", expand=True)
        hsb.pack(side="right", fill="y")
        self.tree_hist.bind("<Double-1>", self._on_history_double_click)

        hbtns = ttk.Frame(sec5)
        hbtns.pack(fill="x", pady=(6, 0))
        ttk.Button(hbtns, text="✎ 수정", command=self._on_history_edit).pack(side="left", padx=2)
        ttk.Button(hbtns, text="🗑 선택 삭제", command=self._on_history_remove).pack(side="left", padx=2)
        ttk.Label(hbtns,
                  text="브라우저 보안 정책상 번개장터 사이트의 등록 목록은 직접 가져올 수 없어, 이 프로그램으로 등록 성공한 상품을 로컬에 저장합니다.",
                  style="Sub.TLabel", wraplength=950).pack(side="left", padx=10)

        # ── 6. 등록 로그 ───────────────────────────────────
        sec6 = ttk.LabelFrame(body, text=" 6. 등록 진행 로그 ", style="Section.TLabelframe", padding=10)
        sec6.pack(fill="both", expand=False, pady=8)
        log_box = ttk.Frame(sec6)
        log_box.pack(fill="both", expand=True)
        self.txt_log = tk.Text(log_box, height=10, state="disabled", wrap="none",
                               bg="#fafafa", fg="#222", relief="flat")
        log_sb = ttk.Scrollbar(log_box, orient="vertical", command=self.txt_log.yview)
        self.txt_log.configure(yscrollcommand=log_sb.set)
        self.txt_log.pack(side="left", fill="both", expand=True)
        log_sb.pack(side="right", fill="y")

    # ───── 상태/로그 헬퍼 ─────

    def log(self, msg: str):
        self.txt_log.configure(state="normal")
        self.txt_log.insert("end", msg + "\n")
        self.txt_log.see("end")
        self.txt_log.configure(state="disabled")

    def set_status(self, text: str, color: str = "black"):
        self.lbl_status.configure(text=text, foreground=color)

    # ───── Chrome / 로그인 ─────

    def _on_run_chrome(self):
        if self.bj.is_running():
            messagebox.showinfo("알림", "이미 Chrome이 실행 중입니다")
            return
        try:
            self.log("Chrome 실행 중... (데스크톱 모드)")
            self.bj.start_chrome(self.user_dir)
            self.set_status("● Chrome 실행됨 (데스크톱)", "blue")
            self.log(f"데스크톱 번개장터 진입: {HOME_URL}")
            self.btn_login.configure(state="normal")
            self.btn_check.configure(state="normal")
            self.btn_quit_chrome.configure(state="normal")
            self.btn_chrome.configure(state="disabled")
            self.after(500, self._on_check_login)
        except Exception as e:
            messagebox.showerror("Chrome 실행 실패", str(e))
            self.log(f"[ERROR] {e}")

    def _on_quit_chrome(self):
        if not self.bj.is_running():
            return
        if not messagebox.askokcancel("Chrome 종료", "Chrome 창을 종료할까요?"):
            return
        self.bj.quit()
        self.set_status("● Chrome 미실행", "gray")
        self.log("Chrome 종료됨")
        self.btn_login.configure(state="disabled")
        self.btn_check.configure(state="disabled")
        self.btn_quit_chrome.configure(state="disabled")
        self.btn_chrome.configure(state="normal")

    def _on_check_login(self):
        if not self.bj.is_running():
            return
        self.log("로그인 여부 판단 중...")
        try:
            if self.bj.is_logged_in():
                self.set_status("● 로그인됨", "green")
                self.log("→ 로그인이 되어 있음")
            else:
                self.set_status("● 미로그인", "red")
                self.log("→ 로그인이 되어 있지 않음 (네이버 로그인 필요)")
        except Exception as e:
            self.log(f"[ERROR] {e}")

    def _on_login(self):
        if not self.bj.is_running():
            messagebox.showwarning("경고", "Chrome을 먼저 실행하세요")
            return
        self.bj.goto_login()
        self.log("로그인 페이지로 이동했습니다. 브라우저에서 네이버 로그인을 완료하세요.")
        messagebox.showinfo("로그인", "브라우저에서 네이버 로그인을 완료한 후 확인을 누르세요")
        self._on_check_login()

    # ───── CSV / 목록 ─────

    def _on_load_csv(self):
        path = filedialog.askopenfilename(
            title="CSV 파일 선택", filetypes=[("CSV UTF-8", "*.csv"), ("All", "*.*")]
        )
        if not path:
            return
        try:
            self.products = load_csv(path)
            self._refresh_tree()
            self.log(f"CSV 로드 완료: {len(self.products)}건")
        except Exception as e:
            messagebox.showerror("CSV 로드 실패", str(e))

    def _on_add_row(self):
        self.products.append(Product())
        self._refresh_tree()

    def _on_delete_selected(self):
        self.products = [p for i, p in enumerate(self.products) if not p.selected]
        self._refresh_tree()

    def _select_all(self, value: bool):
        for p in self.products:
            p.selected = value
        self._refresh_tree()

    def _refresh_tree(self):
        self.tree.delete(*self.tree.get_children())
        for i, p in enumerate(self.products):
            cat = " > ".join(x for x in (p.category_l, p.category_m, p.category_s) if x) or "-"
            self.tree.insert(
                "", "end", iid=str(i),
                values=(
                    "☑" if p.selected else "☐",
                    p.name or "(이름 없음)",
                    cat, p.status,
                    f"₩{int(p.price):,}" if p.price.isdigit() else p.price,
                    p.quantity, len(p.images()),
                ),
            )
        sel = sum(1 for p in self.products if p.selected)
        self.lbl_selcount.configure(text=f"선택됨: {sel}개 / 전체 {len(self.products)}개")

    # ── 일괄 적용 ──
    def _selected_products(self) -> List[Product]:
        return [p for p in self.products if p.selected]

    def _apply_bulk_status(self):
        s = self.cb_bulk_status.get()
        if not s:
            messagebox.showinfo("알림", "상품상태를 선택하세요"); return
        targets = self._selected_products()
        if not targets:
            messagebox.showinfo("알림", "선택된 항목이 없습니다"); return
        for p in targets:
            p.status = s
        self.log(f"선택 {len(targets)}개에 상품상태 '{s}' 일괄 적용")
        self._refresh_tree()

    def _on_bulk_l_changed(self, _evt):
        l = self.cb_bulk_l.get()
        self.cb_bulk_m.set("")
        self.cb_bulk_s.set("")
        self.cb_bulk_m.configure(values=sorted((self.category_tree.get(l) or {}).keys()))
        self.cb_bulk_s.configure(values=[])

    def _on_bulk_m_changed(self, _evt):
        l = self.cb_bulk_l.get()
        m = self.cb_bulk_m.get()
        self.cb_bulk_s.set("")
        self.cb_bulk_s.configure(values=(self.category_tree.get(l, {}).get(m) or []))

    def _apply_bulk_category(self):
        l = self.cb_bulk_l.get(); m = self.cb_bulk_m.get(); s = self.cb_bulk_s.get()
        if not l:
            messagebox.showinfo("알림", "카테고리(상)을 선택하세요"); return
        targets = self._selected_products()
        if not targets:
            messagebox.showinfo("알림", "선택된 항목이 없습니다"); return
        for p in targets:
            p.category_l = l; p.category_m = m; p.category_s = s
        self.log(f"선택 {len(targets)}개에 카테고리 '{l} > {m or '-'} > {s or '-'}' 일괄 적용")
        self._refresh_tree()

    # ── 등록 이력 ──
    def _refresh_history(self):
        q = (self.var_search.get() or "").strip().lower() if hasattr(self, "var_search") else ""
        self.tree_hist.delete(*self.tree_hist.get_children())
        filtered = [
            (i, h) for i, h in enumerate(self.history)
            if not q or q in (h.name or "").lower()
        ]
        for i, h in filtered:
            cat = " > ".join(x for x in (h.category_l, h.category_m, h.category_s) if x) or "-"
            self.tree_hist.insert(
                "", "end", iid=str(i),
                values=(
                    h.name, cat, h.status,
                    f"₩{int(h.price):,}" if h.price.isdigit() else h.price,
                    h.quantity, h.registered_at,
                ),
            )
        self.lbl_hist_count.configure(text=f"{len(filtered)} / {len(self.history)}건")

    def _selected_history_index(self) -> Optional[int]:
        sel = self.tree_hist.selection()
        if not sel:
            return None
        return int(sel[0])

    def _on_history_double_click(self, _e):
        self._on_history_edit()

    def _on_history_edit(self):
        idx = self._selected_history_index()
        if idx is None:
            messagebox.showinfo("알림", "이력에서 항목을 선택하세요"); return
        item = self.history[idx]
        # HistoryItem → Product 임시 객체로 모달 띄우고 저장 시 이력에 다시 반영
        proxy = Product(
            image_paths=item.image_paths, name=item.name,
            category_l=item.category_l, category_m=item.category_m, category_s=item.category_s,
            status=item.status, description=item.description,
            price=item.price, quantity=item.quantity,
        )
        def _saved():
            item.image_paths = proxy.image_paths
            item.name = proxy.name
            item.category_l = proxy.category_l
            item.category_m = proxy.category_m
            item.category_s = proxy.category_s
            item.status = proxy.status
            item.description = proxy.description
            item.price = proxy.price
            item.quantity = proxy.quantity
            save_history(self.history)
            self._refresh_history()
            self.log(f"이력 항목 수정: {item.name}")
        EditDialog(self, proxy, on_save=_saved)

    def _on_history_remove(self):
        idx = self._selected_history_index()
        if idx is None:
            messagebox.showinfo("알림", "이력에서 항목을 선택하세요"); return
        name = self.history[idx].name
        self.history.pop(idx)
        save_history(self.history)
        self._refresh_history()
        self.log(f"이력에서 삭제: {name}")

    def _on_clear_history(self):
        if not self.history:
            return
        if not messagebox.askokcancel("이력 삭제", "등록 이력을 모두 삭제할까요?"):
            return
        self.history.clear()
        save_history(self.history)
        self._refresh_history()

    def _open_manage_page(self):
        import webbrowser
        q = (self.var_search.get() or "").strip()
        url = "https://m.bunjang.co.kr/products/manage?tab=ALL&size=10&page=0"
        if q:
            url += f"&q={q}"
        webbrowser.open(url)

    def _on_tree_click(self, event):
        # '선택' 컬럼 클릭 시 토글
        region = self.tree.identify("region", event.x, event.y)
        col = self.tree.identify_column(event.x)
        row = self.tree.identify_row(event.y)
        if region == "cell" and col == "#1" and row:
            idx = int(row)
            self.products[idx].selected = not self.products[idx].selected
            self._refresh_tree()

    def _on_tree_double_click(self, event):
        row = self.tree.identify_row(event.y)
        if not row:
            return
        idx = int(row)
        EditDialog(self, self.products[idx], on_save=lambda: self._refresh_tree())

    # ───── 등록 실행 ─────

    def _on_register(self):
        if not self.bj.is_running():
            messagebox.showwarning("경고", "Chrome을 먼저 실행하세요")
            return
        if not self.bj.is_logged_in():
            messagebox.showwarning("경고", "로그인이 필요합니다")
            return
        targets = [p for p in self.products if p.selected]
        if not targets:
            messagebox.showinfo("알림", "등록할 물품을 선택하세요")
            return
        self.btn_register.configure(state="disabled")
        threading.Thread(target=self._register_thread, args=(targets,), daemon=True).start()

    def _register_thread(self, targets: List[Product]):
        ok = ng = 0
        total = len(targets)
        self.after(0, lambda: self.pb.configure(maximum=total, value=0))
        self.log(f"=== 등록 시작 (총 {total}건) ===")
        for i, p in enumerate(targets, 1):
            self.after(0, lambda i=i: self.lbl_progress.configure(text=f"{i}/{total} 진행 중"))
            self.after(0, lambda i=i: self.pb.configure(value=i - 1))
            err = p.validate()
            if err:
                self.log(f"[{i}/{total}] ✗ 검증 실패: {p.name} - {err}")
                ng += 1
                continue
            try:
                self.log(f"[{i}/{total}] ▸ 등록 시작: {p.name}")
                self.bj.register_one(p, self.log)
                self.log(f"[{i}/{total}] ✓ 완료: {p.name}")
                ok += 1
                # 이력 저장
                self.history.insert(0, HistoryItem(
                    image_paths=p.image_paths, name=p.name,
                    category_l=p.category_l, category_m=p.category_m, category_s=p.category_s,
                    status=p.status, description=p.description,
                    price=p.price, quantity=p.quantity,
                    registered_at=datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                ))
                save_history(self.history)
                self.after(0, self._refresh_history)
            except Exception as e:
                self.log(f"[{i}/{total}] ✗ 실패: {p.name} - {e}")
                ng += 1
            self.after(0, lambda i=i: self.pb.configure(value=i))
        self.log(f"=== 종료: 성공 {ok} / 실패 {ng} / 총 {total} ===")
        self.after(0, lambda: self.lbl_progress.configure(text=f"완료 ({ok}/{total})"))
        self.after(0, lambda: self.btn_register.configure(state="normal"))

    def _on_close(self):
        if messagebox.askokcancel("종료", "프로그램을 종료할까요?"):
            self.bj.quit()
            self.destroy()


# ─────────────────────────────────────────────────────────────
# 수정 다이얼로그
# ─────────────────────────────────────────────────────────────

class EditDialog(tk.Toplevel):
    def __init__(self, master: tk.Tk, product: Product, on_save):
        super().__init__(master)
        self.title("상품 수정")
        self.geometry("640x620")
        self.product = product
        self.on_save = on_save
        self.transient(master)
        self.grab_set()

        frm = ttk.Frame(self, padding=12)
        frm.pack(fill="both", expand=True)

        self.vars = {
            "image_paths": tk.StringVar(value=product.image_paths),
            "name": tk.StringVar(value=product.name),
            "category_l": tk.StringVar(value=product.category_l),
            "category_m": tk.StringVar(value=product.category_m),
            "category_s": tk.StringVar(value=product.category_s),
            "status": tk.StringVar(value=product.status),
            "price": tk.StringVar(value=product.price),
            "quantity": tk.StringVar(value=product.quantity),
        }

        def add_row(r, label, widget):
            ttk.Label(frm, text=label).grid(row=r, column=0, sticky="ne", padx=4, pady=4)
            widget.grid(row=r, column=1, sticky="ew", padx=4, pady=4)

        frm.columnconfigure(1, weight=1)

        add_row(0, "이미지 경로\n(쉼표 구분, 최대 12개)",
                ttk.Entry(frm, textvariable=self.vars["image_paths"]))
        add_row(1, "상품명 (40자)",
                ttk.Entry(frm, textvariable=self.vars["name"]))
        add_row(2, "카테고리 상",
                ttk.Entry(frm, textvariable=self.vars["category_l"]))
        add_row(3, "카테고리 중",
                ttk.Entry(frm, textvariable=self.vars["category_m"]))
        add_row(4, "카테고리 하",
                ttk.Entry(frm, textvariable=self.vars["category_s"]))
        add_row(5, "상품상태",
                ttk.Combobox(frm, textvariable=self.vars["status"],
                             values=PRODUCT_STATUSES, state="readonly"))

        ttk.Label(frm, text="설명").grid(row=6, column=0, sticky="ne", padx=4, pady=4)
        self.txt_desc = tk.Text(frm, height=8, wrap="word")
        self.txt_desc.insert("1.0", product.description)
        self.txt_desc.grid(row=6, column=1, sticky="nsew", padx=4, pady=4)
        frm.rowconfigure(6, weight=1)

        add_row(7, "가격", ttk.Entry(frm, textvariable=self.vars["price"]))
        add_row(8, "수량", ttk.Entry(frm, textvariable=self.vars["quantity"]))

        btns = ttk.Frame(frm)
        btns.grid(row=9, column=0, columnspan=2, pady=10, sticky="e")
        ttk.Button(btns, text="취소", command=self.destroy).pack(side="right", padx=4)
        ttk.Button(btns, text="수정 완료", command=self._save).pack(side="right", padx=4)

    def _save(self):
        self.product.image_paths = self.vars["image_paths"].get().strip()
        self.product.name = self.vars["name"].get().strip()[:40]
        self.product.category_l = self.vars["category_l"].get().strip()
        self.product.category_m = self.vars["category_m"].get().strip()
        self.product.category_s = self.vars["category_s"].get().strip()
        self.product.status = self.vars["status"].get().strip()
        self.product.description = self.txt_desc.get("1.0", "end").rstrip()
        self.product.price = self.vars["price"].get().strip()
        self.product.quantity = self.vars["quantity"].get().strip() or "1"
        self.on_save()
        self.destroy()


# ─────────────────────────────────────────────────────────────
# 진입점
# ─────────────────────────────────────────────────────────────

if __name__ == "__main__":
    App().mainloop()