// 숙제1. 이미지 반환 숙제2. 모든 static반환 
// 숙제3. 생성완료	
// 숙제3. 버튼추가완료	
// 숙제3. 삭제완료	
// 숙제3. 수정완료	
// 숙제3.리펙토링

const http = require('http');
const path = require('path');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log('서버 8000 포트 오픈');
    res.end();
}).listen(8000);