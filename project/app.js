var express = require("express");
var app = express();

app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/index.html");

})

app.listen(4000, ()=>{
    console.log("server running");
})