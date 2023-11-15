const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./server.html');
        res.wHead(200, {'Content-Type': 'text/html; charset=uft-8'});
        res.end(data);
        
    } catch (err) {
        console.error(err);
        res.writeHead(500, {'centent-Type': 'text/html; charset=utf-8'});
        res.end(err.maessage);
    }
})
    .listen(8000, () => {
        console.log('8000포트가 열렸습니다.');
    })