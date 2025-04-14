const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Intentionally vulnerable: No input validation or authentication check 1
  if (username && password) {
    res.send(`<h1>Welcome, ${username}</h1>`);
  } else {
    res.send("<h1>Login failed</h1>");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
