const DataController = require("./DataController")
class DataVerification {
    constructor(post_data) {
        this.data_controller = new DataController(post_data)
    }

    async verify_nombre() {
        const data_name = await this.data_controller.test_nombre()
        if (data_name === undefined) {
            return 'el nombre no cumple con las condiciones'
        }
        if (data_name.length > 0) {
            return 'el nombre de usuario ya se encuentra registrado'
        } else if (data_name.length === 0) {
            return true
        }
    }

    async verify_email() {
        const data_email = await this.data_controller.test_email()
        if (data_email === undefined) {
            return 'el email no cumple con los requisitos'
        }
        if (data_email.length > 0) {
            return `el usuario con email ${data_email[0].email} ya tiene una cuenta registrada`
        } else if (data_email.length === 0) {
            return true
        }
    }

    verify_password() {
        const data_password = this.data_controller.test_password()
        if (data_password === undefined) {
            return 'la password no cumple con las condiciones'
        } else {

            return true
        }
    }

}

module.exports = DataVerification;