const mysql2 = require("mysql2")
const connection_db = require("./data_base")
const User = require("../model/user_model")


class UserController {
    constructor() {
        this.connection = mysql2.createConnection(connection_db)
    }
    read_all() {
        return new Promise((resolve, reject) => {
            this.connection.execute('select id, nombre, email, rol from user', (err, res) => {
                if (err) reject(err)
                resolve(res)
            })
        })
    }

    read_by_id(id = 0) {
        return new Promise((resolvem, reject) => {
            this.connection.execute('select nombre, email, rol from user where id = ?', [id], (err, res) => {
                if (err) reject(err)
                resolvem(res)
            })
        })
    }

    read_by_name(user_name = '') {
        return new Promise((resolve, reject) => {
            this.connection.execute('select nombre, email, rol from user where nombre = ?', [user_name], function (err, res) {
                if (err) reject(err)
                resolve(res)
            })
        })

    }
    read_by_email(user_email = '') {
        return new Promise((resolve, reject) => {
            this.connection.execute('select nombre, email, rol from user where email = ?', [user_email], function (err, res) {
                if (err) reject(err)
                resolve(res)
            })
        })
    }

    insert_user(user = User) {
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