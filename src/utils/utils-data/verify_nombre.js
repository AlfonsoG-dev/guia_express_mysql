class VerifyNombre {
    constructor(nNombre = '') {
        this.nombre = nNombre;
    }

    get get_v_nombre() {
        if ((this.is_admin() === undefined && this.is_test() === undefined) ||
            this.nombre > 3) {
            return this.nombre
        }
    }
    clean_simbols() {
        const nombre = this.nombre
        return nombre.replaceAll(/[^a-zA-Z]/g, '')
    }
    is_admin() {
        const nombre = this.clean_simbols()
        if (nombre === 'admin') {
            return true
        }
    }
    is_test() {
        const nombre = this.clean_simbols()
        if (nombre === 'test') {
            return true
        }
    }
}
module.exports = VerifyNombre;