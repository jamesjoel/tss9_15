var database = require("../config/database");

module.exports.select = (cb)=>{
    database((err, con)=>{
        var db = con.db("tss9");
        db.collection("student").find().toArray(cb)
    });
}

module.exports.update = () => {

}

module.exports.save = (obj, cb) => {
    database((err, con)=>{
        var db = con.db("tss9");
        db.collection("student").insertOne(obj, cb);
    })
}

module.exports.delete = () => {

}

/*
var x = req

x.insert();


*/