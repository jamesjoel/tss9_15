var express = require("express");
var routes  = express.Router();



routes.use("/", require("../controllers/home"));
// routes.use("/about", require("../controllers/about"));
// routes.use("/user", require("../controllers/user"));
// routes.use("/contact", require("../controllers/contact"));

module.exports = routes;