// const DB = require("./final_database.js");
const Database = require("./final_database2.js");

async function main() {
  DB = new Database("mydb5.js");
  try {
    const newUserA = { username: "yunk", email: "yunk@sesac.com" };
    const newUserB = { username: "yunk2", email: "yunk2@sesac.com" };

    const changeUser = {
      id: 3,
      username: "yunk23",
      email: "yunk22@sesac.com",
    };

    const delUser1 = {
      id: 5,
    };

    const delUser2 = {
      id: 6,
    };

    await DB.createTable();
    await DB.insertUser(newUserA);
    await DB.insertUser(newUserB);

    await DB.updateUser(changeUser);
    await DB.deleteUser(delUser1);
    await DB.deleteUser(delUser2);
    await DB.readUser();
  } catch (error) {
    console.error("에러가 발생하였습니다.", error);
  } finally {
    DB.close();
  }
}

main();