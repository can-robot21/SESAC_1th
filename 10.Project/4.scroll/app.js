const express = require('express');
const { parse } = require('path');

const app = express();
const PORT = 3000;

// 가상의 데이터
const data = Array.from({ length: 100 }, (_, i) => `Item ${i+1}`);

console.log(data);

app.use(express.static('public'));

function getItems(start, end) {
    return data.slice(start, end);
}

// 데이터 요청하는 EP, /get-items?start=1&end=10
app.get('/get-items', (req, res) => {
    const { start, end } = req.query;

    const items = getItems(parseInt(start), parseInt(end));

    res.json(items);
})

app.listen(PORT, () => {
    console.log('서버 준비');
})