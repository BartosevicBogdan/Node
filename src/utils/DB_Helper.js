const mysql = require("mysql2/promise");
const dbConfig = require("../configs/DBconfig");

async function pingDB(printErrorIfFunctionChatchError) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const isAuthorized = connection.connection.authorized;
    console.log(`Connection to DB successfully = ${isAuthorized}`);
    await connection.close();
  } catch (error) {
    console.warn("Catched error in DB_Helper/pingDB()");
    if (typeof printErrorIfFunctionChatchError === "boolean") {
      printErrorIfFunctionChatchError &&
        console.log("DB_Helper/pingDB() catcherd error: ", error);
    }
  }
}

module.exports = {
  pingDB,
};
