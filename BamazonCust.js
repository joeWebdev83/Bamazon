var mysql = require('mysql');
var inquirer = require('inquirer');
var table = require('cli-table2');

var connection= mysql.breateConnection({
    host: "localhost",
    User: "",
    password:"petion83",
    database: "bamazon_db",
    port:3306
})
connection.connect();