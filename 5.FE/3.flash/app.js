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

app.get('/', (req, res) => {
    req.flash('info', 'Welcome to my homepage');
    res.redirect('/message');
})

app.get('/message', (req, res) => {
    res.send(req.flash('info')); // 메시지 가져오기
})

app.listen(port, () => {
    console.log('서버 레디');
})