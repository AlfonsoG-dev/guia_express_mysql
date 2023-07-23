const mysql2 = require("mysql2")
const connection_db = require("./data_base")
const User = require("../model/user_model")


class UserController {
    constructor() {
        this.connection = mysql2.createConnection(connection_db)
    }
    read_all() {
        return new Promise((resolve, reject) => {
            this.connection.execute('select * from user', (err, res) => {
                if (err) reject(err)
                resolve(res)
            })
        })
    }

    get_user_id(id = 0) {
        return new Promise((resolvem, reject) => {
            this.connection.execute('select * from user where id = ?', [id], (err, res) => {
                if (err) reject(err)
                resolvem(res)
            })
        })
    }
    get_name(id = 0) {
        return new Promise((resolve, reject) => {
            this.connection.execute('select nombre from user where id = ?', [id], function (err, res) {
                if (err) reject(err)
                resolve(res)
            })
        })

    }
    post_user(user = User) {
        return new Promise((resolve, reject) => {
            this.connection.execute('insert into user (nombre, email, password, rol, create_at) values (?,?,?,?,?)', [user.get_name, user.get_email, user.get_password, user.get_rol, user.get_create_at], function (err, res) {
                if (err) reject(err)
                resolve(res)
            })
        })
    }

    delete_user(id = 0) {
        return new Promise((resolve, reject) => {
            this.connection.execute('delete from user where id=?', [id], function (err, res) {
                if (err) reject(err)
                resolve(res)
            })
        })
    }

    close_connection_db() {
        this.connection.destroy()
    }
}
module.exports = UserController