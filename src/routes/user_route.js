//dependencias
const express = require('express');
const UserRouterController = require("../controllers/user_route_controller");
const user_route = express.Router();


//instancias 
class UserRoutes {
    constructor() {
        this.routeController = new UserRouterController();
    }
    apply_middleware() {

        user_route.use(this.routeController.verificar_integridad_user.bind(this.routeController));

    }
    get_routes() {
        this.apply_middleware();
        user_route.get("/", this.routeController.list_users.bind(this.routeController));

        user_route.get("/:id", this.routeController.get_user_id.bind(this.routeController));

        user_route.get("/get-name/:name", this.routeController.get_user_name.bind(this.routeController));

        user_route.post("/post-user", this.routeController.insert_user.bind(this.routeController));

        user_route.delete("/delete-user/:id", this.routeController.truncate_user.bind(this.routeController));

        return user_route;
    }

}

module.exports = UserRoutes;
