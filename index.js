const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/kunal", (req, res) => {
  res.send("you enter kunal route");
});
app.get("/kamboj", (req, res) => {
  res.send("you entered kamboj route");
});
app.get("/login", (req, res) => {
  res.send(`<h1>please enter details here</h1>`);
});
app.get("/follow", (req, res) => {
  res.send("<h2>please follow my github account for more source code</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
