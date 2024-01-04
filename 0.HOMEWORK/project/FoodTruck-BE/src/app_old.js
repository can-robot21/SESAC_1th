const express = require("express");
const executeSQLScript = require('./scripts/executeSQLScript');
const mysql2 = require("mysql2/promise");
const dbConfig = require("./config/dbConfig");
const path = require('path');
const nunjucks = require('nunjucks');

// DB 커넥션 풀생성
const app = express();
const pool = mysql2.createPool(dbConfig);
console.log("풀생성")


// 정적 파일 폴더 설정
app.use(express.static('public'));

// nunjucks 템플릿 설정
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    autoescape: true,
    watch: true, // 파일 변경 감지
    noCache: true // 캐시 사용하지 않음
})

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

app.get("/", (req, res) => {
    res.render('index.html', { title: "첫 페이지", content: "1.지도 + 2.신규등록 3.nav"});
});

app.get("/main", (req, res) => {
    res.render('main.html', { title: "첫 페이지", content: "1.지도 + 2.신규등록 3.nav"});
});

app.get("/register", (req, res) => {
    res.render('register.html', { title: "매장등록", content: "매장등록 페이지 내용"});
});

app.get("/mypage", (req, res) => {
    res.render('mypage.html', { title: "첫 페이지", content: "쇼셜게정 + 입력된 모든 데이타"});
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
        const connection = await pool.getConnection();
        const [rows] = await connection.query(query, [minLat, maxLat, minLong, maxLong]);
        connection.release();
        res.json(rows); // 매장 데이터 json 형태로 출력
        console.log(rows);
    } catch (error) {
        res.status(500).json({ error: "Database error"});
    }
})

module.exports = app ;