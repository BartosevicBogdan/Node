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
async function dbQuery(sql, showLog) {
  try {
    showLog && console.log("sql", sql);
    showLog && typeof sql !== "string" && console.log("sql not a string");
    const connection = await mysql.createConnection(dbConfig);
    const dbResponse = await connection.query(sql);
    await connection.close();
    return dbResponse;
  } catch (error) {
    console.warn("Catched error in DB_Helper/dbQuery()");
    return false;
  }
}
async function dbExecute(sql, argumentsInArray, showLog) {
  try {
    showLog && console.log("sql", sql);
    showLog && console.log("argumentsInArray", argumentsInArray);
    showLog && typeof sql !== "string" && console.log("sql not a string");
    const connection = await mysql.createConnection(dbConfig);
    const [dbResponse] = await connection.execute(sql, argumentsInArray);
    showLog && console.log("dbResponse", dbResponse.affectedRows);
    await connection.close();
    if (dbResponse.affectedRows === 1) return true;
  } catch (error) {
    console.warn("Catched error in DB_Helper/dbExecute()");
    return false;
  }
}

module.exports = {
  pingDB,
  dbQuery,
  dbExecute,
};
