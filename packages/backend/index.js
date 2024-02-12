const express = require("express");
const cors = require("cors");
const app = express();

const productList = [
  {
    id: 1,
    name: "Shoes",
  },
  {
    id: 2,
    name: "Bags",
  },
];

app.use(cors());

app.get("/", function (req, res) {
  res.send(productList);
});

app.listen(4000);
