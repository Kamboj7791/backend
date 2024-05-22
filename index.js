require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const gitHubDatabase = {
  login: "Kamboj7791",
  id: 91943520,
  node_id: "U_kgDOBXryYA",
  avatar_url: "https://avatars.githubusercontent.com/u/91943520?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Kamboj7791",
  html_url: "https://github.com/Kamboj7791",
  followers_url: "https://api.github.com/users/Kamboj7791/followers",
  following_url:
    "https://api.github.com/users/Kamboj7791/following{/other_user}",
  gists_url: "https://api.github.com/users/Kamboj7791/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Kamboj7791/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Kamboj7791/subscriptions",
  organizations_url: "https://api.github.com/users/Kamboj7791/orgs",
  repos_url: "https://api.github.com/users/Kamboj7791/repos",
  events_url: "https://api.github.com/users/Kamboj7791/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Kamboj7791/received_events",
  type: "User",
  site_admin: false,
  name: "kunal kamboj",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: true,
  bio: "Hi there! I'm kunal kamboj- a passionate **Web Developer** who loves to bring ideas to life on the digital canvas. 🌐\r\n",
  twitter_username: null,
  public_repos: 22,
  public_gists: 0,
  followers: 1,
  following: 2,
  created_at: "2021-10-05T08:11:28Z",
  updated_at: "2024-05-01T19:09:20Z",
};

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
app.get("/github", (req, res) => {
  res.json(gitHubDatabase);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
