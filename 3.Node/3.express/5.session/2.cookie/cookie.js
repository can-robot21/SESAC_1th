const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'set-cooke': 'mycookie=test'});
    res.end("DONE");

});

server.listen(3000, () => {
    console.log('서버가 대기중');
})