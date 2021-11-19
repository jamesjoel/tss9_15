var MongoClient = require("mongodb").MongoClient;
var config = require("./config");

module.exports = (cb)=>{
    MongoClient.connect(config.dbUrl, cb);
}
