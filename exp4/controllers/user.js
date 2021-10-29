var express = require("express");
var routes = express.Router();

//localhost:3000/user
routes.get("/", (req, res) => {

})
//localhost:3000/user/setting
routes.get("/setting", (req, res) => {
    
})
//localhost:3000/user/setting/more
routes.get("/setting/more", (req, res) => {

})

module.exports = routes;