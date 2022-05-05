const express = require("express");
const { dbQuery, dbExecute } = require("../utils/DB_Helper");
const router = express.Router();

router.get("/products", async (req, res) => {
  const [dbResponse] = await dbQuery("SELECT * FROM products");
  console.log("dbResponse", dbResponse);
  const output = {
    success: true,
    msg: "answer to /products GET request endpoint",
    data: dbResponse,
  };
  res.json(output);
});
router.get("/totalproducts", async (req, res) => {
  const [dbResponse] = await dbQuery(
    `SELECT COUNT(id) AS "Products in table"  FROM products`
  );
  console.log("dbResponse", dbResponse);
  const output = {
    success: true,
    msg: "answer to /totalproducts GET request endpoint",
    data: dbResponse,
  };
  res.json(output);
});
router.post("/products", async (req, res) => {
  const reqData = {
    image_url: req.body.image_url,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  };
  // console.log("Object.values(reqData);", Object.values(reqData));
  const dbResponse = await dbExecute(
    `INSERT INTO products (image_url, title, description, price) VALUES (?, ?, ?, ?)`,
    Object.values(reqData),
    true
  );
  // console.log("dbResponse", dbResponse);
  if (dbResponse === true) {
    const output = {
      success: true,
      msg: "answer to /products POST request endpoint",
      action: "create product with information",
      data: reqData,
    };
    res.json(output);
  }
});
router.delete("/products/:id", async (req, res) => {
  // const reqData = {
  //   image_url: req.body.image_url,
  //   title: req.body.title,
  //   description: req.body.description,
  //   price: req.body.price,
  // };
  // console.log("Object.values(reqData);", Object.values(reqData));
  const dbResponse = await dbExecute(
    `DELETE FROM products WHERE id = ? `,
    [req.params.id],
    true
  );
  // console.log("dbResponse", dbResponse);
  if (dbResponse === true) {
    const output = {
      success: true,
      msg: "answer to /products/:id DELETE request endpoint",
      action: `delete product with ID=${req.params.id}`,
    };
    res.json(output);
  }
});

module.exports = router;
