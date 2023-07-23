const express = require('express')
const query = require("../service/data_query")
const User = require('../model/user_model')
const user_route = express.Router()

const read_all_symbol = Symbol("db_data")
const get_id_symbol = Symbol("db_get_id")
const get_name_symbol = Symbol("db_get_name")
const post_user_symbol = Symbol("post_user")
const delete_user_symbol = Symbol("delete_user")

async function data_symbols(req, res, next) {

    const id = parseInt(req.params.id)
    const my_user = new User(req.body.nombre, req.body.email, req.body.password, req.body.rol, req.body.create_at)

    res[read_all_symbol] = await query.read_all()
    res[get_id_symbol] = await query.get_user_id(id)
    res[get_name_symbol] = await query.get_name(id)
    res[post_user_symbol] = await query.post_user(my_user)
    res[delete_user_symbol] = await query.delete_user(id)
    next()
}

user_route.get("/", data_symbols, function (req, res) {
    try {
        const data_res = res[read_all_symbol]
        res.status(201).json(data_res)
    } catch (error) {
        res.end()
        throw new Error(error)
    }
})

user_route.get("/:id", data_symbols, async function (req, res) {
    try {
        const data_res = res[get_id_symbol]
        res.json(data_res)

    } catch (error) {
        res.end()
        throw new Error(error)
    }
})

user_route.get("/get-name/:id", data_symbols, async function (req, res) {
    try {
        const data_res = res[get_name_symbol]
        res.status(201).json(data_res)

    } catch (err) {
        res.end()
        throw new Error(err)
    }
})

user_route.post("/post-user", data_symbols, async function (req, res) {
    try {
        const data_res = res[post_user_symbol]
        res.status(201).json(data_res)

    } catch (error) {
        throw new Error(error)
    }
})

user_route.delete("/delete-user/:id", data_symbols, async function (req, res) {
    try {
        const data_delete = res[delete_user_symbol]
        res.status(201).json(data_delete)

    } catch (err) {
        res.end()
        throw new Error(err)
    }
})

module.exports = user_route
