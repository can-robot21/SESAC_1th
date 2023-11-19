const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
    <title> 이미지 로딩 </title>
    </head>
    <body>
    <h1>이미지</h1>
    <img src = "/images/top.jpg">
    </body>
    </html>
    `);
});

// require('fs')
app.get('/about1', (req, res) => {
    
    const htmlFilePath = path.join(__dirname,'public', 'index.html' );
    
    fs.readFile(htmlFilePath, 'utf8', (err, data) =>{
        if (err) {
            console.error('파일 읽기 실패', err);
            res.status(400).send(' 서버 오류 ');
            return;            
        }        
        res.send(data);
    });
});

// require('fs') 제외
app.get('/about2', (req, res) => {
    
    const htmlFilePath = path.join(__dirname,'public', 'index.html' );
    res.sendFile(htmlFilePath, (err) => {
        if(err) {
            console.log('파일전송 오류:', err);
            res.status(500).send('서버 오류');
        }
        res.send(data);
    })
});

app.listen(port, (req, res) => {
    console.log(`${port} 실행중`)
})