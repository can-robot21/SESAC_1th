const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// 미들웨어
app.use((req, res) => {
    res.status(404).send('<h>페이지를 찾을 수 없습니다.</h1>');
});

// GET 파라미터
app.get('/', (req, res) => {

    const htmlFilePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(htmlFilePath, (err) => {
        if(err) {
            console.log('파일 전송 에러:', err);
            res.status(400).send('서버 오류');
            return;
        }
        res.send(data);
    });
});

app.get('/about', (req, res) =>{
    const htmlFilePath = path.join(__dirname, 'public', 'about.html');
    res.sendFile(htmlFilePath, (err) =>{
        if (err) {
            console.log('about.html 파일을 찾을 수 없습니다.');
            res.status(400).send('서버 오류');
            return;
        }
        res.send(data);
    });
});

app.listen(port, (req, res) => {
    console.log(`서버가 ${port}에서 실행 중입니다.`);
})