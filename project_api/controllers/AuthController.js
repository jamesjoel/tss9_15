var express = require("express");
var routes = express.Router();
var User = require("../models/User");
var sha1 = require("sha1");
var jwt = require("jsonwebtoken");

routes.post("/", (req, res)=>{
    var u = req.body.username;
    var p = sha1(req.body.password);
    User.find({ email : u }, (err, result)=>{
        if(result.length >= 1)
        {
            if(result[0].password == p)
            {

                // res.status(200).send({ success : true });
                var obj = { _id : result[0]._id, name : result[0].name, email : result[0].email };
                
                var token = jwt.sign(obj, "The stepping stone");
                res.status(200).send({ success : true, token : token });
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