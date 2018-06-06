var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testangular'
});
var app = express();

connection.connect()

router.use('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


/* GET home page. */
 router.get('/', function(req, res, next) {
   connection.query('SELECT * FROM tbl_hero;', function(err, rows, fields) {
       if (err) throw err

       res.json(rows);
   })

 });

module.exports = router;