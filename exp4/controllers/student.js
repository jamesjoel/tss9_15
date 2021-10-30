var express = require("express");
var routes = express.Router();
var Student = require("../models/Student");

routes.get("/", (req, res)=>{
    Student.select((err, result)=>{
        res.render("student", { result : result });
    });

})

routes.post("/", (req, res)=>{
    // console.log(req.body);
    Student.save(req.body, (err)=>{
        res.redirect("/student");
    });
})


module.exports =  routes;