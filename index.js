require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");

const version = 9;

async function start() {
  await connect_db();

  const app = express();

  app.get("/", (req, res) => {
    mysql.console.log(":: New request on /");
    res.json({ message: "Hi, from demo 1!", version });
  });

  app.listen(8000, () => {
    console.log("running on port 8000");
  });
}

async function connect_db() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
  const query = "SELECT 1+1";

  const [result] = await connection.query(query);
  console.log(query, result);
}

start();
