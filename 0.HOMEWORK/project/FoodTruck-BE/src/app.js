const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const getConnection = require('./middleware/database');
const cors = require('cors');

const app = express();

// 라우트 모듈 임포트
const mainRoutes = require('./routes/mainRoutes');
const registerRoutes = require('./routes/registerRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const mypageRoutes = require('./routes/mypageRoutes');
const memberRoutes = require('./routes/memberRoutes');
const memberApiRoutes = require('./routes/memberApiRoutes'); // 맴버의 like, report(신고), review, rate, favorite 리스트
const calculateRoutes = require('./routes/calculateRoutes'); // 위도+경도+거리 로 매장리스트+거리 제공 api

app.use(express.static('public'));
app.use(cors({
    origin: ['localhost:3000', 'localhost:5000', 'http://aws.amazon.com'],
    credentials: true // 서버로 쿠키나 인증정보 요청시 필요한 설정
}))

app.set('view engine', 'html');
nunjucks.configure(path.join(__dirname, 'views'), {
    express: app,
    autoescape: true,
    watch: true,
    noCache: true
});

app.use(getConnection);

app.use(mainRoutes);
app.use(registerRoutes);
app.use(purchaseRoutes);
app.use(mypageRoutes);
app.use(memberRoutes);
app.use(memberApiRoutes);
app.use('/calculate', calculateRoutes); // 매장 조회 라우트 모듈 사용

module.exports = app;