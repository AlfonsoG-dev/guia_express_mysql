const dotenv = require("dotenv")
dotenv.config()

const connection = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB
}
module.exports = connection