// Revisar por qué crashea con las versiones nuevas!!
var db = require('mysql2-promise')();

db.configure({
    "host": process.env.DB_HOST,
    "user": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE
});


const mysql = require('mysql2');

// Create the connection to database
const connectionCb = mysql.createConnection({
  "host": process.env.DB_HOST,
  "user": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE
});

module.exports = { 
    db,
    connectionCb
};