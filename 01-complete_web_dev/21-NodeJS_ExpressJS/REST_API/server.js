const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  // req object
  req.query; // /?name=Seb
  req.body; // {"user": "Seb"}
  req.headers; // {"Content-Type": "application/json"}
  req.params; // /profile/:id

  // res object
  res.status(404);
  res.send("Not found...");
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
