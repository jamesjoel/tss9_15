var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
/* test */
module.exports = (cb)=>{
    MongoClient.connect("mongodb://localhost:27017", cb);
}
/*
var a = requi

a((err, con)=>{

});


*/