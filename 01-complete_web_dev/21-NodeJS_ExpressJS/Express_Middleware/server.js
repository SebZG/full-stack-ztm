const express = require("express");

const app = express();

// MIDDLEWARE
app.use((req, res, next) => {
  console.log("MIDDLEWARE");
  next(); // next() is used to pass control to the next middleware function in the stack
});

app.get("/", (req, res) => {
  res.send("testing...");
});

app.listen(3333);
