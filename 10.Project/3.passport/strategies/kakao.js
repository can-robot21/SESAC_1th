const passport = require('passport');
const kakaoStrategy = require('passport-kakao').Strategy;
require('dotenv').config();

const users = require('../users')

const kakaoStrategyCallback = (req, accessToken, refreshToken, profile, done)=>{
    const user = 'hello'
    console.log('회원 아이디', profile.id)
    console.log('회원 닉네임', profile.username)
    console.log('엑세스 토큰',accessToken)
    console.log('리프레시 토큰',refreshToken)

    done(null, profile)
}

passport.use(
    new kakaoStrategy({
        passReqToCallback:true,
        clientID: process.env.KAKAO_CLIENT_ID,
        clientSecret: process.env.KAKAO_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/kakao/callback'
    },kakaoStrategyCallback)
)

passport.serializeUser((user,done)=>{
    done(null, user);
});

passport.deserializeUser((user, done)=>{
    console.log('deserializeUser user : ', users)
    done(null,user);
})


module.exports = (app)=>{
    app.get('/auth/kakao', passport.authenticate('kakao'))

    app.get('/auth/kakao/callback',passport.authenticate('kakao',{
        failureRedirect: '/'
    }), (req,res)=>{
        req.flash('success','kakao 로그인에 성공했습니다.')
        res.redirect('/dashboard')
        // res.send('hello')
        // res.json('profile.nickname, profile.profile_images')
    })
}