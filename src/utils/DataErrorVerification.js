const DataVerification = require("./DataVerification")
class DataErrorVerification {
    constructor(post_data) {
        this.data_controller = new DataVerification(post_data)
    }

<<<<<<< HEAD
    async test_nombre() {
        const nNombre = this.user_data.nombre
        const v_nombre = new VerifyNombre(nNombre).get_v_nombre
        if (v_nombre !== undefined) {
            const data = await this.query.read_by_name(nNombre)
            return data
=======
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
        if (data_name['count(email)'] > 0) {
            return 'el nombre de usuario ya se encuentra registrado'
        } else if (data_name['count(email)'] === 0) {
            return true
        }
    }

    async verify_email() {
        const data_email = await this.data_controller.test_email()
        if (data_email === undefined) {
            return 'el email no cumple con los requisitos'
        }
        if (data_email['count(email)'] > 0) {
            return `el usuario con email ${data_email[0].email} ya tiene una cuenta registrada`
        } else if (data_email['count(email)'] === 0) {
            return true
        }
    }

    verify_password() {
        const data_password = this.data_controller.test_password()
        if (data_password === undefined) {
            return 'la password no cumple con las condiciones'
>>>>>>> b86f316 (organizar los nombres de manera semántica)
        } else {

            return true
        }
    }

<<<<<<< HEAD
    async test_email() {
        const nEmail = this.user_data.email
        const v_email = new VerifyEmail(nEmail).get_email
        if (v_email !== undefined) {
            const data = await this.query.read_by_email(v_email)
            return data
        } else {
            return undefined
        }
    }

    test_password() {
        const nPassword = this.user_data.password
        const n_pass = new VerifyPassword(nPassword).get_password
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

=======
>>>>>>> b86f316 (organizar los nombres de manera semántica)
}

module.exports = DataErrorVerification;