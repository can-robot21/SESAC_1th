const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 3000;

const mainRouter = require('./src/routes/mainRoutes');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// 라우터 설정


// nunjucks 템플릿 설정
nunjucks.configure("views", {
    autoescape: true,
    express: app,
});
app.set("view engine", "html");

app.use('/', mainRoutes);

app.get('/', (req, res) => {
    res.render('index.html');
})


app.listen(port, () => {
    console.log(`서버 ${prot}에서 Ready`);
})