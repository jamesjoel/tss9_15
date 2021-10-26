var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    //   res.send();
    // res.sendFile();
    var a = "rohit";
    var obj = { name : a, age : 25 };

    res.render("home", obj);
})


app.listen(3000, ()=>{
    console.log("server running");
})