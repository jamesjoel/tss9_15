var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
var User = require("../models/User");

routes.post("/", (req, res)=>{
    console.log(req.body);
})


routes.post("/signup", (req, res)=>{
    // console.log(req.body);
    delete req.body.re_password;

    req.body.password = sha1(req.body.password);

    User.insert(req.body, ()=>{
        res.send({ success : true });
    })
})

module.exports=routes;