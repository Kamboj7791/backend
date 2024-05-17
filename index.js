const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/kunal", (req, res) => {
  res.send("you enter kunal route");
});
app.get("/kamboj", (req, res) => {
  res.send("you entered kamboj route");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
