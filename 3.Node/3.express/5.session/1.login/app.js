const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json);

const users = [
    { id: 1, username: 'user1', password: 'password1'},
    { id: 2, username: 'user2', password: 'password2'},
]

app.post('/login', (req, res) => {
    
    const { username, password } = req.body;
    console.log(user, password);

    // 검색기능
    const user = users.find((u) => u.username === username &&
    u.password === password);
    if (user) {
        console.log('로그인 성공');
        res.json({ message: "로그인 성공" });

    }else {
        console.log('로그인 실패');
        res.status({ message: "로그인 실패" });
    }
})

app.listen(port, (req, res) =>{
    console.log(`${port}에서 실행 중`);
})