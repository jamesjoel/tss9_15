var express = require("express");
var app = express();

app.set("view engine", "ejs");
// app.set("views", "pages");
app.use(express.static(__dirname+"/assets"));
// app.use(express.static(__dirname+"/custome"));

app.get("/", (req, res)=>{
    res.render("index");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/student", (req, res) => {
    res.render("student");
})

app.listen(3000, ()=>{
    console.log("server running");
})
