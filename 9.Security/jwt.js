// // const express = require('express');
// // const cookieParser = require('cookie-parser');
// // const jwt = require('jsonwebtoken');

// // const app = express()
// // const port = 3000;


// // app.use(cookieParser());

// // app.use(req, res, next)  => {
// //     // 클라이언트에게   jwt 생성 및 전송
// //     const clientId= 'myClientId-1234'; // 클라이언트 고유 식별자 만들어 전달
// //     const toket = jwt.sign( { clientId } , secretKey, { expiresIn: '1m'});

// //     res.cookie('jwt', token);

// //     next();    
// // }

// // app.get('/', (req, res) => {
// //     console.log('루트 접속');
// //     res.send('hello');
// // })

// // app.listen(port, () => {
// //     console.log(`서버 준비`);
// // })

// const express = require('express');
// const cookieParser = require('cookie-parser');
// const jwt = require('jsonwebtoken');

// const app = express();
// const port = 3000;

// const secretKey = 'yourSecretKey'; // secretKey 정의

// app.use(cookieParser());

// app.use((req, res, next) => { // 미들웨어 정의 수정
//     const clientId = 'myClientId-1234';
//     const token = jwt.sign({ clientId }, secretKey, { expiresIn: '1m'}); // 변수명 수정 및 토큰 생성
//     res.cookie('jwt', token, { httpOnly: true }); // JWT 쿠키로 전송
//     next(); // next 함수 호출로 미들웨어 체인 계속 진행
// });

// app.get('/decode', (req, res) => {
//     const token = req.cookies.jwt;

//     console.log(token);

//     jwt.decode(token, { complete: true }, (decodeedToken) => {

//         console.log(`토큰: ${decodeedToken}`);
//         res.send(decodedToken);
//     });

//     res.send('decoded');
// })

// app.get('/', (req, res) => {
//     console.log('루트 접속');
//     res.send('hello');
// });

// app.listen(port, () => {
//     console.log(`서버가 ${port}번 포트에서 실행중입니다.`);
// });


const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

const secretKey = 'yourSecretKey'; // secretKey 정의

app.use(cookieParser());

app.use((req, res, next) => {
    const clientId = 'myClientId-admin';
    const token = jwt.sign({ clientId }, secretKey, { expiresIn: '1m'}); // 변수명 수정
    res.cookie('jwt', token, { httpOnly: true });
    next();
});

app.get((req, res, next) => {
    const token = req.cookies.jwt;

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized'});
        }

        //  원하는 내용 추출
        const clientId = decoded.clientId;
        if (clientId =' MyClientId-1234') {
            console.log('유저 페이지 전달');
            next();
        } else if (clientId === 'MyClientId-admin') {
            console.log('관리자 페이지 전달');
            next();
        } else {
            res.status(403).json({ message: 'Forbidden'});
        }
    });
})

app.get('/decode', (req, res) => {
    const token = req.cookies.jwt;
    console.log(token);

    const decodedToken = jwt.decode(token, { complete: true }); 
    console.log(`토큰: ${decodedToken}`);

    res.send(decodedToken); 
});

app.get('/', (req, res) => {
    console.log('루트 접속');
    res.send('hello');
});

app.listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 실행중입니다.`);
});
