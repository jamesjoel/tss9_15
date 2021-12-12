var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
var User = require("../models/User");
var jwt = require("jsonwebtoken");
var mongodb = require("mongodb");

routes.get("/", (req, res)=>{
    // console.log(req.user);
    var id = req.user._id;
    User.find({_id : mongodb.ObjectId(id)}, (err, result)=>{
        res.send(result);
    })
})

module.exports = routes;