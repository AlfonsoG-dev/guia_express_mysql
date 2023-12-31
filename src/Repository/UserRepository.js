const DBConnection = require("../service/data_base");

const connection = new DBConnection().create_normal_connecction();
class UserRepository {

    verificar_database(db_name = '') {
        console.log("verificando database")
        return new Promise((resolve, reject) => {
            connection.execute(`create database if not exists ${db_name}`, function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }

    select_database(db_name = '') {
        console.log("Usando database")
        return new Promise((resolve, reject) => {
            connection.query(`use ${db_name}`, function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }

    verificar_table_user() {
        console.log("verificando tabla `consulta`.users")
        return new Promise((resolve, reject) => {
            connection.execute('create table if not exists users(id int not null unique primary key auto_increment, nombre varchar(100) not null unique, email varchar(100) not null unique, password varchar(100) not null, rol varchar(50), crate_at datetime, update_at datetime)', function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }

    read_all_users() {
        return new Promise((resolve, reject) => {
            connection.execute('select nombre, email from `consulta`.users', function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }
    autenticate_user({nombre = '', email = '', password = ''}){
        return new Promise((resolve, reject)=>{
            connection.execute('select nombre, email, rol from `conssulta`.users where nombre=? and email=? and password=?', [nombre, email, password], function(err,res){
                if(err)reject(err)
                resolve(res)
            })
        })
    }
    read_by_id(user_id = 0) {
        return new Promise((resolve, reject) => {
            connection.execute('select email from `consulta`.users where id=?', [user_id], function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }

    read_by_name(user_name) {
        return new Promise((resolve, reject) => {
            connection.execute('select email from `consulta`.users where nombre =?', [user_name], function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }
    read_by_email(user_email) {
        return new Promise((resolve, reject) => {
            connection.execute('select nombre, email from `consulta`.users where email =? order by email', [user_email], function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }
    insert_user({ nombre = '', email = '', password = '', rol = '', create_at = Date }) {
        return new Promise((resolve, reject) => {
            connection.execute('inert into `consulta`.users (nombre, email, password, rol, create_at) values(?, ?, ?, ?, ?)', [nombre, email, password, rol, create_at], function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }
    delete_user(user_id = 0) {
        return new Promise((resolve, reject) => {
            connection.execute('delete from `consulta`.users where id=?', [user_id], function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }
    update_user({ id = 0, nombre = '', email = '', update_at = '' }) {
        return new Promise((resolve, reject) => {
            connection.execute('update `consulta`.users set nombre = ?, email = ?, update_at = ? where id=?', [nombre, email, update_at, id], function (err, res) {
                if (err) reject(err);
                resolve(res);
            });
        });
    }
    update_password({ id = 0, password = 0, nPassword = 0, rol = '' }) {
        connection.execute('update `consulta`.users set password = ? where password = ? and rol = "admin" and id = ?', [nPassword, password, rol, id], function (err, res) {
            if (err) reject(err);
            resolve(res);
        });
    }
}

module.exports = UserRepository;
