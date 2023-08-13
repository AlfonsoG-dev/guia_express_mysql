
//dependencias 
const express = require("express");
const bytes = require("bytes");
const cors = require("cors");
const helmet = require("helmet");
const cookie_parser = require("cookie-parser");
const UserRoutes = require("./routes/user_route");
const dotenv = require("dotenv");
dotenv.config();
class ApiServer {
    static PORT;
    constructor() {
        ApiServer.PORT = process.env.NODE_PORT;
        this.user_route = new UserRoutes();
        this.app = express();
    }
    UseLibrery() {
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json({ inflate: true, limit: bytes("10k") }));
        this.app.use(cookie_parser());
        this.app.use(helmet());
    }
    UseErrorMiddleware() {
        //manejo de errores 404 o not found
        this.app.use(function (req, res) {
            console.log(req.url);
            res.status(404).addListener('error', () => {
                throw new Error("Página no disponible o no encontrada");
            });
        });

    }

    UseRoutes() {
        this.app.use("/user", this.user_route.get_routes());
    }

    init() {
        this.UseLibrery();
        this.app.get("/", (req, res) => {
            res.send(req.ip);
        });
        this.UseRoutes();
        this.UseErrorMiddleware();
        this.app.listen(ApiServer.PORT, () => {
            console.log(`express server in port ${ApiServer.PORT}`);
        });
    }
}
module.exports = ApiServer;
