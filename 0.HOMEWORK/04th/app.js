// "숙제1. 어떤 이미지를 요청하던지, 그 파일을 내 디렉토리에서 찾아서 반환하도록 구현한다.
// /image/*.jpg 를 처리하기"
// if (req.method === 'GET' && req.url.startsWith('/images/')) {
//     // url 파싱해서 파일 불러와서, 반환한다. (3줄정도의 코드)
// }
// 2. "숙제2. css/js/image
// 요청한 내용에(요청한 확장자에) 따라서...
// /static/css
// /static/js
// /static/image

// Content-Type: ???  <-- 이걸 찾아내기
const http = require('http');
const fs = require('fs').promises;
const NOT_FOUND = 404;
const SUCCESS = 200;
const SERVER_ERROR = 500;

const server = http.createServer(async (req, res) => {
    console.log(req.method, res.url);

    // try {
    //     if (err) {

    //     }
    //     }
    // } catch {
        
    // }
})
    .listen(8000, () => {
        console.log('8000포트가 열렸습니다.');
    }) 
