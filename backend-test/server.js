const express = require("express");
const bodyParser = require("body-parser");
const { books } = require("./data");

const PORT = 5000;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "WORKING!!!" });
});

app.get("/book/:id", (req, res) => {
  const book = books.find(e => e.id == req.params.id);

  if (!book) {
    res.status(400).json({ error: "Book not found!" });
  }

  res.status(200).json(book);
});

app.post("/book", (req, res) => {
  const { id, author, price, genre } = req.body;

  if (!id || !author) {
    res.status(400).json({ error: "Invalid params" });
  }

  const book = { id, author, price, genre };

  books.push(book);

  res.status(200).json(book);
});

const server = app.listen(PORT, () => {
  console.info(`App is now running on port ${PORT}!!!`);
});

module.exports = { app, server };
