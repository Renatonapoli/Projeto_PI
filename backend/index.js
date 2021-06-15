const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const bcrypt = require("bcryptjs");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "pi-dados",
});

app.post("/cadastro", (req, res) => {
  const username = req.body.username;
  const user = req.body.user;
  const email = req.body.email;
  const password = req.body.password;
  const confpassword = req.body.confpassword;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, user, email, password, confpassword) VALUES (?,?,?,?,?)",
      [username, user, email, password, confpassword],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE email = ?;", email, (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (err, response) => {
        if (response) {
          res.send(result);
        } else {
          res.send({ message: "Usuário ou senha incorretos!" });
        }
      });
    } else {
      res.send({ message: "Usuário não existe!" });
    }
  });
});

app.listen(3001, () => {
  console.log("Rodando o servidor");
});
