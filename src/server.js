require("dotenv").config();

//#region server required imports
const express = require("express");
const morgan = require("morgan");
const { pingDB } = require("./utils/DB_Helper");
//#endregion

//#region  imports to refactor server file
const productsRoute = require("./routes/productsRoute");
//#endregion

const PORT = process.env.SERVER_PORT || 5000;
const app = express();

// middleware
app.use(morgan("common"));
app.use(express.json());

app.get("/test", (request, response) => {
  const output = {
    success: true,
    msg: "answer to /test GET request endpoint",
  };
  response.json(output);
});

app.use("", productsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  pingDB(false); //boolean, ar atspausdinti klaida gauta catch bloke cli, klaidos nebus jeigu nepadaryti jos DB_Helper ar env faile
});
