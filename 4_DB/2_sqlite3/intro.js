const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("mydb1.db");

db.run(`CREATE TABLE IF NOT EXISTS greetings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT
)`);

db.run(`INSERT INTO greetings (message) VALUES (?)`, ["HELLO, WORLD22"], function (err) {
  if (err) {
    console.error("데이터 삽입 실패");
    return;
  }
  console.log("데이터 성공적으로 추가: ", this.lastID);
});

db.each("SELECT * FROM greetings", (err, row) => {
  if (err) {
    console.error("쿼리 실패");
  }
  console.log("Greeting: ", row.message);
});

db.close();