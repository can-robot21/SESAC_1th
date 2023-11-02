const url = require('url');

const myUrl = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%83%88%EC%8B%B9";

//url 파싱
const parseUrl = url.parse(myUrl, true);
console.log('파싱문:',  parseUrl);
console.log('host:', parseUrl.host);
console.log('host:', parseUrl.port);
console.log('host:', parseUrl.query);

const myUrl2 = {
    protocol: 'https',
    hostname: 'www.naver.com',
    pathname: '/seach.naver',
    query: {
        query: '새싹'
    }
}

// url 조립
const assembleUrl = url.format(myUrl2);
console.log('조립된 url:', assembleUrl);