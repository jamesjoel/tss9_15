var express = require("express");
var routes = express.Router();

//localhost:3000/
routes.get("/", (req, res) => {
    res.render("index");
})



module.exports = routes;