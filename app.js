const express = require("express");
const bodyParser = require("body-parser");

const App = express()

app.get("/", function (req, res) { 
   res.send("Hello")
 });

 app.listen(3000, function () { 
    console.log("Visit 3000:port");
  })
