var express = require("express");
var routes = express.Router();
var rand = require("randomstring");
var path  = require("path");
var ImageMod = require("../models/Image");

routes.get("/", (req, res)=>{
    var data= [];
    ImageMod.findAndSort({}, (err, result)=>{
        // res.send(result);
        result.forEach(function(x){
            x.image =  "http://localhost:3000/images/"+x.image;
            data.push(x);
        })
        res.send(data);
    })
})


routes.post("/", (req, res)=>{
    
    
    var formdata = JSON.parse(req.body.data);
    // console.log(formdata);return;
    
    var image = req.files.image;
    var arr = image.name.split(".");
    var ext = arr[arr.length - 1];
    var imagename = rand.generate(20)+"."+ext;
    // __dirname
    var imagepath = path.resolve()+"/assets/images/"+imagename;
    formdata.image = imagename;
    ImageMod.insert(formdata, ()=>{
        image.mv(imagepath, (err)=>{
            if(err){
                console.log(err);
                return;
            }
            formdata.image = "http://localhost:3000/images/"+formdata.image;
            res.send(formdata);
        });

    })

})
module.exports = routes;