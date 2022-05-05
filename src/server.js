require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

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

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
