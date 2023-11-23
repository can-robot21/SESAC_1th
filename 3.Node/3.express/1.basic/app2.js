const express = require('express');

const app = express();
const port = 3000;

// 라우팅 추가
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    res.send('Hello world\nPOST received');
});

app.put('/', (req, res) => {
    res.send('PUT received');
});

app.delete('/', (req, res) => {
    res.send('DELETE received');
});

//서버
app.listen(port, () => {
    console.log(`서버가 ${port}에서 실행중`);
});