const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/html, charset=utf-8'});
    res.write('<H>Hello Node!</H>');
    res.end('<P>Hello Server</P>');
}). listen(8000, () => { console.log('8000 포트 생성완료'); });

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<P>Hello Node!</H>');
    res.end('<P>Hello Server2</P>');
}) .listen(8001, () => {console.log('8001 포트 생성완료'); });

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<H>Hello Node!</H>');
    res.end('<P>Hello Server3</P>');
}) .listen(8002, () => { console.log('8002 포트 설정완료'); });
