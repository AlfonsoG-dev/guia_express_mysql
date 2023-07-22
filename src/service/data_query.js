const mysql2 = require("mysql2")
const connection_db = require("./data_base")

const conn_db = mysql2.createConnection(connection_db)

function read_all() {
    return new Promise((resolve, reject) => {
        conn_db.execute('select * from user', (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

function get_user_id(id = 0) {
    return new Promise((resolvem, reject) => {
        conn_db.execute('select * from user where id = ?', [id], (err, res) => {
            if (err) reject(err)
            resolvem(res)
        })
    })
}
function get_name(id = 0) {
    return new Promise(function (resolve, reject) {
        conn_db.execute('select nombre from user where id = ?', [id], function (err, res) {
            if (err) reject(err)
            resolve(res)
        })
    })

}
function post_user(user) {
    return new Promise(function (resolve, reject) {
        conn_db.query('insert into user (nombre, email, password, rol, create_at) values (?,?,?,?,?)', [user.nombre, user.email, user.password, user.rol, user.create_at], function (err, res) {
            if (err) reject(err)
            resolve(res)
        })
    })
}

function delete_user(id = 0) {
    return new Promise(function (resolve, reject) {
        conn_db.execute('delete from user where id=?', [id], function (err, res) {
            if (err) reject(err)
            resolve(res)
        })
    })
}
module.exports = {
    read_all,
    get_user_id,
    get_name,
    post_user,
    delete_user
}
