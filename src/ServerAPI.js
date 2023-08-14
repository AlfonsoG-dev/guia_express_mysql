
//dependencias 
const express = require("express");
const bytes = require("bytes");
const cors = require("cors");
const helmet = require("helmet");
const cookie_parser = require("cookie-parser");
const UserRoutes = require("./routes/user_route");
const AuthMiddleware = require("./middlewares/AutenticateUser")
const dotenv = require("dotenv");
dotenv.config();
class ApiServer {
    static PORT;
    constructor() {
        ApiServer.PORT = process.env.NODE_PORT;
        this.user_route = new UserRoutes();
        this.autenticate_user = new AuthMiddleware();
        this.app = express();
    }
    UseLibrery() {
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json({ inflate: true, limit: bytes("10k") }));
        this.app.use(cookie_parser());
        this.app.use(helmet());
    }
    UseMidleware(){
        this.app.use(this.autenticate_user.verificar_cookie.bind(this.autenticate_user))
    }
    UseErrorMiddleware() {
        //manejo de errores 404 o not found
        this.app.use(function (req, res) {
            //console.log(req.url);
            res.status(404).json({error: "pagina no encontrada"})
        });

    }

    UseRoutes() {
        this.app.get("/", (req, res) => {
            res.send(req.ip);
        });
        this.app.post("/", this.autenticate_user.Login.bind(this.autenticate_user))

        this.UseMidleware()
        this.app.use("/user", this.user_route.get_routes());
    }

    init() {
        this.UseLibrery();
        this.UseRoutes();
        this.UseErrorMiddleware();
        this.app.listen(ApiServer.PORT, () => {
            console.log(`express server in port ${ApiServer.PORT}`);
        });
    }
}
module.exports = ApiServer;
