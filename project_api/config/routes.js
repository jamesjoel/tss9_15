var express = require("express");
var routes = express.Router();


routes.use("/api/product", require("../controllers/ProductController"));
routes.use("/api/user", require("../controllers/UserController"));
routes.use("/api/auth", require("../controllers/AuthController"));

module.exports = routes;