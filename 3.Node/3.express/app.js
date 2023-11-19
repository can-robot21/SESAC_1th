const express = require ('express');

const app = express();

const port = 3000;

function myLogger(req, res, next) {
    const date = new Date(Date.now());
    const formattedTime = date.toLocaleString();
    console.log(`${formattedTime}: LOG MESSAGE`);
    next();
}

// function requsetTime(req, res, next) {
//     req.requestedTime()
}

// 2. 미들웨어
app.use(myLogger);
// app.use(requsetTime);

// 1. 라우팅
app.get('/', (req, res) =>{
    console.log(req.requestedTime);
    res.send('hello, World');
});

app.listen(port, () => {
    console.log(`서버가 ${port}에서 실행 중.`);
});
