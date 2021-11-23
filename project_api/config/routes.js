var express = require("express");
var routes = express.Router();


routes.use("/api/product", require("../controllers/ProductController"));
routes.use("/api/user", require("../controllers/UserController"));

module.exports = routes;