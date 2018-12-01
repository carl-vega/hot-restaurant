var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var reserveList = [
   {
      id: 12123,
      name: "micky",
      email: "micky@gmail.com",
      phone: 123456,
   }
];

var waitList = [{
   id: 321,
   name: "goofy",
   email: "goofy@gmail.com",
   phone: 654321
}]


//server get request
app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "home.html"));
 });

 app.get("/tables", function(req, res) {
   res.sendFile(path.join(__dirname, "Tables.html"));
 });

 app.get("/reserve", function(req, res) {
   res.sendFile(path.join(__dirname, "Reserve.html"));
 });

 app.get("/api/reservations", (req,res) => {
   return res.json(reserveList);
 });

 //post request
 app.post("/api/reservations", (req, res) => {
   res.send("post worked!");
   
   // var newReserve = req.body;
   // console.log(newReserve);
   // console.log(reserveList);
   // reserveList.push(newReserve);
   // res.json(newReserve);
 });

//initiate server
app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });