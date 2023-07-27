const UserController = require("../service/data_query")
const VerifiPassword = require("./verifi_password")
class VerifiUserData {
    constructor(data_post = {}) {
        this.user_data = data_post
        this.query = new UserController()

    }

    test_post() {
        const nombre = this.user_data.nombre
        const email = this.user_data.email
        const password = this.user_data.password
        const rol = this.user_data.rol

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
        return n_pass
    }

}

module.exports = VerifiUserData