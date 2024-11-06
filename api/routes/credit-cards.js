var express = require('express');
var { db } = require('../db/db');
var router = express.Router();


router.get('/', function(req, res, next) {
    var a = 123;
    db.query(
        `SELECT * FROM credit_cards WHERE user_id = ${req.query.userId}`,
        (err, results) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.status(200).json(results);
        }
    );
});


router.get('/:cardNumber', function(req, res, next) {
    const { supportBigNumbers } = req.query;
    const cardNumber = req.params.cardNumber;
    if (!/\d{16}/.test(cardNumber)) {
        return res.status(400).json({ error: 'Invalid card number format.' });
    }

    db.query(
        { sql: `SELECT * FROM credit_cards WHERE card_number = ${cardNumber}`, supportBigNumbers },
        (err, results) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.status(200).json(results);
        }
    );
});


module.exports = router;
