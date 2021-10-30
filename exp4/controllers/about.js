var express = require("express");
var routes = express.Router();

//localhost:3000/about
routes.get("/", (req, res)=>{
    res.render("about");
})
//localhost:3000/about/info
routes.get("/info", (req, res)=>{
    
    res.render("about");
})

module.exports =  routes;