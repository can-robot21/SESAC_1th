// const express = require('express');
// const cookieParser =require('cookie-parser');
// const { maxHeaderSize } = require('http');

// const app = express();
// const port = 3000;

// app.use(cookieParser);

// app.get('/', (req, res) => {
//     // 1분로 만료
//     res.cookie('mycookie', 'test', {maxAge: 60000});
//     res.cookie('username', 'user1', {maxAge: 90000});
//     res.cookie('cart', ['사과우유', '딸기우유', '바나나우유'],
//     {maxAge: 120000});
//     res.send(`쿠키를 전달하였습니다. 쿠키는 : ${myCookie}`);
// });

// app.get('/user', (req, res) => {
//     const {myCookie, usernaem, cart} = req.cookies;
//     console.log(`쿠키는 ${mycookie}`);
    
//     res.send(`당신의 ${username}이 가져온 쿠키는 이것입니다. ${cart}`);
// });

// app.listen(port, (req, res) => {
//     console.log(`서버는 ${port}`);
// });

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser()); // 수정된 부분

app.get('/', (req, res) => {
    // 쿠키 설정
    res.cookie('mycookie', 'test', {maxAge: 60000});
    res.cookie('username', 'user1', {maxAge: 90000});
    res.cookie('cart', ['사과우유', '딸기우유', '바나나우유'], {maxAge: 120000});
    res.send('쿠키를 전달하였습니다.'); // 수정된 부분
});

app.get('/user', (req, res) => {
    console.log(req.session);
    const { mycookie, username, cart } = req.cookies; // 수정된 부분
    res.send(`당신의 ${username}이 가져온 쿠키는 이것 ${mycookie} 입니다. 저장된 데이타는 ${cart}`);
});

app.listen(port, () => { // 수정된 부분
    console.log(`서버가 ${port}번 포트에서 실행중입니다.`);
});
