const http = require('http');

// 요청을 핫고 싶은 주소 정의
const options = {
    hostname: 'www.example.com',
    port: 80,
    path: '/',
    method: 'GET'
}

const req = http.request(options, (res) => {
    console.log(`상태 코드: ${res.statusCode}`);
    res.on('data', (chunk) => {
        console.log('데이터 수신: $(chunk');
    })
})

req.on('error', (error) => {
    console.error("요청 중 오류 발생: ${error");
})

// const http = require('http');

// 요청을 보내고 싶은 주소 정의
// const options = {
//     hostname: 'www.example.com',
//     port: 80,
//     path: '/',
//     method: 'GET'
// }

// const req = http.request(options, (res) => {
//     console.log(`상태 코드: ${res.statusCode}`);
//     res.on('data', (chunk) => {
//         console.log(`데이터 수신: ${chunk}`);
//     });
// });

// req.on('error', (error) => {
//     console.error(`요청 중 오류 발생: ${error}`);
// });

req.end(); // 요청을 보내는 부분이 빠져 있었으므로 추가했습니다.
