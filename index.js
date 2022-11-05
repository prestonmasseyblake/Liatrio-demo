const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const path = require("path");
const { v4: uuid } = require("uuid");
const port = 80;
const app = express();
app.use(cors());
app.use(express.static(__dirname));
app.options("*", cors());


// Simple Api requesting the basic information

var name = "Preston";
const facts = [
  "I won a state championship in high school for rowing",
  "My dog has survived cancer 3 times (hes a fighter!)",
  "I ran a web design business for 2 years with some friends.",
  "I once shaved my eyebrow for a dare and it did not grow back for a year",
  "I am a Portugese citizen as well as a American citizen.",
];
app.get("/", (req, res) => {
  let temp_rand = Math.random();
  let idx = Math.floor(temp_rand * facts.length);
  res.json({
    message: `My name is ${name}`,
    funFact: facts[idx],
    timestamp: new Date().getTime(),
  });
});


app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.listen(port);
