const sql = require('../db.js')

const getUsers = async () => {
    let query = 'SELECT * FROM  student';
    let data = await sql(query)
    console.log(data)
    return data
}

const createUser = async () => {
    let query = 'INSERT INTO student (name, age) VALUES ("Aman",22)';
    let data = await sql(query)
    console.log(data)
    return data

}
module.exports.getUsers = getUsers
module.exports.createUser = createUser