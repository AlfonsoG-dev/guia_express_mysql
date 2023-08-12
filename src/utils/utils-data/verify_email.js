
class VerifyEmail {
    constructor(nEmail = '') {
        this.email = nEmail
    }
    get get_email() {
        if (this.email.length > 5 &&
            this.is_email_format() === true &&
            this.is_admin() === undefined &&
            this.is_test() === undefined) {
            return this.email
        }
    }
    is_email_format() {
        const data = this.email.match(/@/)
        if (data !== null) {
            return true
        }
    }

    clean_simbols() {
        const email = this.email
        return email.replaceAll(/[^a-zA-Z]/g, '')
    }
    is_admin() {
        //alfonson_admi
        const email_regx = this.clean_simbols().match(/admin/)
        if (email_regx !== null) {
            return true
        }
    }

    is_test() {
        const email_regx = this.clean_simbols().match(/test/)
        if (email_regx !== null) {
            return true
        }
    }
}
module.exports = VerifyEmail;