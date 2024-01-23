// const express = require('express');
// const session = require('express-session');

// const app = express();
// const port = 3000;

// // 세션
// app.use(
//     session({
//         secret: 'my-key',  // 
//         resave: false, // 변경된것 없어도 저장
//         saveUninitialized: true,  // 데이터가 없어도 저장해라
//     })
// )

// app.get('/', (req, res) => {
//     // 1분로 만료
//     req.session('mycookie', 'test', {maxAge: 60000});
//     req.session('username', 'user1', {maxAge: 90000});
//     req.session('cart', ['사과우유', '딸기우유', '바나나우유'],
//     {maxAge: 120000});
//     res.send(`세션ID :${req.sessionID}, 세션 데이타:${JSON.stringify(req.session)}`);
// });

// app.get('/', (req, res) => {
//     res.send(`세션ID: ${req.session}`);
// });


// app.get(port, (req, res) => {
//     console.log("서버 준비");
// })


const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(
    session({
        secret: 'my-key',
        resave: false,
        saveUninitialized: true,
    })
);

app.get('/', (req, res) => {
    req.session.username = 'user1';
    req.session.cart = ['사과우유', '딸기우유', '바나나우유'];
    res.send(`세션ID :${req.sessionID}, 세션 데이터: ${JSON.stringify(req.session)}`);
});

app.get('/user', (req, res) => {
    console.log('session info: ', req.sessionStore.sessions);

    res.send(`세션id: ${req.sessionID}, 세션데이타: ${JSON.stringify(req.sessionStore)}`);
})

app.listen(port, () => { // 서버 시작 방식 수정
    console.log(`Server running on port ${port}`);
});
