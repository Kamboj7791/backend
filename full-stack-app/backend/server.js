import express from "express";
const app = express();
const data = [
  {
    id: 1,
    name: "kunal",
  },
  {
    id: 2,
    name: "kamboj",
  },
  {
    id: 3,
    name: "mukesh",
  },
  {
    id: 4,
    name: "kumar",
  },
  {
    id:5,
    name :"nothing"
  }
];
app.get("/", (req, res) => {
  res.send("SERVER IS READY");
});
app.get("/data", (req, res) => {
  res.send(data);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
