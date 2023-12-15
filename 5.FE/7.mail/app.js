const nodemailer = require('nodemailer');
const express = require('express');
const session = require('express-session');
const nunjucks = require('nunjucks');

require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'mantong.net',
    resave: false,
    saveUninitialized: true
}))

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});

app.set('view engine', 'html'); 

app.get('/login', (req, res) => {
    res.render('login'); 
});

app.post('/login', (req, res) => {
    const randomCode = generateRandomCode(12);
    req.session.randomCode = randomCode;
    console.log('랜덤문자:', randomCode);
    
    // 이메일(입력받은 이메일로 랜덤문자 보내기)
    const mailOptions = {
        from: process.env.NAVER_ID,
        to: req.body.email,
        subject: '회원가입 인증용 랜덤문자',
        text: randomCode
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('인증용 랜덤문자 발송 실패', error);
        } else {
            console.log('인증용 랜덤문자 발송:', info.response);
        }
    });

    res.render('loginText');
});

app.post('/loginText', (req, res) => {
    const enteredCode = req.body.enteredCode;
    const storedCode = req.session.randomCode;
    
    if (enteredCode === storedCode) {
        res.json({ welcome: true }); 
    } else {
        res.json({ welcome: false }); 
    }
});

// naver 메일설정
const transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.NAVER_ID,
        pass: process.env.NAVER_PASS
    }
});

// 랜덤문자 만들기
function generateRandomCode(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomCode = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomCode += charset.charAt(randomIndex);
    }
    return randomCode;
}

app.listen(port, () => {
    console.log("서버 레디");
})