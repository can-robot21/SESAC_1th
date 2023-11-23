const express = require('express');
const nunjucks = require('nunjucks');
const fs = require('fs');
// const csv = require('csv-parser');
const csv = require('fast-csv');

const app = express();
const port = 3000;

// nunjucks 초기화
nunjucks.configure('views', { express: app });
app.set('view engine', 'html');

// 퍼포먼트 성능 테스트
app.use((req, res, next) =>{
    const  start = Date.now();
    res.on('finish', () => {
        const end = Date.now();
        const duration = end - start;

        console.log(' 경과 시간 :', duration);
    })
    console.log('미들웨어');
    next();
})

// 정적파일 사용 폴더 설정
app.use(express.static('public'));

//
const data = [];
const filenames = [];

async function loadDataIntoMemory() {
    return new Promise((resolve, reject) => {
        fs.createReadStream('./user.csv', {encoding: 'utf8'})
            .pipe(csv.parse( {headers: true, trim: true})) // 미션2. 공백 처리 옵션 활용
            .on('headers', (headers) => {
                filenames.push(...headers);
                console.log(filenames);
            })
            .on('data', (row) => {
                data.push(row);
                // 미션1. 공백이 들어간 데이타 저장.
                // console.log(row);
            })
            .on('end', () => {
                console.log('파일 읽기 완료');
                resolve();
            })
            .on('error', (error) => {
                console.log('오류', error);
                reject(error);
            })
    })

    
}

// 서버시작

async function startServer() {
    await loadDataIntoMemory();
    
    app.get('/', (req, res) => {
        // 데이터 저장
        // 페이지
        const itemsPerPage = 10;
        let startIndex;
        let endIndex;

        console.log('요청:', req.query.page);

        // 미션3. a테그
        const page = req.query.page || 1;
        startIndex = (page - 1) * itemsPerPage;
        endIndex = startIndex + itemsPerPage;

        //미션2. 전체 페이지수 계산

        const totalPages = Math.ceil(data.length / itemsPerPage);
        console.log(` 전체 ${data.length}, 페이지당 ${itemsPerPage}, 전체페이지 ${totalPages}`);

        // 미션1. 페이지당 데이타
    
        const currPageRows = data.slice(startIndex, endIndex);

        res.render('index', { 
            title: "사용자 테이블",
            data: currPageRows ,
            total_Page: totalPages,
            page: parseInt(page),
            filenames: filenames
        });
    })
    
    // 서버
    app.listen(port, () => {
        console.log(`${port}에서 서버 시작`);
    });
}

startServer();