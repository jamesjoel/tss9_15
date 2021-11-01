var database = require("../config/database");

module.exports.select = (where, cb)=>{
    database((err, con)=>{
        var db = con.db("tss9");
        db.collection("student").find(where).toArray(cb)
    });
}

module.exports.update = (where, obj, cb) => {
    database((err, con)=>{
        var db = con.db("tss9");
        db.collection("student").updateMany(where, { $set : obj }, cb);
    })
}

module.exports.save = (obj, cb) => {
    database((err, con)=>{
        var db = con.db("tss9");
        db.collection("student").insertOne(obj, cb);
    })
}

module.exports.delete = (where, cb) => {
    database((err, con)=>{
        var db = con.db("tss9");
        db.collection("student").deleteMany(where, cb);
    })
}

/*
var x = req

x.insert();


*/