var database = require("../config/database");
var config = require("../config/config");
var collName = "product";


module.exports.find=(where, cb)=>{
    database((err, con)=>{
        var db = con.db(config.dbName);
        db.collection(collName).find(where).toArray(cb);
    })
}