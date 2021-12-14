var express = require("express");
var routes = express.Router();
var rand = require("randomstring");
var path  = require("path");

routes.post("/", (req, res)=>{
    // console.log(req.body.data);
    // console.log(req.files);
    var formdata = JSON.parse(req.body.data);
    var image = req.files.image;
    var arr = image.name.split(".");
    var ext = arr[arr.length - 1];
    var imagename = rand.generate(20)+"."+ext;
    // __dirname
    var imagepath = path.resolve()+"/assets/images/"+imagename;

    image.mv(imagepath, (err)=>{
        if(err){
            console.log(err);
            return;
        }
    });
})
module.exports = routes;