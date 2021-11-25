var express = require("express");
var routes = express.Router();
var User = require("../models/User");
var sha1 = require("sha1");

routes.post("/", (req, res)=>{
    var u = req.body.username;
    var p = sha1(req.body.password);
    User.find({ email : u }, (err, result)=>{
        if(result.length >= 1)
        {
            if(result[0].password == p)
            {

                res.status(200).send({ success : true });
            }
            else{

                res.status(401).send({ success : false, type : 2 });
            }
        }
        else{
            res.status(401).send({ success : false, type : 1 });
        }
    })
})



module.exports = routes;