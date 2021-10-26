//  app.js, main.js, server.js, index.js

var express = require("express");
var app = express();

// console.log("hello");

// localhost:3000/about
app.get("/about", (req, res)=>{
    // res.send("hello world");
    res.sendFile(__dirname+"/about.html");
});
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html")
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.html") 
})


app.listen(3000, ()=>{
    console.log("server running");
}); // this fun create virtual server, with port
