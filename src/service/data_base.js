const dotenv = require("dotenv")
dotenv.config()

const connection = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    waitForConnections: true,
    connectionLimit: 3,
    maxIdle: 3,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
}
module.exports = connection