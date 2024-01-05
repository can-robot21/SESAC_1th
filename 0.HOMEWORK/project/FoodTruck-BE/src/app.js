const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const exif = require('exif')

// 라우트 모듈
const mainRoutes = require('./routes/mainRoutes');
const registerRoutes = require('./routes/registerRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const mypageRoutes = require('./routes/mypageRoutes');

// 미들웨어 모듈
const getConnection = require('./middleware/database');

const app = express();

// 정적 파일 폴더 설정
app.use(express.static('public'));

// nunjucks 템플릿 설정
app.set('view engine', 'html');
nunjucks.configure(path.join(__dirname, 'views'), { // __dirname을 사용하여 절대 경로 설정
    express: app,
    autoescape: true,
    watch: true, // 파일 변경 감지
    noCache: true // 캐시 사용하지 않음
});

// 라우트 사용
app.use(mainRoutes);
app.use(registerRoutes);
app.use(purchaseRoutes);
app.use(mypageRoutes);

// 미들웨어 사용
app.use(getConnection);

// express 라우터로 데이타 패치
app.get("/:table", async (req, res) => {
    console.log("DB 데이터 검색");
    const dbTable = req.params.table;

    const query = `SELECT * FROM ${dbTable}`;

    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query(query);
        connection.release();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: "Database error"});
    }
});


// 위도, 경도 입력과 사전 정의된 거리를 기반으로 매장 조회하는 메인 페이지 라우터
app.get("/calculate/:latitude/:longitude/:distance", async (req, res) => {
    const latitude = parseFloat(req.params.latitude);
    const longitude = parseFloat(req.params.longitude);

    const distance = parseFloat(req.params.distance);

    // 위도 경도 차이 계산
    const latDiff = distance / 111.32;
    const longDiff = distance / (111.32 * Math.cos(latitude * (Math.PI / 180)));

    // 위도 경도 범위 계산 (단위: Km)
    const minLat = latitude - latDiff;
    const maxLat = latitude + latDiff;
    const minLong = longitude - longDiff;
    const maxLong = longitude + longDiff;

    // 가로세로폭이 지정된 거리보다 작거나 같은 매장 데이터 조회
    const query = `
        SELECT * 
        FROM store
        WHERE
            latitude BETWEEN ? AND ?
            AND
            longitude BETWEEN ? AND ?
            LIMIT 10
    `;
    try {
        const [rows] = await req.connection.query(query, [minLat, maxLat, minLong, maxLong]);
        req.connection.release();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: "데이타 베이스 에러"});
    }

    // try {
    //     const connection = await pool.getConnection();
    //     const [rows] = await connection.query(query, [minLat, maxLat, minLong, maxLong]);
    //     connection.release();
    //     res.json(rows); // 매장 데이터 json 형태로 출력
    //     console.log(rows);
    // } catch (error) {
    //     res.status(500).json({ error: "Database error"});
    // }
});

module.exports = app ;