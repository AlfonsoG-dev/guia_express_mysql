//dependencias
const express = require('express')
const UserRouterController = require("../controllers/user_route_controller")
const user_route = express.Router()


//instancias 
const routeController = new UserRouterController()
user_route.get("/", routeController.list_users.bind(routeController))

user_route.get("/:id", routeController.get_user_id.bind(routeController))

user_route.get("/get-name/:name", routeController.get_user_name.bind(routeController))

user_route.post("/post-user", routeController.inser_user.bind(routeController))

user_route.delete("/delete-user/:id", routeController.truncate_user.bind(routeController))

module.exports = user_route
