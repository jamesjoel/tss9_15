var express = require("express");
var app = express();
var fs = require("fs");

// fs.appendFile("hello.txt", "my name is james joel", (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Done");
// })

var routes = require("./config/routes");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.use(express.json());
app.use(express.urlencoded());

app.use(routes);


var port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Server running");
})