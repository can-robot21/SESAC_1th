const express = require("express");
const router = express.Router();
const pool = require("../src/dbConfg/dbConfig");

// 매장 등록 폼 렌더링하는 라우터
router.get('/register', (req, res) => {
    res.render('register');
});

// 매장 등록 요청을 처리하는 라우터
router.post(',', async (req, res) => {
    const { name, latitude, longitude, additionalInfo } = req.body;

    try {
        const connection = await pool.getConnection();
        const query = `INSERT INTO store (name, latitude, longitude, additionalInfo) VALIES (?,  ?, ?, ?)`;
        await connection.query(query, [name, latitude, longitude, additionalInfo]);
        connection.release();

        res.redirect('/'); // 등록 후 매장 목록 페이지로 이동
    } catch (error) {
        console.log('매장 등록 오류',  error);
        res.status(500).send('Database error');
    }
})