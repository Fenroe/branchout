require("dotenv").config();
const express = require("express");
const pool = require("./db");

const port = 8080;
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE username='bob'");
    res.status(200).json({ users: rows });
  } catch (error) {
    console.error("Error in the GET request:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/", async (req, res) => {
  // Create the 'users' table
  await pool.query(
    "CREATE TABLE users (id serial PRIMARY KEY, username VARCHAR(50))"
  );

  // Insert a user with the username 'bob'
  await pool.query("INSERT INTO users (username) VALUES ('bob')");

  return res.status(201).send("Table created and data inserted.");
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
