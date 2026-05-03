const fs = require('fs');
const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    const lhApi = await import('lighthouse'); // v10.0.0 or later
    const flags = {
        screenEmulation: {
            disabled: true
        }
    }
    const config = lhApi.desktopConfig;
    const lhFlow = await lhApi.startFlow(page, {name: 'Recording 2026. 5. 2. at 오후 3:37:38', config, flags});
    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1004,
            height: 919
        })
    }
    await lhFlow.startNavigation();
    {
        const targetPage = page;
        await targetPage.goto('https://m.bunjang.co.kr/products/new');
    }
    await lhFlow.endNavigation();
    await lhFlow.startTimespan();
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-media label'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-media\\"]/div[1]/div[3]/div[1]/label)'),
            targetPage.locator(':scope >>> #scroll-media label')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 126,
                y: 61.203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(상품명을 입력해 주세요.)'),
            targetPage.locator('#scroll-name input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-name\\"]/div[1]/div[3]/div/div/div/input)'),
            targetPage.locator(':scope >>> #scroll-name input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 173,
                y: 8,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div/ul/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 152,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(아우터)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 29,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 88,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 93,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 92,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 88,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 86,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 113,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 173,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 141,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 122,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 107,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 96,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 91,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-text(민소매 티셔츠)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 75,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 75,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 138,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 129,
                y: 27.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 128,
                y: 34.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 125,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(트레이닝/조거팬츠)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 109,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 117,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 110,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 117,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60,
                y: 32.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(미디 스커트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 59,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(미니 스커트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 68,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84,
                y: 28.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(미디 원피스)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 63,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(미니 원피스)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 141,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 114,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 95,
                y: 29.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(트레이닝/스웨트 셋업)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(기타 셋업/세트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 77,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(1) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(1) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 159,
                y: 29.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 86,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 125,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 115,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 115,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 115,
                y: 29.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 121,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 117,
                y: 24.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 151,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(후드티/후드집업)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 28.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 98,
                y: 24.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 105,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84,
                y: 35.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 36.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 66,
                y: 29.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(트레이닝/조거팬츠)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 64,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(반바지)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 21,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(기타 바지)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 33,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(점프수트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 50,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 127,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 100,
                y: 41.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(기타 셋업/세트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 78,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(언더웨어/홈웨어)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 78,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 125,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 99,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 100,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 168,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 113,
                y: 30.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 120,
                y: 30.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(1) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(1) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(스니커즈)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 3,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 2,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(샌들/슬리퍼)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 67,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 28.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 77,
                y: 35.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(기타 남성화)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 62,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 99,
                y: 24.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 108,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 98,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(단화/플랫슈즈)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 78,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 46,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 45,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(야구화)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 32,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(기타 스포츠화)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 33,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(1) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(1) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 32.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 37.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(클러치백)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 24,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(숄더백)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 21,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(크로스백)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 38,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 54,
                y: 38.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 65,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(클러치)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 63,
                y: 35.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 65,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(브리프케이스)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60,
                y: 0.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 41,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(기타 남성가방)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 57,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(기타 여행용 가방)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 46,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 91,
                y: 36.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 149,
                y: 27.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 117,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(1) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(1) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 136,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 103,
                y: 34.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(프리미엄 시계\\(쿼츠\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 86,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(프리미엄 시계\\(기계식\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(일반 시계\\(디지털\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 91,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 140,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 140,
                y: 26.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 143,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 180,
                y: 0.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 180,
                y: 39.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(프리미엄 시계\\(쿼츠\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(프리미엄 시계\\(기계식\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 37,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(일반 시계\\(디지털\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 48,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 77,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 80,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 73,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 92,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(기타 시계용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 81,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[6])'),
            targetPage.locator(':scope >>> li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 131,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 85,
                y: 33.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(다이아몬드 귀걸이)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82,
                y: 33.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 80,
                y: 36.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 93,
                y: 39.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 87,
                y: 30.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(귀찌/이어커프)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 67,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 122,
                y: 26.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 189,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 161,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 131,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 120,
                y: 40.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 105,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 73,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 144,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 130,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 120,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 151,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 129,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 118,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 181,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(다이아몬드 반지)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 54,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(금반지)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 36,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 62,
                y: 33.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 125,
                y: 26.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(귀금속 쥬얼리 세트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 67,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(1) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(1) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(패션 액세서리)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 51,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 108,
                y: 27.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 79,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 75,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(기타\\(모자\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 54,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 75,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 129,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 89,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 137,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 68,
                y: 36.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 63,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(스카프/넥타이)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 33.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 37,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 124,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(남성 벨트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 40,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(여성 벨트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 36,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 177,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 154,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 129,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 134,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 104,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[9]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-text(기타 액세서리)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(1) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(1) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 58,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 88,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 122,
                y: 28.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 119,
                y: 42.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(케이블/충전기/주변기기)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 108,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(웨어러블\\(워치/밴드\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 65,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 177,
                y: 24.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(케이스/보호필름/액세서리)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 147,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(케이블/충전기/주변기기)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 118,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(오디오/영상/관련기기)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 109,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 62,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 52,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(스피커/앰프)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 54,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(MP3/PMP)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 58,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(비디오/프로젝터)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 62,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(오디오/홈시어터)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 57,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 62,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 102,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 110,
                y: 39.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 96,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 73,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 57,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 86,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 137,
                y: 42.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 118,
                y: 35.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 85,
                y: 32.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(기타 게임/타이틀)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 49,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 92,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(필름카메라/중형카메라)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(DSLR/미러리스)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 48,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(렌즈/필터/컨버터)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(일반디카/토이카메라)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(삼각대/플래시/조명)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(디지털 캠코더)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(메모리/배터리/가방)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 75,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 81,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 160,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 140,
                y: 24.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 123,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 109,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 100,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(쿨러/파워서플라이)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 77,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-text(소모품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 35,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 171,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(9)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[9])'),
            targetPage.locator(':scope >>> li:nth-of-type(9)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 73,
                y: 27.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 132,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 128,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 131,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 125,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 116,
                y: 32.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(식기세척기)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 64,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(9)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[9])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(9)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 67,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(10)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[10])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(10)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(11) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[11]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(11) > span'),
            targetPage.locator('::-p-text(전자레인지)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 48,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(12) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[12]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(12) > span'),
            targetPage.locator('::-p-text(음식물 처리기)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 78,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(피부케어기기)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(고데기)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 32,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(면도기/이발기)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 46,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(제모기)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 96,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 88,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 104,
                y: 26.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[8]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-text(사무기기\\(복사기/팩스 등\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[9]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-text(기타 가전제품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 0.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(10)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[10])'),
            targetPage.locator(':scope >>> li:nth-of-type(10)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 102,
                y: 24.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 101,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 32,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(민물 낚시)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 38,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(루어/플라이 낚시)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 79,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(낚시 의류 및 기타 용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 0.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 116,
                y: 27.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(축구 의류/잡화)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(축구 용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 21,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(굿즈\\(카드/사인볼 등\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 48,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 112,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 126,
                y: 26.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 116,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 107,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(굿즈\\(카드/사인볼 등\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 41,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 66,
                y: 34.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 65,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(굿즈\\(카드/사인볼 등\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 117,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(자전거 의류 및 액세서리)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 50,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(자전거 부품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 43,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 65,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 78,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(MTB/산악)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 62,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(전동/하이브리드)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(미니벨로/접이식)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-text(기타 자전거)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 57,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 112,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(남성 등산복)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 54,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 59,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 58,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(암벽/클라이밍)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 81,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(기타 등산 용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 65,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[9]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-text(헬스/요가/필라테스)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 44,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82,
                y: 32.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(기타 용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 32,
                y: 0.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(10) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[10]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(10) > span'),
            targetPage.locator('::-p-text(인라인/스케이트보드)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 106,
                y: 0.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(11)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[11])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(11)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 122,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(12)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[12])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(12)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 78,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(13)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[13])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(13)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(14)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[14])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(14)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 86,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(15)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[15])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(15)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(16)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[16])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(16)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(17)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[17])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(17)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 120,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(스키/보드 의류 및 잡화)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 116,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 100,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(기타 겨울 스포츠)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 64,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(18)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[18])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(18)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 101,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(남성 수영복/래쉬가드)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 64,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(여성 수영복/래쉬가드)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 57,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(수영/물놀이 용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 58,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(19)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[19])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(19)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 113,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 133,
                y: 27.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 125,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 127,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(20)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[20])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(20)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 132,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(1) > li:nth-of-type(11)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[11])'),
            targetPage.locator(':scope >>> ul:nth-of-type(1) > li:nth-of-type(11)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 87,
                y: 38.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(차량 용품/부품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(타이어/휠)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 85,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(네비게이션/블랙박스)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 95,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(카오디오/영상)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 78,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 137,
                y: 26.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 30,
                y: 33.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(오토바이\\(125cc 초과\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 14,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(오토바이 용품/부품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 90,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 52,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(오토바이 부품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(오토바이/튜닝 용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 95,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(12)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[12])'),
            targetPage.locator(':scope >>> li:nth-of-type(12)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 109,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 114,
                y: 30.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(팬시/포토카드)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 54,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 33.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(기타\\(보이그룹\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 44,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 163,
                y: 32.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 88,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(팬시/포토카드)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 81,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 79,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 77,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 76,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(의류/패션잡화)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(기타\\(걸그룹\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 45,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 134,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 88,
                y: 30.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 112,
                y: 28.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 90,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 87,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 68,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 80,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(기타\\(솔로-남\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 92,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 111,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 87,
                y: 34.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 88,
                y: 24.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 100,
                y: 38.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 110,
                y: 32.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 111,
                y: 29.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 108,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 155,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(음반/영상물)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 52,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(팬시/포토카드)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 59,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(포스터/화보)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 80,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 68,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(의류/패션잡화)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(기타\\(배우-남\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 151,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 91,
                y: 32.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 97,
                y: 26.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 86,
                y: 28.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(인형/피규어)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 67,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 81,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(의류/패션잡화)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 105,
                y: 27.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(방송/예능/캐릭터)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(음반/영상물)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 35,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(팬시/포토카드)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 39,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(포스터/화보)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 44,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(인형/피규어)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 44,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(응원도구)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 46,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(의류/패션잡화)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 65,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 57,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(13)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[13])'),
            targetPage.locator(':scope >>> li:nth-of-type(13)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 142,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 105,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 91,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 92,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 90,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(14)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[14])'),
            targetPage.locator(':scope >>> li:nth-of-type(14)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 163,
                y: 28.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56,
                y: 35.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(15)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[15])'),
            targetPage.locator(':scope >>> li:nth-of-type(15)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 105,
                y: 33.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 64,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 28.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 29.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(건반악기)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 51,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 73,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 67,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(16)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[16])'),
            targetPage.locator(':scope >>> li:nth-of-type(16)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 112,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 76,
                y: 27.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 109,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 99,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 99,
                y: 27.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 92,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(학습/사전/참고서)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 86,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 90,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(9)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[9])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(9)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 119,
                y: 34.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(10)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[10])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(10)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 99,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(11)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[11])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(11)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(12)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[12])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(12)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(13)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[13])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(13)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 73,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3)'),
            targetPage.locator('::-p-text(학습도구/문구/필기류미술/화방용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 98,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 92,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(미술/화방용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(기프티콘/쿠폰)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(치킨/피자/햄버거)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 80,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(베이커리/도넛/아이스크림)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 73,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(커피\\(음료\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 63,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(편의점)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 36,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(기타\\(기프티콘/쿠폰\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 62,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 105,
                y: 30.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27,
                y: 37.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(백화점)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 29,
                y: 34.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(기타\\(상품권\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 37,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 64,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(뮤지컬/연극)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(콘서트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 34,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(영화\\(예매/관람권\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 48,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(여행/숙박/렌트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 78,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(공연/전시/행사)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-text(기타\\(티켓\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 57,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(17)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[17])'),
            targetPage.locator(':scope >>> li:nth-of-type(17)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 108,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 125,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 142,
                y: 35.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 137,
                y: 29.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 114,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 111,
                y: 26.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 104,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 90,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 126,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 42,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 42,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(립틴트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 37,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(립밤/립글로즈)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 52,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(치크/블러셔)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 44,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-text(기타\\(색조메이크업\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(베이스메이크업)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 89,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 87,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 75,
                y: 29.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 86,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(파우더/팩트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(프라이머/컨실러)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 90,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(기타\\(베이스메이크업\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 73,
                y: 0.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 123,
                y: 24.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 28.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 91,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 95,
                y: 27.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 103,
                y: 41.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 100,
                y: 34.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(바디클렌져/로션)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 49,
                y: 35.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(향수/아로마)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 49,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(남성 향수)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 43,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(남여공용 향수)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 0.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 127,
                y: 24.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(네일아트/스티커)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(매니큐어/페디큐어)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 57,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 64,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 110,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(뷰티소품\\(퍼프/거울\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(메이크업 브러쉬)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 62,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(화장품 파우치/정리함)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 58,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 48,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[8]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-text(다이어트/이너뷰티)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(9)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[9])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(9)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 101,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(클렌징/마스크)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 43,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(에센스/크림)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 46,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(BB크림)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 36,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(선케어)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 34,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 50,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[9]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-text(기타\\(남성화장품\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(18) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[18]/span)'),
            targetPage.locator(':scope >>> li:nth-of-type(18) > span'),
            targetPage.locator('::-p-text(가구/인테리어)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 49,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 90,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 96,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(수공예 용품/부자재)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(셀프 인테리어 용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 43,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(인테리어 소품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(포스터/그림/액자)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 62,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(디퓨저/캔들)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(쿠션/방석)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 66,
                y: 40.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(식탁보/테이블 매트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 63,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 26.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(기타 인테리어 소품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 95,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 97,
                y: 26.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(식물/꽃)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 43,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(원예 용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 23,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 80,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[8]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-text(카페트/러그/매트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[9]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-text(커튼/블라인드)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 58,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(19)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[19])'),
            targetPage.locator(':scope >>> li:nth-of-type(19)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 112,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 124,
                y: 29.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 39,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 57,
                y: 35.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 0.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 73,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 89,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(냄비/프라이팬)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 67,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(조리도구)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(9)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[9])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(9)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 79,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(10) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[10]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(10) > span'),
            targetPage.locator('::-p-text(주전자/티포트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 68,
                y: 0.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(11)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[11])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(11)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 73,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(12)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[12])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(12)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 75,
                y: 29.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(13) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[13]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(13) > span'),
            targetPage.locator('::-p-text(주방수납용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(14) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[14]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(14) > span'),
            targetPage.locator('::-p-text(기타 주방용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 118,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 81,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 77,
                y: 30.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(샤워기/헤드/수전용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 78,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(욕실수납/정리)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 52,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(욕조/반신욕 용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(변기/비데용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 68,
                y: 39.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 95,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(청소용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 40,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(세탁/빨래용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 46,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 44,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 65,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 65,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 95,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 91,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(20)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[20])'),
            targetPage.locator(':scope >>> li:nth-of-type(20)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 103,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(드릴/전동공구)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(수공구/가정용 공구)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 67,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(산업용품/자재)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 78,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(측정/계측/레벨)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 78,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(공장기계/용접/가스)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 76,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[8]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-text(기타 산업용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 62,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 160,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 148,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 136,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 126,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 114,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 100,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[8]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-text(간편조리식품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 68,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(9)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[9])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(9)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(22) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[22]/span)'),
            targetPage.locator(':scope >>> li:nth-of-type(22) > span'),
            targetPage.locator('::-p-text(유아동/출산)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(상하복/세트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(코트/정장)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56,
                y: 0.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 90,
                y: 27.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 95,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 62,
                y: 24.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 76,
                y: 28.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[9]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-text(스포츠/테마의류)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(10)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[10])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(10)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 78,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(11)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[11])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(11)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 79,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(여주니어의류\\(7세~\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 23,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 107,
                y: 28.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 87,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(니트/스웨터)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 68,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(블라우스/셔츠)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 64,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74,
                y: 32.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(9)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[9])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(9)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(10)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[10])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(10)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(11) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[11]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(11) > span'),
            targetPage.locator('::-p-text(스포츠/테마의류)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 66,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(12)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[12])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(12)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 79,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(13) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[13]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(13) > span'),
            targetPage.locator('::-p-text(기타 여주니어의류)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(남주니어의류\\(7세~\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 29,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 86,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(자켓/점퍼)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 45,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84,
                y: 36.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82,
                y: 37.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5) > span'),
            targetPage.locator('::-p-text(니트/스웨터)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 65,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(셔츠/남방)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 44,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 41,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 79,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(9)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[9])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(9)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 79,
                y: 0.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(10)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[10])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(10)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 68,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(11)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[11])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(11)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 122,
                y: 27.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 77,
                y: 32.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 65,
                y: 35.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 73,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 41,
                y: 25.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 81,
                y: 26.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(기타 신발/가방/잡화)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 96,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 98,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(보행기/쏘서)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 68,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 81,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6) > span'),
            targetPage.locator('::-p-text(가구/침대/매트)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 62,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-text(목욕/구강용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 52,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(9)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[9])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(9)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 76,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(10) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[10]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(10) > span'),
            targetPage.locator('::-p-text(유아동 스킨케어)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(11) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[11]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(11) > span'),
            targetPage.locator('::-p-text(기타 유아동용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 75,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(8)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[8])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(8)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 41,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(임부스킨케어)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 68,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 89,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[9]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-text(교구/완구/인형)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 63,
                y: 38.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(캐릭터완구/로봇)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 14.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(교구/CD/DVD)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(퍼즐/블록)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 49,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 77,
                y: 13.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 79,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(자전거/승용완구)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[8]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-text(물놀이/계절용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 81,
                y: 1.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[9]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(9) > span'),
            targetPage.locator('::-p-text(놀이집/텐트/미끄럼틀)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(10) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[10]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(10) > span'),
            targetPage.locator('::-p-text(기타 교구/완구/인형)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 93,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(10) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[10]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(10) > span'),
            targetPage.locator('::-p-text(수유/이유용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 2.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(젖병/세정용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 75,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 67,
                y: 24.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-text(수저/식판/이유식용품)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 63,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 64,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(23)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[23])'),
            targetPage.locator(':scope >>> li:nth-of-type(23)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 140,
                y: 16.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 154,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 120,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 134,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 139,
                y: 22.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 122,
                y: 23.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[7]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(7) > span'),
            targetPage.locator('::-p-text(기타\\(반려동물 용품\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 112,
                y: 3.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[8]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(8) > span'),
            targetPage.locator('::-p-text(기타\\(반려동물 사료/간식\\))')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 114,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 109,
                y: 21.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(24)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[1]/li[24])'),
            targetPage.locator(':scope >>> li:nth-of-type(24)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94,
                y: 9.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(25)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul/li[25])'),
            targetPage.locator(':scope >>> li:nth-of-type(25)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 88,
                y: 19.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[1])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 139,
                y: 26.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 132,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 102,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 86,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 75,
                y: 12.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[2]/span)'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(생활서비스/지식)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 48,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(상담/노하우)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 7.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 52,
                y: 4.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 52,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[3])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 100,
                y: 36.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1) > span'),
            targetPage.locator('::-p-text(피부/메이크업)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(의류/헤어)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 24,
                y: 17.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 16,
                y: 0.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[4])'),
            targetPage.locator(':scope >>> #scroll-categoryId ul:nth-of-type(2) > li:nth-of-type(4)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 81,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 96,
                y: 18.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(타이핑/문서)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 63,
                y: 15.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3) > span'),
            targetPage.locator('::-p-text(번역/통역)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 55,
                y: 11.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(4) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[4]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(4) > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 20,
                y: 8.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(5)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[5])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(5)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 82,
                y: 10.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 80,
                y: 33.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[2]/span)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(2) > span'),
            targetPage.locator('::-p-text(판매 대행)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 36,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li[3])'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 32,
                y: 6.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(2) > li:nth-of-type(6)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[2]/li[6])'),
            targetPage.locator(':scope >>> ul:nth-of-type(2) > li:nth-of-type(6)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 49,
                y: 31.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(3) > li'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-categoryId\\"]/div[1]/div[3]/div[1]/ul[3]/li)'),
            targetPage.locator(':scope >>> ul:nth-of-type(3) > li')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 90,
                y: 5.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(· 서비스 내용, 상세 이용 금액 등 상품 설명을 최대한 자세히 적어주세요.· 전화번호, SNS 계정 등 개인정보 입력은 제한될 수 있어요.)'),
            targetPage.locator('textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-description\\"]/div[1]/div[3]/div[1]/div[1]/textarea)'),
            targetPage.locator(':scope >>> textarea')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 388,
                y: 93.09375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(태그를 입력해 주세요 \\(최대 5개\\))'),
            targetPage.locator('div:nth-of-type(8) input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/main/div/div/form/div[1]/div[8]/div[1]/div[3]/div/div[1]/div/div/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(8) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 366,
                y: 10.296875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(가격을 입력해 주세요)'),
            targetPage.locator('div._field_u89em_1 input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-price\\"]/div[1]/div[3]/div[1]/div/div/input)'),
            targetPage.locator(':scope >>> div._field_u89em_1 input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 197,
                y: 3.34375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#scroll-quantity input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"scroll-quantity\\"]/div[1]/div[3]/div/div/div/input)'),
            targetPage.locator(':scope >>> #scroll-quantity input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27,
                y: 19.28125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(등록하기)'),
            targetPage.locator('button.Button_button_variant_primaryRed__gh14qnd'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/main/div/div/form/div[2]/button[2])'),
            targetPage.locator(':scope >>> button.Button_button_variant_primaryRed__gh14qnd'),
            targetPage.locator('::-p-text(등록하기)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 145.5,
                y: 29.53125,
              },
            });
    }
    await lhFlow.endTimespan();
    const lhFlowReport = await lhFlow.generateReport();
    fs.writeFileSync(__dirname + '/flow.report.html', lhFlowReport)

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
