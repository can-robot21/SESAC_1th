const express = require('express');
// const path = require('path');

const app = express();
const port = 3000;

// // 정적 파일 제공 디렉토리
// app.use('/public', express.static(path.join(__dirname, 'public')));

// 라우터

app.get('/', (req, res) => {
    res.send('Hello, get4');
});

app.get('/about', (req, res) => { 
    res.send('Hello, about');
});

app.get('/user', (req, res) => { 
    res.send('Hello, user');
});

// 라우트 파라미터
app.get('/user/:id', (req, res) => { 
    const uid = req.params.id; // 라우트 파라미터
    res.send(`Hello, user ${uid}님`);
});

app.get('/user/:id/profile', (req, res) => { 
    const uid = req.params.id; // 라우트 파라미터
    res.send(`
    <HTML>
    <BODY>
    <H1> ${uid} 님의 프로파일 </H1>
    <p> 내 프로필 ... </p>
    <img src = "images/top.jpg">
    </BODY>
    </HTML>
    `);
});

// 미들웨어를 통한 페이지 정의
app.use((req, res) => {
    res.status(404).send('<H1> 페이지를 찾을 수 없습니다. </H1>')
});

// GET 파라미터
app.get('/search', (req, res) => {
    const keyword = req.query.category; // GET 파라미터
    res.send(` 입력한 키워드는 : ${keyword}`);
})

app.get('/shopping', (req, res) => {
    const category = req.query.category; // GET 파라미터
    const item = req.query.item;
    
    const responseData = {
        category: category,
        item: item
    };

    console.log(responseData);
    
    res.send(`입력한 키워드는: ${category}에 ${item}입니다.`);
});

// POST 파라미터 xxx ===> BODY 파싱


// 서버 생성
app.listen(port, () =>{
    console.log(` 서버가 ${port}에서 실행 중`);
});
