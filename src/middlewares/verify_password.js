
class VerifyPassword {
    constructor(nPassword = '') {
        this.password = nPassword
        this.letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        this.simbols = ['!', '@', '#', '$', '%', '&', '()', '+', '*', '{}', '[]', ';', ':', '-', '_']
    }

    get get_password() {
        if (this.contains_letras() === true &&
            this.contains_simbol() === true &&
            this.contains_uper_leters() === true &&
            this.contains_lower_leters() === true &&
            this.password.length > 8) {

            return this.password
        }

    }
    contains_letras() {
        const pass = this.password

        for (let i in this.letras) {
            return pass.includes(this.letras[i])
        }

    }
    contains_simbol() {
        const pass = this.password

        for (let i in this.simbols) {
            return pass.includes(this.simbols[i])
        }

    }
    contains_uper_leters() {
        const pass = this.password
        for (let i in this.letras) {
            const upper = this.letras[i].toUpperCase()
            return pass.includes(upper)
        }
    }
    contains_lower_leters() {
        const pass = this.password
        for (let i in this.letras) {
            const lower = this.letras[i].toLowerCase()
            return pass.includes(lower)
        }
    }
}

module.exports = VerifyPassword;