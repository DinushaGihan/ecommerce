const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'EmployeeDB'
});

mysqlConnection.connect((err) => {
  if (!err)
    console.log('Database Connected !');
  else
    console.log('failed');
});

app.listen(3000, () => console.log('express server running'));


//GET all employees
app.get('/employees', (req, res) => {
  mysqlConnection.query('SELECT * FROM Employee', (err, rows, fields) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
})

//GET employee by ID
app.get('/employees/:id', (req, res) => {
  mysqlConnection.query('SELECT * FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
})

//DELETE an employee
app.delete('/employees/:id', (req, res) => {
  mysqlConnection.query('DELETE FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
    if (!err)
      res.send('Deleted');
    else
      console.log(err);
  })
});