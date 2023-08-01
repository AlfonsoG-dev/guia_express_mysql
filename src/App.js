//dependencias 
const express = require("express")
const bytes = require("bytes")
const cors = require("cors")
const helmet = require("helmet")
const body_parser = require("body-parser")
const cookie_parser = require("cookie-parser")
const dotenv = require("dotenv")
dotenv.config()

//instancias
const app = express()
const port = process.env.NODE_PORT
const user_route = require("./routes/user_route")
const customSymbol = Symbol()

//middleware
app.use(helmet())
app.use(cors())
app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json({ inflate: true, limit: bytes(10000) }))
app.use(cookie_parser())
app.use(function (req, res, next) {
    req[customSymbol] = req.ip
    res[customSymbol] = 'bienvenido ' + req.hostname
    next()
})


//routes
app.use('/user', user_route)
app.get("/", async function (req, res) {
    const req_data = req[customSymbol]
    const res_data = res[customSymbol]
    res.send(`req: ${req_data} / res: ${res_data}`)
})
app.use(function (req, res) {
    res.status(404).end()
})
app.listen(port, function () {
    console.log(`express server in port: ${port}`)
})
