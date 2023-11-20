const express = require('express');
const app = express();
const port = 3000;

const nunjucks = require('nunjucks');

nunjucks.configure('views',  {
    autoescape: true,
    express: app
})

app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('index', {title: 'nunjuck앱', massage: '헤딩1 본문'});
})

app.listen(port, (req, res) => {
    console.log(`서버가 ${port}에서 실행 중`);
})