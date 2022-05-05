const express = require("express");
const router = express.Router();

router.get("/products", (req, res) => {
  const output = {
    success: true,
    msg: "answer to /products GET request endpoint",
  };
  res.json(output);
});
router.get("/totalproducts", (req, res) => {
  const output = {
    success: true,
    msg: "answer to /totalproducts GET request endpoint",
  };
  res.json(output);
});
router.post("/products", (req, res) => {
  const reqData = {
    image_url: req.body.image_url,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  };
  const output = {
    success: true,
    msg: "answer to /products POST request endpoint",
    action: "create product with information",
    data: reqData,
  };
  res.json(output);
});
router.delete("/products/:id", (req, res) => {
  const output = {
    success: true,
    msg: "answer to /products/:id DELETE request endpoint",
    action: `delete product with ID=${req.params.id}`,
  };
  res.json(output);
});

module.exports = router;
