var express = require("express");
var routes = express.Router();
var Product = require("../models/Product");

routes.get("/", (req, res)=>{
    Product.find({}, (err, result)=>{
        res.send(result);
    })
})

module.exports = routes;