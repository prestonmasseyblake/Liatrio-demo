const fs = require('fs/promises');
const express = require('express');
const cors = require('cors');
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();
var name = "Preston"
app.get("/", (req, res) => {
    res.json({
        "message": `my name is ${name}`,
        "timestamp": new Date().getTime()
});
});

app.listen(3000, () => console.log("Api Server is running"));