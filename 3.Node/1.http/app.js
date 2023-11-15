const http = require('http');

const server = http.createServer();

server.on('request', function() {
    console.log('요청이 왔습니다.');
})

server.on('connect', function() {
    console.log('연결이 되었습니다.');
})

server.on('close', function() {
    console.log('연결이 끊겼습니다.');
})

console.log('The start');
server.listen(3000);
console.log('The end');
