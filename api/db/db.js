// Revisar por qué crashea con las versiones nuevas!!
var db = require('mysql2-promise')();
const mysql = require('mysql2');

const dbConfig = {
  "host": process.env.DB_HOST,
  "user": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE
}


db.configure(dbConfig);

const connectionCb = mysql.createConnection(dbConfig);

module.exports = { 
    db,
    connectionCb
};