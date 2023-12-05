const express = require('express');
const nunjucks = require('nunjucks');
const sqlite3 = require('sqlite3');
const ps = require('ps');
const path = require('path');

const app = express();
const port = 3000;
const dbFile = "mydb.db";

const db = new sqlite3.Database(dbFile);

// nunjucks 설정
const viewDir = path.join(__dirname, "views");
const publicDir = path.join(__dirname, "public");

nunjucks.configure(viewDir, {
    express: app,
    watch: true
})
app.set("view engine", "html");

// // express.js 정적 파일 제공 설정
// app.use(express.static("public"));
// express.js 정적 파일 제공 설정
app.use(express.Router(publicDir));

// 라우터
app.get('/', (req, res) => {
    res.render('index', { title: "미니샵 관리화면", message: " 관리자 화면 " });
})

app.get('/user', (req, res) => {
    const data = {
        title: "사용자",
        content: "사용자 리스트 + 검색"
    }
    res.render('user', data);
})

app.get('/store', (req, res) => {
    const data = {
        title: "매장",
        content: "매장 리스트 + 검색"
    }
    res.render('store', data);
})

app.get('/item', (req, res) => {
    const data = {
        title: "상품",
        content: "상품 리스트"
    }
    res.render('item', data);
})

app.get('/order', (req, res) => {
    const data = {
        title: "주문 리스트",
        content: "주문 리스트 + 검색"
    }
    res.render('order', data);
})

app.get('/orderItem', (req, res) => {
    const data = {
        title: "주문상품 리스트",
        content: "주문상품 리스트 + 검색"
    }
    res.render('orderItem', data);
})
// DB 초기화

// DB 페이지 출력


// 서버실행
app.listen(port, () => {
    console.log(`포트 ${port}이 실행 중`);
});