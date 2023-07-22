//dependencias 
const express = require("express")
const bytes = require("bytes")
const cors = require("cors")
const body_parser = require("body-parser")
const dotenv = require("dotenv")
dotenv.config()

//instancias
const app = express()
const port = process.env.NODE_PORT
const user_route = require("./routes/user_route")
const customSymbol = Symbol()

//middleware
app.use(cors())
app.all(body_parser.urlencoded({ extended: true }))
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
app.listen(port, function () {
    console.log(`express server in port: ${port}`)
})
