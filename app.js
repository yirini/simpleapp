var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var streets = ["St.Michel", "Belanger", "St.Leonard", "St.Denis","Jean Talon"];

app.get("/", function(req, res){
  res.render("home");
});

app.post("/addstreet", function(req, res){
var newStreet = req.body.newstreet;
streets.push(newStreet);
res.redirect("/streets");
});

app.get("/streets", function(req, res){
  res.render("streets", {streets: streets});
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server started!")
});
