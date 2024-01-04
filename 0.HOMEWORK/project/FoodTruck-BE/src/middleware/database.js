const mysql2 = require("mysql2/promise");
const dbConfig = require("../config/dbConfig");

const pool = mysql2.createPool(dbConfig);

async function getConnection(req, res, next) {
    try {
        req.connection = await pool.getConnection();
        next();
    } catch (error) {
        req.status(500).json({ error: " 데이타 베이스 접속 에러 "});
    }
}

module.exports = getConnection;