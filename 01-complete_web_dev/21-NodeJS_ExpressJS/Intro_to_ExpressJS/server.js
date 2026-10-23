const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Getting /...");
});

app.get("/profile", (req, res) => {
  res.send("Getting /profile...");
});

app.post("/profile", (req, res) => {
  console.log(req.body);
  const user = {
    name: "Seb",
    hobby: "Chilling",
  };
  res.send(user);
});

app.listen(3333);
