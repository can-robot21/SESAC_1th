const express = require('express');
const { debugR, debugU, debugA, debugS } = require('./mydebug'); // debugS 추가

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('root');
    debugR('root 에 요청'); // debugeR -> debugR
    console.log('root');
});

app.get('/user', (req, res) => {
    res.send('user');
    debugU('user 에 요청'); // debugeU -> debugU
    console.log('user');
});

app.get('/admin', (req, res) => {
    res.send('admin');
    debugA('admin 에 요청'); // debugeA -> debugA
    console.log('admin');
});

// /debug 라우트 로직 수정
app.get('/debug', (req, res) => {
    const { server, root, user, admin } = req.query;

    // 각 변수에 대해 불리언 값을 설정
    debugS.enabled = server === '1';
    debugR.enabled = root === '1';
    debugU.enabled = user === '1';
    debugA.enabled = admin === '1';

    // 상태 응답
    res.json({
        server: debugS.enabled ? 1 : 0,
        root: debugR.enabled ? 1 : 0,
        user: debugU.enabled ? 1 : 0,
        admin: debugA.enabled ? 1 : 0,
    });
});

app.listen(port, () => {
    console.log('server ready');
});
