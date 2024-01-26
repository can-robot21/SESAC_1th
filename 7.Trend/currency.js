const axios = require('axios');

// 네이버 API 요청하기 (환율정보)
const base_url = 'https://m.search.naver.com/p/csearch/content/qapirender.nhn';

const usd_url1 = base_url + '?key=calculator&pkid=141&q=%ED%99%98%EC%9C%A8&where=m&u1=keb&u6=standardUnit&u7=0&u3=USD&u4=KRW&u8=down&u2=1';
const usd_url2 = base_url + '?key=calculator&pkid=141&q=%ED%99%98%EC%9C%A8&where=m&u1=shb&u6=standardUnit&u7=0&u3=USD&u4=KRW&u8=down&u2=100'

// u1 = 은행(하나은행/신한은행)
// u2 = 입력값(환전전의 금액)
// u3 = TO 환율(USD/JPY/...)
// u4 = FROM 환율 (KRW/..)

axios.get(usd_url1).then(response => {
    console.log(response.data);
    // 환율만 가져오기
    console.log(response.data.country[1].value);
});

axios.get(usd_url2).then(response => {
    console.log(response.data);
    // 환율만 가져오기
    console.log(response.data.country[1].value);
});

