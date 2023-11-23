const express = require('express');
const path = require('path');
const bodyPaser = require('body-parser');

const app = express();
const PORT = 3000;

// 사용자 데이터를 저장할 객체 초기화
let users = {};


// 정적 파일 요청시 제공할 폴더
app.use('/static', express.static('public/static'));
app.use('/images', express.static('public/static'));

// app.use(bodyParser.json());
app.use(express.json());

// 각종 라우트
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'about.html'));
});

// app.get('/user', (req, res) => {
//     res.json(users);

// });
app.get('/user', (req, res) => {
    try {
        if (!users || Object.keys(users).length === 0) {
            // 사용자 데이터가 없는 경우
            res.status(404).json({ message: "No users found" });
        } else {
            // 사용자 데이터 반환
            res.json(users);
        }
    } catch (error) {
        // 서버 내부 오류 처리
        console.error("Server error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// POST
app.post('/user', (req, res) => {
    const id = Date.now();
    const { name } =req.body;
    // const name = req.body.name;

    users[id] = name;
    res.status(201).send('등록성공');
})

// PUT
app.put('/user/:id', (req, res) => {
    const id = req.params.id;
    users[id] = req.body.name;
    res.status(200).send('수정 성공');
})

// DELETE
app.delete('/user/:id', (req, res) => {
    //id  접근 방법??
    const id = req.params.ID;
    // 로직처리
    delete users[id];
    // 응답 보내기
    res.status(204).send();
    // res.status(200).send('삭제완료');
})


app.listen(PORT, () => {
    console.log(`${PORT}가 열려있습니다.`);
})