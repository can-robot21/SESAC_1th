const express = require('express');
const nunjucks = require('nunjucks');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('ps');
const debug = require('debug')('upload');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');  // 이미지 업로드 디렉토리 설정
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // 파일명 설정
    }
});

const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // 정적 파일 경로 설정
app.set('view engine', 'html');



nunjucks.configure('views', {
    autoescape: true,
    express: app,
    filters: {
        formatPostDate: function(date) {
            // 날짜를 원하는 형식으로 포맷팅하는 로직을 추가
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`; // 날짜 형식 정의
        }
    }
});



// 게시글을 담기 위한 변수
let posts = [];

app.get('/', (req, res) => {
    res.render('index', { posts });  // posts=posts 를 {} 로 대체해서 표현 
});

app.get('/write', (req, res) => {
    res.render('write');
})

// debug.enabled = true;

app.post('/write', upload.single('image'), (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const date = new Date();

    const imageUrl = req.file ? req.file.filename : null;
    const thumbnailPath = imageUrl ? `thumbnails/thumb_${imageUrl}` : null;

    if (req.file) {
        sharp(req.file.path)
            .resize(100)
            .toFile(`public/${thumbnailPath}`, (err, info) => {
                if (err) {
                    console.error(err);
                }
            });
    }
    
    posts.push({ title, content, date, imageUrl, thumbnailPath });
    // console.log(posts);
    debug(posts);

    res.redirect('/');
});

app.post('/delete/:index', (req, res) => {
    const index = req.params.index -1; // 실제 인덱스는 0 부터
    if (index >=0| index <= posts.length) {
        posts.splice(index, 1);  // 해당 인덱스이 항목 1개를 삭제
    }

    // res.send('삭제완료');
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`서버 포트 ${port}에서 레디`);
})