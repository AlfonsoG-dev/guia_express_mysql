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
}

module.exports = DataVerification;