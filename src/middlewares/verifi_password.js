
class VerifiPassword {
    constructor(nPassword = '') {
        this.password = nPassword
        this.vocals = ['a', 'e', 'i', 'o', 'u']
        this.simbols = ['!', '@', '#', '$', '%', '&', '()', '+', '*', '{}', '[]', ';', ':', '-', '_']
    }

    get get_password() {
        if (this.contains_vocal() === true &&
            this.contains_simbol() === true &&
            this.contains_uper_leters() === true &&
            this.contains_lower_leters() === true) {
            return this.password
        }

    }
    contains_vocal() {
        const pass = this.password

        for (let i in this.vocals) {
            if (pass.includes(this.vocals[i])) {
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
    contains_uper_leters() {
        const pass = this.password
        for (let i in this.vocals) {
            const upper = this.vocals[i].toUpperCase()
            if (pass.includes(upper)) {
                return true
            }
        }
    }
    contains_lower_leters() {
        const pass = this.password
        for (let i in this.vocals) {
            const lower = this.vocals[i].toLowerCase()
            if (pass.includes(lower)) {
                return true
            }
        }
    }
}

module.exports = VerifiPassword;