const sqlite3 = require("sqlite3");

class Database {
  constructor(dbName) {
    this.db = new sqlite3.Database(dbName);
  }

  createTable() {
    return new Promise((resolve, reject) => {
      // 지연 처리되는 코드

      this.db.run(
        `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      email TEXT
    )`,
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }
  insertUser(newUser) {
    return new Promise((resolve, reject) => {
      this.db.run(
        "INSERT INTO users (username, email) VALUES (?, ?)",
        [newUser.username, newUser.email],
        function (err) {
          if (err) {
            console.error("데이터 삽입 실패");
            reject(err);
          }
          console.log("데이터 삽입 성공:", this.lastID);
          resolve();
        }
      );
    });
  }
  updateUser(updateUser) {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE users SET username=?, email=? WHERE id=?",
        [updateUser.id, updateUser.username, updateUser.email],
        (err) => {
          if (err) {
            console.error("수정 실패", err);
            reject(err);
          }
          console.log("수정 성공");
          resolve();
        }
      );
    });
  }
  deleteUser(delUser) {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM users WHERE id=?", [delUser.id], (err) => {
        if (err) {
          console.log("삭제 실패", err);
          reject(err);
        }
        console.log("삭제 성공");
        resolve();
      });
    });
  }
  readUser() {
    return new Promise((resolve, reject) => {
      this.db.each("SELECT * FROM users", (err, row) => {
        if (err) {
          console.error("쿼리 실패");
          reject(err);
        }
        console.log("All Users: ", row);
        resolve();
      });
    });
  }
  close() {
    this.db.close();
  }
}

module.exports = Database;