const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');


const app = express();
const port = 5000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));

});


// orgin 점검 후 허용
// app.use(cors()); // 모든 출처 허용 (보안상 취약)
const corsOptions = {
    origin: [
        'http://127.0.0.1:3000', // 허용할 클라이언트 주소
        'http://localhost:3000'
    ],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));


// cors 대체하는 미들웨어 
// app.use((req, res, next) => {
//     res.header("Access-Contro-Allow-Origin", 'http://localhost:3000');
//     next();
// })

const data = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
]


app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express Server' });
})

app.listen(port, () => {
    console.log(`server on port ${port}`);
});