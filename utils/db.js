const mysql = require('mysql');

// just input local mysql database
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '778Iv23N',
    database: "yoga_mysql"
});

module.exports = db;