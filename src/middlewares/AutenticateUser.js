const UserRouterController = require("../controllers/user_route_controller")
class AuthMiddleware{
    constructor(){
        this.controller = new UserRouterController();
    }
}
module.exports = AuthMiddleware;
