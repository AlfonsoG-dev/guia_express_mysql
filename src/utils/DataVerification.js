const UserRepository = require("../Repository/UserRepository");
const VerifyPassword = require("./utils-data/verify_password");
const VerifyEmail = require("./utils-data/verify_email");
const VerifyNombre = require("./utils-data/verify_nombre");
//todo: cambiar las verificaciones del string por expresiones regulares o algo parecido
class DataVerification {
    constructor(data_post = {}) {
        this.user_data = data_post;
        this.query = new UserRepository();

    }

    async test_nombre() {
        const nNombre = this.user_data.nombre;
        const v_nombre = new VerifyNombre(nNombre).get_v_nombre;
        if (v_nombre !== undefined) {
            const data = await this.query.read_by_name(nNombre);
            return data;
        } else {

            return undefined;
        }
    }

    async test_email() {
        const nEmail = this.user_data.email;
        const v_email = new VerifyEmail(nEmail).get_email;
        if (v_email !== undefined) {
            const data = await this.query.read_by_email(v_email);
            return data;
        } else {
            return undefined;
        }
    }

    test_password() {
        const nPassword = this.user_data.password;
        const n_pass = new VerifyPassword(nPassword).get_password;
        if (n_pass !== undefined) {
            return n_pass;
        } else {
            return undefined;
        }
    }

    test_rol() {
        const nRol = this.user_data.rol;
        switch (nRol) {
            case 'admin':
                return 'solo admin puede crear un usuario admin';
            case 'test':
                return nRol;
            case 'operador':
                return 'solo admin puede crear un usuario test';
            case 'registro':
                return 'solo admin puede crear un usuario registro';
            default:
                return undefined;
        }

    }

}

module.exports = DataVerification;
