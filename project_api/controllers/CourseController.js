var express = require("express");
var routes = express.Router();
var Course = require("../models/Course");

routes.get("/", (req, res)=>{
    Course.find({}, (err, result)=>{
        res.send(result);
    })
})

routes.post("/", (req, res)=>{
    Course.insert(req.body, (err, result)=>{
        res.send(result);
    })
})

module.exports = routes;