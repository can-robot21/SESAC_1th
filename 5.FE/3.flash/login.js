const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;

// 세션 설정
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true
}))

// nunjucks 설정
nunjucks.configure('views', {
    express: app,
    watch: true
})

app.set("view engine", "html");

// 미들웨어
app.use(flash());

app.use(express.urlencoded({extended: true}));




app.get('/', (req, res) => {
    const successMessage = req.flash('success');
    const errorMessage = req.flash('error');
    
    res.render('login');
})

app.get('/login', (req, res) => {
    const successMessage = req.flash('success');
    const errorMessage = req.flash('error');

    res.render('login', { successMessage, errorMessage }); // 메시지 가져오기
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === "user" && password == "pass") {
        req.flash('message', [
            { type: 'success', text: '로그인에 성공했습니다.'},
            { type: 'info', text: '최근 버전으로 업데이트 되었습니다.'},
            { type: 'warning', text: '구버전 지원이 중단됩니다.'} 
        ]);
        res.redirect('/');
    } else {
        req.flash('error', '로그인 실패');
        res.redirect('/login');        
    }
});

app.listen(port, () => {
    console.log('서버 레디');
})