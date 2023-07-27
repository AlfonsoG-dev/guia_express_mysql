//dependencias
const express = require('express')
const UserController = require("../service/data_query")
const DataVerification = require("../middlewares/DataVerification")
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
            res.status(400).send("error no se encuentran datos ")
        }
    } catch (error) {
        res.end()
        throw new Error(error)
    }
})

user_route.get("/:id", async function (req, res) {
    try {
        const user_id = parseInt(req.params.id)
        const data_res = await query.read_by_id(user_id)
        if (data_res.length > 0) {
            res.status(201).json(data_res)
        } else {
            res.status(400).send(`error el usuario con id_: ${user_id} no se encuentra registrado`)
        }
    } catch (error) {
        res.end()
        throw new Error(error)
    }
})

user_route.get("/get-name/:name", async function (req, res) {
    try {
        const user_name = req.params.name
        const data_res = await query.read_by_name(user_name)
        if (data_res.length > 0) {
            res.status(201).json(data_res)
        } else {
            res.status(400).send(`error el usuario con el nombre_: ${user_name} no se encuentra registrado`)
        }

    } catch (err) {
        res.end()
        throw new Error(err)
    }
})

user_route.post("/post-user", async function (req, res) {
    try {
        const data_user = new User(req.body.nombre, req.body.email, req.body.password, req.body.rol)
        const verify_Data = new DataVerification(data_user)
        res.status(200).json(await verify_Data.verify_password())
        /*         if (consulta.length == 0) {
                    const data_post = await query.insert_user(data_user)
                    res.status(201).json(data_post)
                } else {
                    res.status(400).send(`el usuario con nombre ${data_user.get_name} ya existe`)
                } */
    }
    catch (error) {
        throw new Error(error)
    }
})

user_route.delete("/delete-user/:id", async function (req, res) {
    try {
        const user_id = req.params.id
        const consulta = await query.read_by_id(user_id)
        if (consulta.length > 0) {
            const data_delete = await query.delete_user(user_id)
            res.status(201).json(data_delete)
        } else {
            res.status(400).send(`error el usuario con id_: ${user_id} no esta registrado`)
        }

    } catch (err) {
        res.end()
        throw new Error(err)
    }
})

module.exports = user_route
