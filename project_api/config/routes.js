var express = require("express");
var routes = express.Router();


routes.use("/api/product", require("../controllers/ProductController"));

module.exports = routes;