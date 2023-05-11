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

app.post("/books", (req, res) => {
  const { title, author, publishedDate } = req.body;

  const id = Math.floor(Math.random() * 1000);

  const book = { id, title, author, publishedDate };

  const JsonString = JSON.stringify(book);
  books.push(JsonString);

  res.json(JsonString);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
