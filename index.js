const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

let books = [];

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
