const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path')

const app = express()
const port = 3000;

//세션 설정
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
    secret: 'this-is-my-important-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000, //1분
    }
}));

// 퍼블릭 폴더를 정적 파일 폴더로 설정
app.use('/static', express.static('public'));

const users = [
    { id: 1, username: 'user1', password: 'password1'},
    { id: 2, username: 'user2', password: 'password2'},
    { id: 1, username: 'user3', password: 'password3'},
    { id: 2, username: 'user4', password: 'password4'},
]



app.post('/login', (req, res) => {
    
    const { username, password } = req.body;
    
    console.log(username, password);
    
    // 검색기능
    const user = users.find((u) => u.username === username &&
    u.password === password);
    
    if (user) {
        console.log("로그인 성공");
        req.session.user = user;
        res.json({ message: "로그인 성공" });
        
    }else {
        console.log('로그인 실패');
        res.status(401).json({ message: "로그인 실패" });
    }
});

app.get('/profile', (req, res) => {
    const user = req.session.user;
    
    if (user) {
        res.json({usernam: user.username, message: '프로필 정보'});
        
    } else {
        res.status(401).json({message: '로그인이 필요합니다.'});
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('세션 삭제 오류??', err);
            res.status(500).json({ message: '로그아웃 실패'});
        } else {
            res.json({ message: '로그아웃 성공'});
        }
    });
});

// check-login 엔드포인트 추가
app.get('/check-login', (req, res) => {
    const user = req.session.user;

    if (user) {
        res.json({ username: user.username });
    } else {
        res.json({ username: null });
    }
});

// 루트 포인트 접근시 index.html
app.get('/', (req, res) => {
    console.log('index페이지');
    res.sendFile(path.join(__dirname, 'public', '/index3.html'));
});

app.listen(port, (req, res) =>{
    console.log(`${port}에서 실행 중`);
})