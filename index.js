const version = 1;

const express = require("express");
const app = express();

app.get("/", (req, res) => res.json({ message: "Hi, from demo 1!", version }));

app.listen(8000, () => {
  console.log("running on port 8000");
});
