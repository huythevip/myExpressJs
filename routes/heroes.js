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

router.use(function (req, res, next) {
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

 router.post('/create', function (req, res, next) {
     // var name = req.body.heroData
     console.log('123');
     // connection.query(`INSERT INTO tbl_hero(name) VALUES ('${name}') `, function(err, rows, fields) {
     //     if (err) throw err
     //     res.send('Successfully created new Hero!');
     // })
 })

 router.get('/:id', function(req, res, next) {
     var id = req.params.id
    //  res.send(id);
     connection.query(`SELECT * FROM tbl_hero WHERE id = ${id}`, function(err, rows, fields) {
         if (err) throw err
         res.json(rows[0]);
     })
 })

router.post('/:id', function (req, res, next) {
    var id = req.body.id
    var name = req.body.name
    connection.query(`UPDATE tbl_hero SET name = '${name}' WHERE id = ${id}`, function (err, rows, fields) {
        if (err) throw err
        res.send('Successfully updated!');
    })
})




module.exports = router;