const fs = require('fs/promises');
const express = require('express');
const cors = require('cors');
const _ = require("lodash");
const path = require("path");
const { v4: uuid } = require("uuid");
const port = 80;
const hostname = "localhost";
const app = express();


app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// Simple Api requesting the basic information

var name = "Preston"
const facts = ["I won a state championship in high school for Rowing",
    "My dog has survived cancer 3 times (hes a fighter!)",
    "I ran my own web design business for 2 years when I started coding",
    "I once shaved my eyebrow for a dare and it did not grow back for a year",
"I am a Portugese citizen as well as a citizen in America"]
app.get("/", (req, res) => {
    let idx = Math.floor(Math.random() * facts.length - 1);
    console.log(idx);
  res.json({
      "message": `My name is ${name}`,
      "funFact": facts[idx],
    "timestamp": new Date().getTime(),
    
    

  });
});


app.listen(port);