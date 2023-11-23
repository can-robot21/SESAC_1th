const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 세션 미들웨어 설정
app.use(
    session({
        secret: 'this-is-my-important-secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000, // 1분
        }
    })
);

// const router = express.Router();
// 퍼블릭 폴더를 정적 파일 폴더로 설정
// app.use('/', router);
// app.use(express.static('public'));
app.use('/static', express.static('public'));
// app.use('/image', express.static('public'));

// 배열 (1차원배열=1-D Array), 두개의 객체(Object)를 담고 있음 
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
    { id: 3, username: 'user3', password: 'password3' },
    { id: 4, username: 'user4', password: 'password4' },
]

app.post('/login', (req, res) => {
    // const { id, pw } = req.query;
    const { username, password } = req.body;

    console.log(username, password);

    // 검색기능...
    const user = users.find((u) => u.username === username &&
        u.password === password);
    if (user) {
        console.log('로그인 성공');
        // res.redirect('/login.html');
        req.session.user = user;
        // res.sendFile(path.join(__dirname, 'public', 'login.html'));
        res.json({ message: '로그인 성공!' });

    } else {
        console.log('로그인 실패');
        res.status(401).json({ message: '로그인 실패' });
    }
})

app.get('/profile', (req, res) => {
    const user = req.session.user;

    if (user) {
        res.json({ username: user.username, message: '프로필 정보' });
    } else {
        res.status(401).json({ message: '로그인이 필요합니다.' });
    }
});

app.get('/', (req, res) => {
    console.log('진짜 루트임');
    res.sendFile(path.join(__dirname, 'public', 'index3.html'));
});

// app.get('/login', (req, res) => {
//     res.send('로그인');
// });

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('세션 삭제 오류??', err);
            res.status(500).json({ message: '로그아웃 실패' });
        } else {
            res.json({ message: '로그아웃 성공!' });
        }
    });
})

app.get('/check-login', (req, res) => {
    const user = req.session.user;
    if (user) {
        res.json({ username: user.username });
    } else {
        res.status(401).json({ message: '인증되지 않은 사용자' })
    }
})

// 루트 엔드포인트로 접근 시 login3.html을 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index3.html'));
})

// 서버 시작 
app.listen(port, () => {
    console.log(`서버가 ${port}에서 대기중...`);
})