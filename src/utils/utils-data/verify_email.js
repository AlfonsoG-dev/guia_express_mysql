
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
        const data = this.email
        for (let i in data) {
            if (data[i] === '@') {
                return true
            }
        }
    }
    is_admin() {
        const data_1 = this.email.split('@')
        const data_2 = data_1[1].split('.')
        const data_2_1 = data_1[1].split('-')
        if (data_2.includes('admin') ||
            data_2_1.includes('admin')) {
            return true
        }
    }

    is_test() {
        const data_1 = this.email.split('@')
        const data_2 = data_1[1].split('.')
        const data_2_1 = data_1[1].split('-')
        if (data_2.includes('test') ||
            data_2_1.includes('test')) {
            return true
        }
    }
}
module.exports = VerifyEmail;