const https = require('https');

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

const fetchUrl = (url) => {
    return new Promise((resolve) => {
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', () => resolve(''));
    });
};

(async () => {
    for (let url of urls) {
        const html = await fetchUrl(url);
        const match = html.match(/<meta property="og:image" content="([^"]+)">/);
        if (match) {
            console.log("'" + match[1].replace("&amp;", "&") + "',");
        } else {
            console.log("'FAILED_FOR_" + url + "',");
        }
    }
})();
