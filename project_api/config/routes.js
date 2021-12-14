var express = require("express");
var routes = express.Router();
var jwt = require("jsonwebtoken");

routes.use("/api/product", require("../controllers/ProductController"));
routes.use("/api/user", require("../controllers/UserController"));
routes.use("/api/auth", require("../controllers/AuthController"));
routes.use("/api/course", require("../controllers/CourseController"));
routes.use("/api/student", require("../controllers/StudentController"));
routes.use("/api/image", require("../controllers/ImageController"));
routes.use("/api/profile", Auth, require("../controllers/ProfileController"));


function Auth(req, res, next){
    if(req.headers && req.headers.authorization){
        var token = JSON.parse(req.headers.authorization);
        jwt.verify(token, "The stepping stone", (err, userinfo)=>{
            if(err){
                res.status(401).send({ message : "Unauthorized Users"});
                return;
            }
            req.user = userinfo;
            next();
        })

    }else{
        res.status(401).send({ message : "Unauthorized Users"});
    }
}



module.exports = routes;