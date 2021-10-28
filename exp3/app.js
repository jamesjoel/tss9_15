var express = require("express");
var app = express();

var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;


app.set("view engine", "ejs");
// app.set("views", "pages");
app.use(express.static(__dirname+"/assets"));
// app.use(express.static(__dirname+"/custome"));

app.use(express.json());
app.use(express.urlencoded());


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
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss9");
        db.collection("student").find().toArray((err, result)=>{
            // console.log(result);
            var pagedata = { result : result };
            res.render("student", pagedata);
        })
    })

})


app.post("/student", (req, res)=>{
    // console.log("hello");
    //console.log(req.body);

    // req.body.fname = req.body.full_name;
    // delete req.body.full_name;

    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        if(err){
            console.log("Connectino Error", err);
            return;
        }
        var db = con.db("tss9");
        db.collection("student").insertOne(req.body, (err)=>{
            if(err){
                console.log("Insert Error", err);
                return;
            }
            res.redirect("/student");
        });

        
    });
})

app.listen(3000, ()=>{
    console.log("server running");
})
