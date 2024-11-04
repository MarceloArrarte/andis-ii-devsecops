// Revisar por qué crashea con las versiones nuevas!!
var db = require('mysql2-promise')();
 
db.configure({
    "host": "localhost",
    "user": "usuario",
    "password": "pass1234",
    "database": "mi_database"
});


const mysql = require('mysql2');

// Create the connection to database
const connectionCb = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: "pass1234",
  database: 'mi_database',
});

module.exports = { 
    db,
    connectionCb
};