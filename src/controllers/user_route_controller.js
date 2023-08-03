const DataQuery = require("../service/data_query")
const DataErrorVerification = require("../utils/DataErrorVerification")
const User = require("../model/user_model")


class UserRouterController {
    constructor() {
        this.query = new DataQuery()
    }
    async verificar_integridad(req, res, next) {
        try {
            const verificar = Promise.allSettled([this.query.verificar_database(), this.query.verificar_table_user(), this.query.verificar_table_cuenta()])
            console.log(await verificar)
            next()

        } catch (error) {
            throw new Error(error)
        }
    }
    async list_users(req, res) {
        try {
            const data_res = await this.query.read_all()
            if (data_res.length > 0) {
                res.status(200).json(data_res)
            } else {
                res.status(400).json({ error: 'datos no disponibles' })
            }

        } catch (error) {
            throw new Error(error)
        }
    }
    async get_user_id(req, res) {
        try {
            const user_id = parseInt(req.params.id)
            const data_res = await this.query.read_by_id(user_id)
            if (data_res.length > 0) {
                res.status(200).json({ exito: data_res[0] })
            } else {

                res.status(400).json({ error: `el usuario con id_: ${req.params.id} no se encuentra` })
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    async get_user_name(req, res) {
        try {
            const user_name = req.params.name
            const data_res = await this.query.read_by_name(user_name)
            if (data_res.length > 0) {
                res.status(200).json({ exito: data_res[0] })
            } else {
                res.status(400).json({ error: `error el usuario con el nombre_: ${user_name} no se encuentra` })
            }

        } catch (error) {
            throw new Error(error)
        }
    }
    async inser_user(req, res) {
        try {
            const body = req.body
            const data_user = new User(body.nombre, body.email, body.password, body.rol)
            const verify_data = new DataErrorVerification(data_user).verify_request()
            if (await verify_data !== true || await verify_data === undefined) {
                res.status(400).json(await verify_data)
            } else if (await verify_data === true) {
                await this.query.insert_user(data_user)
                res.status(201).json({ exito: data_user.get_name })
            }

        } catch (error) {
            throw new Error(error)
        }
    }

    async truncate_user(req, res) {
        try {
            const user_id = parseInt(req.params.id)
            const buscado = await this.query.read_by_id(user_id)
            if (buscado.length > 0) {
                const data_delete = await this.query.delete_user(user_id)
                res.status(200).json(data_delete)
            } else {
                res.status(400).json({ error: `error el usuario con id_: ${user_id} no se encuentra` })
            }

        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = UserRouterController