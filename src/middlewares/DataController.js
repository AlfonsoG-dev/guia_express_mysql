const UserController = require("../service/data_query")
const VerifiPassword = require("./verify_password")
class DataController {
    constructor(data_post = {}) {
        this.user_data = data_post
        this.query = new UserController()

    }

    async test_nombre() {
        const nNombre = this.user_data.nombre
        if (nNombre.length > 3) {
            const data = await this.query.read_by_name(nNombre)
            return data
        } else {

            return undefined
        }
    }

    async test_email() {
        const nEmail = this.user_data.email
        if (nEmail.length > 3) {
            for (let i in nEmail) {
                if (nEmail[i] === '@') {
                    const data = await this.query.read_by_email(nEmail)
                    return data
                }
            }
        } else {
            return undefined
        }
    }

    test_password() {
        const nPassword = this.user_data.password
        const n_pass = new VerifiPassword(nPassword).get_password
        if (n_pass !== undefined) {
            return n_pass
        } else {
            return undefined
        }
    }

    test_rol() {
        const nRol = this.user_data.rol
        switch (nRol) {
            case 'admin':
                return 'solo admin puede crear un usuario admin'
            case 'test':
                return nRol
            case 'operador':
                return 'solo admin puede crear un usuario test'
            case 'registro':
                return 'solo admin puede crear un usuario registro'
            default:
                return undefined
        }

    }

}

module.exports = DataController