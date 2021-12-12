var express = require("express");
var routes = express.Router();
var Student = require("../models/Student");
var mongodb = require("mongodb");
//localhost:3000/api/student

routes.get("/", (req, res)=>{
    Student.find({}, (err, result)=>{
        res.send(result);
    })
});
routes.get("/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    Student.find({_id : id}, (err, result)=>{
        res.send(result);
    })
});
routes.post("/", (req, res)=>{
    Student.insert(req.body, ()=>{
        res.send({ success : true});
    })
});
routes.put("/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    Student.update({_id : id }, req.body, ()=>{
        res.send({ success : true });
    })
});
routes.delete("/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    Student.delete({_id : id}, ()=>{
        res.send({ success : true });
    })
});

module.exports = routes;

