import express from "express";
const app = express();
const names = [
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
    id: 5,
    name: "nothing",
  },
];
app.get("/", (req, res) => {
  res.send("SERVER IS READY");
});
app.get("/api/names", (req, res) => {
  res.send(names);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
