const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Helloooo from NODE!");
  console.log("Headers: ", req.headers);
  console.log("Method: ", req.method);
  console.log("URL: ", req.url);

  const user = {
    name: "Seb",
    hobby: "Chilling",
  };

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(user));

  // res.setHeader("Content-Type", "text/html");
  // res.end(`<h1>Helloooo from \`res.\`</h1>`);
});

server.listen(3333);
