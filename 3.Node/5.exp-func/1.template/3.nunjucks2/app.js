const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;




app.get('/page', (req, res) => {
    const data = {
        title: "마이페이지",
        content: "여기가 본문"
    }
    res.render('page', data);

});

app.listen(port, () => {
    console.log(`서버 ${port}`);
})