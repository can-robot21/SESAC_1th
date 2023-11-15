const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const { parse } = require('querystring');

const NOT_FOUND = 404;
const SUCCESS = 200;
const SERVER_ERROR = 500;

let users = {};

// 서버 객체 생성
const server = http.createServer(async (req, res) => {
    console.log(req.method, req.url);

    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                const data = await fs.readFile('index.html');
                res.writeHead(SUCCESS, {'Content-Type': 'text/html; charset=utf-8'});
                res.end(data);
            } else if (req.url === '/about') {
                const data = await fs.readFile('about.html');
                res.writeHead(SUCCESS, {'Content-Type': 'text/html; charset=utf-8'});
                res.end(data);
            } else if (req.url === '/user') {
                console.log('유저');
                res.writeHead(SUCCESS, {'Content-Type': 'text/plain; charset=utf-8'});
                console.log(JSON.stringify(users));
                res.end(JSON.stringify(users));
            } else if (req.url === '/images/cats.jpg') {
                const data = await fs.readFile('./images/cats.jpg');
                res.writeHead(SUCCESS, {'Content-Type': 'image/jpg'});
                res.end(data);
            } else {
                const imageMatch = req.url.match(/^\/image\/(.+)$/);
                if (imageMatch) {
                    try {
                        const filePath = req.url;
                        const contentType = getContentType(filePath);
                        const data = await fs.readFile('./static' + filePath);
                        res.writeHead(SUCCESS, {'Content-Type': contentType});
                        res.end(data);
                    } catch {
                        res.writeHead(NOT_FOUND, {'Content-Type': 'text/html; charset=utf-8'});
                        res.end('Not found. 없음');
                    }
                } else {
                    res.writeHead(NOT_FOUND, {'Content-Type': 'text/plain; charset=utf-8'});
                    res.end('Not Found. 없어~~!!');
                }
            }
        } else if (req.method === 'POST') {
            let body = '';

            req.on('data', (data) => {
                body += data;
            });

            req.on('end', () => {
                const formData = parse(body);
                const username = formData.name;
                users[username] = username;

                console.log('요청내용?', body);
                console.log("파싱 후?", formData);  
                console.log("사용자이름?", username);
                console.log(users);

                res.writeHead(201, {'Content-Type': 'text/plain; charset=utf-8'});
                res.end('등록 성공');
            });
        } else if (req.method === 'PUT') {
            // 요청을 받아 변경
            // 수정 명령어 : curl -X PUT 127.0.0.1:3000/user/aaaa -d "name=aaaa"
            if (req.url.startsWith('/user/')) {
                const key = req.url.splite('/')[2];
                let body = '';
                req.on('data', (data) => {
                    body += data;
                });
                req.on('end', (data) => {
                    // 받은 데이터를 기반으로 프로세싱
                    console.log('PUT Body:', body);
                    // 수정 코드
                    const formData = parse(body);
                    user[key] = formData.name;
                })
            }
            res.writeHead(200);
            res.end();
        } else if (req.method === 'DELETE') {
            // 요청을 삭제할때
            // 요청에 대한 파싱
            // 삭제 명령어 : curl -x DELETED 127.0.0.0:/user/aaa
            // 1. 
            try {
                const key = req.url.split('/')[2];
                delete users[key];
                console.log(key);
    
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                res.end("삭제 성공")

            } catch {
                console.log('삭제 중 오류 발생', error);
                res.writeHead(500, {'content-Type': 'text/plain; charset=utf-8'});
                res.end('서버에서 알수 없는 에러');
            }
        } else {
            res.writeHead(NOT_FOUND);
            res.end('NOT_FOUND');
        }
    } catch (err) {
        console.error('오류발생:', err);
        res.writeHead(SERVER_ERROR, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(err.message);
    }
});

server.listen(3000, () => {
    console.log('3000포트가 열렸습니다.');
});
