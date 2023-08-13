const { resolve } = require("path");
const DBConnection = require("../service/data_base");

class UserRepository extends DBConnection {
    constructor() {
        super();
        this.connection = super.create_normal_connecction();
    }

    verificar_database(db_name = '') {
        return new Promise((resolve, reject) => {
            this.connection.execute(`create database if not exists ${db_name}`, function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }

    select_database(db_name = '') {
        return new Promise((resolve, reject) => {
            this.connection.query(`use ${db_name}`, function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }

    verificar_table_user() {
        return new Promise((resolve, reject) => {
            this.connection.execute('create table if not exists user(id int not null unique primary key auto_increment, nombre varchar(100) not null unique, email varchar(100) not null unique, password varchar(100) not null, rol varchar(50), crate_at datetime, update_at datetime)', function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }

    read_all_users() {
        return new Promise((resolve, reject) => {
            this.connection.execute('select nombre, email from user', function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }
    read_by_id(user_id = 0) {
        return new Promise((resolve, reject) => {
            this.connection.execute('select email from user where id=?', [user_id], function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }

    read_by_name(user_name) {
        return new Promise((resolve, reject) => {
            this.connection.execute('select email from user where nombre =?', [user_name], function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }
    read_by_email(user_email) {
        return new Promise((resolve, reject) => {
            this.connection.execute('select nombre, email from user where email =? order by email', [user_email], function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }
    insert_user({ nombre = '', email = '', password = '', rol = '', create_at = Date }) {
        return new Promise((resolve, reject) => {
            this.connection.execute('inert into user (nombre, email, password, rol, create_at) values(?, ?, ?, ?, ?)', [nombre, email, password, rol, create_at], function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }
    delete_user(user_id = 0) {
        return new Promise((resolve, reject) => {
            this.connection.execute('delete from user where id=?', [user_id], function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }
    update_user({ id = 0, nombre = '', email = '', update_at = '' }) {
        return new Promise((resolve, reject) => {
            this.connection.execute('update user set nombre = ?, email = ?, update_at = ? where id=?', [nombre, email, update_at, id], function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }
    update_password({ id = 0, password = 0, nPassword = 0, rol = '' }) {
        this.connection.execute('update user set password = ? where password = ? and rol = "admin" and id = ?', [nPassword, password, rol, id], function (err, res) {
            if (err) reject(err);
            resolve(res);
        });
    }
}

module.exports = UserRepository;