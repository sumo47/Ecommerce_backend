const mysql = require('mysql2')

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'sumit_db'

})

connection.connect((error) => {
    if (error) {
        console.log(`error connecting==> ${error.stack}`)
        return;
    }
    console.log(`MySql connected as id ${connection.threadId}`)
})

sql = (sqlQuery, params) => {
    return new Promise((resolve, reject) => {
        connection.query(sqlQuery, params, (error, result) => {
            if (error) { reject(new Error()) }
            else { resolve(result) }
        })
    })
}

module.exports = sql