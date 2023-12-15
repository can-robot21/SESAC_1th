const request = require('request');
require('dotenv').config();

const client_id = process.env.NAVER_API_ID;
const client_secret = process.env.NAVER_API_SECRET;

const text = "반갑습니다.";
const encText = encodeURI(text);

const api_url = `https://openapi.naver.com/v1/search/blog.xml?query=${encText}`;
const headers = {
    'X-Naver-Client-Id': client_id,
    'X-Naver-Client-Secret': client_secret,
};

var options = {
    url: api_url,
    headers: headers
};

request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // 여기서 검색 결과를 출력하거나 처리할 수 있습니다.
    } else {
        console.log("검색 요청 중 오류 발생: " + error);
    }
});
