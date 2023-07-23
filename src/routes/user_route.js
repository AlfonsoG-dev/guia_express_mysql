//dependencias
const express = require('express')
const UserController = require("../service/data_query")
const User = require('../model/user_model')
const user_route = express.Router()


//instancias 
const query = new UserController()

user_route.get("/", async function (req, res) {
    try {
        const data_res = await query.read_all()
        if (data_res) {

            res.status(201).json(data_res)
        } else {
            res.status(400).send("error no hay datos ")
        }
    } catch (error) {
        res.end()
        throw new Error(error)
    }
})

user_route.get("/:id", async function (req, res) {
    try {
        const user_id = parseInt(req.params.id)
        const data_res = await query.get_user_id(user_id)
        if (data_res) {
            res.status(201).json(data_res)
        } else {
            res.status(400).send("error no encontrado")
        }
    } catch (error) {
        res.end()
        throw new Error(error)
    }
})

user_route.get("/get-name/:name", async function (req, res) {
    try {
        const user_name = parseInt(req.params.name)
        const data_res = await query.get_name(user_name)
        if (data_res) {
            res.status(201).json(data_res)
        } else {
            res.status(400).send("error no encontrado")
        }

    } catch (err) {
        res.end()
        throw new Error(err)
    }
})

user_route.post("/post-user", async function (req, res) {
    try {
        const data_user = new User(req.body.nombre, req.body.email, req.body.password, req.body.rol)
        const consulta = await query.get_name(data_user.get_name)
        if (consulta) {
            const data_post = await query.post_user(data_user)
            res.status(201).json(data_post)
        } else {
            res.status(400).send(`el usuario con nombre ${data_user.get_name} ya existe`)
        }
    } catch (error) {
        throw new Error(error)
    }
})

user_route.delete("/delete-user/:id", async function (req, res) {
    try {
        const user_id = req.params.id
        const data_delete = await query.delete_user(user_id)
        res.status(201).json(data_delete)

    } catch (err) {
        res.end()
        throw new Error(err)
    }
})

module.exports = user_route
