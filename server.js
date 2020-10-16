const express = require("express");

const app = express();

app.get("/",function(request,response){
 response.send("<h1> Hello</h1>");
});

app.get("/contact", function(req,res){
  res.send("Contact me at rohit.modelschool@gmail.com");
});

app.get("/about", function(req,res){
  res.send("I am Rohit Verma<br>The Owner of this page");
})

app.listen(3000,function(){
  console.log("Server started at 3000")
});
