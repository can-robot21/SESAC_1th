const express = require('express');
const router = express.Router();

router.get("/register", (req, res) => {
    res.render('register.html', { title: "매장등록", content: "매장등록 페이지 내용"});
});

module.exports = router;