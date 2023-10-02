const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();

app.use(express.json());
app.use(cors());
app.post("/addadmin", (req, res) => {
  const username = req.body["username"];
  const email = req.body["email"];
  const number = req.body["number"];
  const password = req.body["password"];

  const insertSTMT = `INSERT INTO adminaccounts (username,email,number, password) VALUES ('${username}', '${email}','${number}','${password}');`;

  pool
    .query(insertSTMT)
    .then((result) => {
      console.log("data saved");
      console.log(result);
      res.send("Data saved successfully");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving data");
    });
});

app.post("/login", async (req, res) => {
  const email = req.body["email"];
  const password = req.body["password"];

  const selectSTMT = `SELECT * FROM adminaccounts WHERE email = $1 AND password = $2;`;

  try {
    const { rowCount } = await pool.query(selectSTMT, [email, password]);

    if (rowCount === 1) {
      // Successful login
      console.log("Login successful");
      res.status(200).send("Login successful");
    } else {
      // Login failed (username and password do not match)
      console.log("Login failed");
      res.status(401).send("Login failed");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error during login");
  }
});

app.listen(4000, () => console.log("Server running on localhost:4000"));
