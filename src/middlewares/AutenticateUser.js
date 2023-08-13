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
                res.cookie("miApiCookie", data_res[0])
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
    verificar_cookie(req, res, next){
        try{
            const data_req = req.cookies
            console.log(data_req['miApiCookie'])
            if(data_req['miApiCookie'] !== undefined){
                next()
            }else{
                res.status(400).json({error: "usuario no autenticado"})
            }
        }catch(error){
            throw new Error(`${error} in route ${req.url}`)
        }
    }
}
module.exports = AuthMiddleware;
