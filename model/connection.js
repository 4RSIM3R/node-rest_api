const mysql = require('mysql')

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'utawi_iku'
})

module.exports = connection