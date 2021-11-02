var mongodb = require("mongodb");
var mongodb = require("mongodb");
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var MongoClient = mongodb.MongoClient;
/* test */ var a = "rohit";
module.exports = (cb)=>{
    MongoClient.connect("mongodb://localhost:27017", cb);
    MongoClient.connect("mongodb://localhost:27017", cb);
}
/*
var a = requi

a((err, con)=>{

});


*/