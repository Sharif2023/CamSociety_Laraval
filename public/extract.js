const puppeteer = require('puppeteer');

const urls = [
    'https://unsplash.com/photos/a-vertical-aerial-view-of-a-person-climbing-up-the-tegallalang-rice-terrace-in-bali-indonesia-_UPXYs5HUx4',
    'https://unsplash.com/photos/a-number-of-small-boats-in-a-body-of-water-sk8LPCMvw_A',
    'https://unsplash.com/photos/people-walking-on-street-during-daytime-qIUb3VNmxjI',
    'https://unsplash.com/photos/lake-surrounded-with-tall-green-trees-qay3lNDSHzc',
    'https://unsplash.com/photos/white-and-brown-boat-on-sea-under-blue-sky-during-daytime-oRsxtzxVmsY',
    'https://unsplash.com/photos/an-aerial-view-of-a-road-winding-through-a-tea-estate-gv_R_oDbeaM',
    'https://unsplash.com/photos/the-sun-is-setting-over-a-rice-field-aca64kSojkE',
    'https://unsplash.com/photos/a-couple-of-people-on-a-boat-in-the-water-4mF807hpgIc',
    'https://unsplash.com/photos/man-in-blue-shirt-standing-on-green-grass-field-during-daytime-CHWePkcDEPo',
    'https://unsplash.com/photos/a-river-filled-with-lots-of-boats-filled-with-people-8bffiHxMp4U',
    'https://unsplash.com/photos/people-standing-on-sea-shore-during-daytime-jQetJK7FiHI',
    'https://unsplash.com/photos/a-scenic-of-an-urban-park-8fcczOBgvpI'
];

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    for (let u of urls) {
        try {
            await page.goto(u, { waitUntil: 'domcontentloaded', timeout: 15000 });
            const ogImage = await page.$eval('meta[property="og:image"]', el => el.content);
            console.log(ogImage);
        } catch (e) {
            console.log(u + "#error");
        }
    }
    
    await browser.close();
})();
