const DataVerification = require("./DataVerification")
class DataErrorVerification {
    constructor(post_data) {
        this.data_controller = new DataVerification(post_data)
    }

    async verify_request() {
        if (await this.verify_nombre() !== true ||
            await this.verify_email() !== true ||
            this.verify_password() !== true) {
            return {
                err_nombre: await this.verify_nombre(),
                err_email: await this.verify_email(),
                err_password: this.verify_password()
            }
        } else {
            return true
        }
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

module.exports = DataErrorVerification;