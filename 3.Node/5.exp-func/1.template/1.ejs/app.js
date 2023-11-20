const express = require('express');
const app = express();
const port = 3000;

// 화면 엔진은 ejs로 설정한다.
app.set("view engine", "ejs");

// 라우트 추가 실행
app.get("/", (req, res) => {
    res.render("index", { title: 'Express앱', massage: 'EJS를 처음 사용해 보는 중'});

    // res.json('결과값');
    // res.send('콘텐츠');
    // res.sendFile('파일 처리');
})

app.get('/greeting', (req, res) => {
    const username = '박수형';
    res.render('greeting', { username: username });
});

app.get('/welcome', (req, res) =>{
    const isAdmin = true;
    res.render('welcome', { isAdmin: isAdmin });
})

app.get('/fruits', (req, res) => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];
    res.render('fruits', { fruits: fruits });
})

app.get('/page', (req, res) => {
    const data = {
        title: '마이 페이지',
        content: '여기에 본문에 들어갈 내용 작성',
    }
    res.render('main', { data: data });
})

app.listen(port, () => {
    console.log(`서버가 ${port}에서 실행중`);
})