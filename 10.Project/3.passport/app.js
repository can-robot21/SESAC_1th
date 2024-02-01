const express = require('express');
const nunjucks = require('nunjucks')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
require('dotenv').config();


const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const LocalStrategy = require('passport-kakao').Strategy;

const users = require('./users')


const app = express();

app.use(express.urlencoded({extended:true}))



app.set('view engine','html');
nunjucks.configure('views',{
    autoescape: true,
    express : app
})

//session 초기화 코드
app.use(session({
    secret: 'my-password-1234',
    resave: true,
    saveUninitialized: true
}))

// flash 미들웨어 추가

app.use(flash())

//passport 초기화

app.use(passport.initialize());
app.use(passport.session());

//각 전략파일을 추가로 더 불러오기

require(path.join(__dirname, 'strategies','local'))(app);
require(path.join(__dirname, 'strategies','kakao'))(app);

//사용자 정보와 세션 연결 (로그인 정보를 세션에 저장)
passport.serializeUser((user,done)=>{
    done(null, user.id)
})

//user-id를 기반으로, 사용자 객체를 다시 가져오기 위한 함수 
passport.deserializeUser((obj, done)=>{
    const user = users.find((u)=> u.id === obj);
    done(null,user);
})


//미들웨어 정적 폴더
app.unsubscribe(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    res.render('index',{messages:req.flash()})
    console.log(req.flash())
})

app.get('/dashboard', (req,res)=>{
    res.render('dashboard',{user:req.user, messages:req.flash()})
})

app.listen(3000, ()=>{
    
    console.log('서버 레디')
})