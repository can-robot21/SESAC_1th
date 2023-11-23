const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());
;
app.get('/', (req, res) => {
    res.cookie('mycookie', 'sesac', { maxAge: 10000 });
    res.send('티켓(쿠키)가 생성되었습니다.');

});

app.get('/readcookie', (req, res) =>{
    const myCookie = req.cookies.mycookie;
    console.log(myCookie);

    res.send(`너의 티켓(쿠키)는 : ${myCookie}`);
});

app.listen(port, () => {
    console.log(`${port}에서 대기중`);
})