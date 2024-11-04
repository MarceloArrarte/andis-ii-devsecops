var express = require('express');
var { db } = require('../db/db');
var router = express.Router();


router.get('/:id', function(req, res, next) {
  db.query(`SELECT * FROM users WHERE id = ${req.params.id}`)
    .then(([data]) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error));
});


router.post('/', function (req, res, next) {
  const apiKey = req.query.apiKey;
  const apiKeyValidator = /^(a+)+[0-9]{3,}$/;
  if (!(apiKey && apiKeyValidator.test(apiKey))) {
    return res.status(400).json({ error: 'Invalid API key.' });
  }

  const { name, email, age } = req.body;
  if (!(name && email && age)) {
    return res.status(400).json({ error: 'Missing data in body.'});
  }

  db.query('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', [name, email, age])
    .then(([{ insertId }]) => res.status(200).json({ id: insertId }))
    .catch((error) => res.status(500).json(error));
});


module.exports = router;
