const express = require('express');
const nunjucks = require('nunjucks');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const port = 3000;

// nunjucks 초기화
nunjucks.configure('views', { express: app });
app.set('view engine', 'html');

// 라우터
app.get('/', (req, res) => {
    res.redirect('/index');
})

// nunjuck 

let userFile = './views/user.csv';

function readCsv(fileName) {
    const results = [];
    try {
        // const data = fs.readFileSync(fileName, 'utf8');
        // const parseData = csv.parse(data, {columns: true});
        // console.log(parseData);
        // return parseData;
        fs.createReadStream(fileName)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                console.log(results);
                const users = results;
                // 렌더 페이지 호출
                renderPage(results);
                // [
                //   { NAME: 'Daffy Duck', AGE: '24' },
                //   { NAME: 'Bugs Bunny', AGE: '22' }
                // ]
            });
    } catch (err) {
        console.log('파일 읽기 중 에러 발생');
        throw err;
    }
}

// 렌더페이지 
function renderPage(users) {
    const data = {
        title:  "사용자 데이타",
        users: users,
    };
    app.get('/index', (req, res) => {
        res.render('index', data);
    });
}

const users = readCsv(userFile);
console.log(userFile, users);

// 서버
app.listen(port, () => {
    console.log(`${port}에서 서버 시작`);
});