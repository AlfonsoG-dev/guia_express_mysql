const dotenv = require("dotenv");
const mysql = require("mysql2");
dotenv.config();


class DBConnection {
    constructor() {
        this.mysql = mysql;
    }
    create_normal_connecction() {
        return this.mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER || 'test_user',
            password: process.env.DB_PASSWORD,
        });

    }
}
module.exports = DBConnection;
