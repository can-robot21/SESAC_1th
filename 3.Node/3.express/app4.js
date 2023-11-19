const express = require('express');
const app =express();
const port = 3000;

// 미들웨어를 통한 body 데이터 처리
// 원래는 body-parser 
// 지금은 express 빌트인 사용

app.use(express.json());

app.post('/submit2', (req, res) => {
    const jsonData = req.body;
    console.log(req.body);
    res.json({receivedData: jsonData});
})

app.post('/submit', (req, res) => {
    let data = '';

    req.on('data', (body) =>{
        data += body;
    });

    req.on('end', () => {
        try { 
            console.log(data);
            const jsonData = JSON.parse(data);
            res.json({ receiveDATA: jsonData });
        } catch(error) {
            res.status(400).json({error: "잘못된 입력값..."});
        }
    });

    // res.status(201);
})

app.listen(port, () => {
    console.log(`서버가 ${port}에서 실행중`);
});