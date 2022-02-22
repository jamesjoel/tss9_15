var express = require("express");
var routes = express.Router();

var City = require("../models/City");
var mongodb = require("mongodb");

routes.get("/", (req, res)=>{
 
    City.find({}, (err, result)=>{
        res.send(result);
    })
})
routes.get("/:pageno/:totalrec", (req, res)=>{
    var pageno = parseInt(req.params.pageno); // 5
    var totalrec = parseInt(req.params.totalrec);
    var skipno = (pageno-1)*totalrec;
    City.findskip({}, totalrec, skipno,(err, result)=>{
        res.send(result);
    })
})



routes.get("/total", (req, res)=>{
    City.count((err, result)=>{
        res.send({ totalrecord : result });
    })
})

module.exports = routes;