class VerifyNombre {
    constructor(nNombre = '') {
        this.nombre = nNombre;
    }

    get get_v_nombre() {
        if (this.is_admin() === undefined || this.is_test() === undefined ||
            this.nombre.length > 3) {
            return this.nombre
        }
    }
    clean_simbols() {
        const nombre = this.nombre
        return nombre.replaceAll(/[^a-zA-Z]/g, '')
    }
    is_admin() {
        const nombre = this.clean_simbols()
        const nombre_regx = nombre.match(/admin/)
        if (nombre === 'admin' || nombre_regx !== null) {
            return true
        }
    }
    is_test() {
        const nombre = this.clean_simbols()
        const nombre_regx = nombre.match(/test/)
        if (nombre === 'test' || nombre_regx !== null) {
            return true
        }
    }
}
module.exports = VerifyNombre;