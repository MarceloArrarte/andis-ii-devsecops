const mysql = require('mysql2');
const fs = require('node:fs');

const dbConfig = {
  "host": process.env.DB_HOST,
  "user": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE
};

if (process.env.DB_SSL_CERT) {
  dbConfig.ssl = {
    ca: fs.readFileSync(process.env.DB_SSL_CERT)
  };
} 

const db = mysql.createConnection(dbConfig);

module.exports = { 
    db
};