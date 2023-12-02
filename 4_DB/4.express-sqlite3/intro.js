const express = require("express");
const sqlite3 = require("sqlite3");

const fs = require("fs");

const app = express();
const port = 3000;
const dbFile = "mydb1.db";

const db = new sqlite3.Database(dbFile);

// ?(placeholder) 사용 -> SQL Injection 방지
// prepare: 미리 컴파일 -> 동일한 쿼리 여러번 실행시 성능상 이점O
//                      placeholder통해 사용자의 입력값 안전하게 바인딩

app.get("/:table", (req, res) => {
  const db_table = req.params.table;

  const query = `SELECT * FROM ${db_table}`;

  db.all(query, (err, rows) => {
    res.json(rows);
  });
});

app.get("/:table/:id", (req, res) => {
  const db_table = req.params.table;
  const table_id = req.params.id;

  const query = `SELECT * FROM ${db_table} WHERE id = ?`;

  db.all(query, [table_id], (err, rows) => {
    res.json(rows);
  });
});

// DB 초기화 함수
function init_database() {
  return new Promise((resolve, reject) => {
    const sql = fs.readFileSync("init_database.sql", "utf8");
    console.log(sql);
    db.exec(sql, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log("초기화 성공");
        resolve();
      }
    });
  });
}

async function main() {
  try {
    await init_database();

    app.listen(port, () => {
      console.log(`서버 레디...${port}`);
    });
  } catch (error) {
    console.log("초기화 실패", error);
  }
}

main();