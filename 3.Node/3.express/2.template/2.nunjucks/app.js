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
    res.render('index', {title: 'nunjuck앱', message: '헤딩1 본문'});
})

app.get('/greeting', (req, res) => {
    const username = '박수형';
    res.render('greeting', { username: username });
});

app.get('/welcome', (req, res) => {
    const isAdmin = true;
    res.render('welcome', { isAdmin: isAdmin });
});

app.get('/fuits', (req, res) => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];
    res.render('fruits', { fruits: fruits });
});

app.listen(port, (req, res) => {
    console.log(`서버가 ${port}에서 실행 중`);
})