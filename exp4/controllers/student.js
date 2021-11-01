var express = require("express");
var routes = express.Router();
var Student = require("../models/Student");
var mongodb = require("mongodb");

routes.get("/", (req, res)=>{
    Student.select({}, (err, result)=>{
        res.render("student", { result : result });
    });

})

routes.post("/", (req, res)=>{
    // console.log(req.body);
    Student.save(req.body, (err)=>{
        res.redirect("/student");
    });
})

routes.get("/delete/:id", (req, res)=>{ // ObjectId("21sdfg54sdf2g1")
    // console.log(req.params.a);
    var id = mongodb.ObjectId(req.params.id);
    Student.delete({ _id : id }, ()=>{
        res.redirect("/student");
    })
})

routes.get("/edit/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    Student.select({ _id : id }, (err, result)=>{
        
        res.render("edit_student", { result : result[0] });
    })
})

routes.post("/edit/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    Student.update({ _id : id }, req.body, ()=>{
        res.redirect("/student/edit/"+req.params.id);
        // res.redirect("/student");
    })
})


module.exports =  routes;