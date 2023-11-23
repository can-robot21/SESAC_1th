const express = require('express');
const session = require('express-session');

const app = express()
const port = 3000;

//세션 설정
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true,
}));

// 미들웨어
app.use((req, res, next) => {
    // 초기화
    req.session.visitCount = req.session.visitCount || 0;

    //횟수 증가
    req.session.visitCount ++;
    console.log('SessionID', req.sessionID);
    console.log('SessionInfo:', req.session.visitCount);
    next();
})

// 퍼블릭 폴더를 정적 파일 폴더로
app.use('/public', (req, res) => {
    
})

// 작성
// app.get('/login', (req, res) => {
//     let name = '사용자';
//     let userPassword = '4321dcba';

//     req.session.user = {
//         username: name,
//         password: userPassword
//     };
//     res.send('로그인 성공');
//     console.log('유저는:', user);
// })

app.get('/', (req, res) => {
    console.log(req.session);
    res.send(`당신의 방문횟수는 ${req.session.visitCount} 입니다.`);
})

app.listen(port, (req, res) => {
    console.log('서버 시작');
})