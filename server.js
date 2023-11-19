const { log } = require("console");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public"), { setHeaders: (res, path) => res.type('text/css') }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"))
});

const server = app.listen(5000);
const portNum = server.address().port;
console.log(`port is open on 127.0.0.1:${portNum}`);