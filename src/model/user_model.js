class User {
    constructor(nombre = '', email = '', password = '', rol = '') {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.rol = rol;
        this.create_at = new Date();
    }

    //getter
    get get_name() {
        return this.nombre
    }
    get get_email() {
        return this.email
    }
    get get_password() {
        //TODO: hash password 
        return this.password
    }
    get get_rol() {
        return this.rol
    }
    get get_create_at() {
        return this.create_at
    }

    //setter

    set set_name(nNombre = '') {
        this.nombre = nNombre
    }
    set set_email(nEmail = '') {
        this.email = nEmail
    }
    set set_password(nPassword = '') {
        //TODO: apply hasher to password
        this.password = nPassword
    }
    set set_rol(nRol = '') {
        this.rol = nRol
    }
    set set_create_at(nCreate_at = Date) {
        this.create_at = nCreate_at
    }
}

module.exports = User
