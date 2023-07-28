
class VerifyPassword {
    constructor(nPassword = '') {
        this.password = nPassword
        this.letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        this.simbols = ['!', '@', '#', '$', '%', '&', '(', ')', '+', '*', '{', '}', '[', ']', ';', ':', '-', '_', '~', '¿', '?', '¡', '<', '>', '°', '|', '^']
    }

    get get_password() {
        if (this.contains_letras() === true &&
            this.contains_simbol() === true &&
            this.contains_uper_leters() === true &&
            this.contains_lower_leters() === true &&
            this.contains_numbers() === true &&
            this.contains_repeated() < 4 &&
            this.password.length > 4) {

            return this.password
        }

    }
    clean_simbols() {
        const pass = this.password
        return pass.replaceAll(/[^a-zA-Z]/g, '')
    }
    contains_repeated() {
        const pass = this.clean_simbols().toLowerCase()
        let primera = pass[0]
        let cont = 0;
        for (let i in pass) {

            if (pass[i].includes(primera)) {
                cont += 1
                primera = pass[i]
            }
        }
        return cont
    }
    contains_letras() {
        const pass = this.password

        for (let i in this.letras) {
            if (pass.includes(this.letras[i])) {
                return true
            } else if (pass.toLowerCase().includes(this.letras[i])) {
                return true
            }
        }

    }
    contains_simbol() {
        const pass = this.password

        for (let i in this.simbols) {
            if (pass.includes(this.simbols[i])) {
                return true
            }
        }

    }
    contains_numbers() {
        const pass = this.password
        for (let i in pass) {
            const parser = pass[i]
            if (parseInt(parser) - parseInt(parser) === 0) {
                return true
            }
        }
    }
    contains_uper_leters() {
        const pass = this.password
        for (let i in this.letras) {
            const upper = this.letras[i].toUpperCase()
            if (pass.includes(upper)) {
                return true
            }
        }
    }
    contains_lower_leters() {
        const pass = this.password
        for (let i in this.letras) {
            const lower = this.letras[i].toLowerCase()
            if (pass.includes(lower)) {
                return true
            }
        }
    }
}

module.exports = VerifyPassword;