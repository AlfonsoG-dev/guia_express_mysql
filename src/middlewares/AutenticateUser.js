const UserRepository = require("../Repository/UserRepository")
class AuthMiddleware{
    constructor(){
        this.repository = new UserRepository()
    }
    async  Login(req, res) {
        try {
            const data_req = req.body
            const data_res = await this.repository.autenticate_user(data_req)
            if (data_res.length > 0) {
                /*                req.session.regenerate(function (err) {
                    if (err) next(err)
                    req.session.user = data_res[0]
                    //console.log(req.session.user)
                    req.session.save(function (err) {
                        if (err) return next(err)
                        res.status(200).json({ msg: data_res[0] })
                    })
                })
                 * */
                res.send("autenticado")

            } else {
                res.status(400).json({ error: 'usuario incorrecto' })
            }
        } catch (error) {
            throw new Error(error)
        }

    }
}
module.exports = AuthMiddleware;
