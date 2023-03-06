const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employeedb"
});

mysqlConnection.connect((err) => {
  if (!err)
    console.log('Database Connected !');
  else
    console.log('failed');
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Express");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//GET all employees
app.get('/employees', (req, res) => {
  mysqlConnection.query('SELECT * FROM Employee', (err, rows, fields) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
})

//sachin