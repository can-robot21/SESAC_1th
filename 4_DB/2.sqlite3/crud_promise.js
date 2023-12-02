const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("mydb4.db");

function createTable() {
  return new Promise((resolve, reject) => {
    // 지연 처리되는 코드

    db.run(
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

function insertUser() {
  return new Promise((resolve, reject) => {
    const newUser = { username: "yunk", email: "yunk@sesac.com" };

    db.run(
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

function updateUser() {
  return new Promise((resolve, reject) => {
    const updateUser = {
      id: 1,
      username: "yunk23",
      email: "yunk22@sesac.com",
    };

    db.run(
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

function deleteUser() {
  return new Promise((resolve, reject) => {
    const delUser = {
      id: 3,
    };

    db.run("DELETE FROM users WHERE id=?", [delUser.id], (err) => {
      if (err) {
        console.log("삭제 실패", err);
        reject(err);
      }
      console.log("삭제 성공");
      resolve();
    });
  });
}

function readUser() {
  return new Promise((resolve, reject) => {
    db.each("SELECT * FROM users", (err, row) => {
      if (err) {
        console.error("쿼리 실패");
        reject(err);
      }
      console.log("All Users: ", row);
      resolve();
    });
  });
}

async function main() {
  await createTable();
  await insertUser();
  await readUser();
  await updateUser();
  await readUser();
  await deleteUser();
  await readUser();
  db.close();
}

main();