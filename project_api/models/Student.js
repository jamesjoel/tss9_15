var database = require("../config/database");
var config = require("../config/config");
var collName = "student";


module.exports.find=(where, cb)=>{
    database((err, con)=>{
        var db = con.db(config.dbName);
        db.collection(collName).find(where).toArray(cb);
    })
}

module.exports.insert = (obj, cb) => {
    database((err, con) => {
        var db = con.db(config.dbName);
        db.collection(collName).insertOne(obj, cb);
    })
}

module.exports.delete = (where, cb) => {
    database((err, con) => {
        var db = con.db(config.dbName);
        db.collection(collName).deleteMany(where, cb);
    })
}

module.exports.update = (where, obj, cb) => {
    database((err, con) => {
        var db = con.db(config.dbName);
        db.collection(collName).updateMany(where, { $set : obj }, cb);
    })
}