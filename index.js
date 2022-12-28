const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const port = 3000;

const WEBPATH = "./templates";

app.use(express.static("public"));

app.get("/", (req, res) => {
    fs.readFile(`${WEBPATH}/login.html`, (error, data) => {
        if(error) {
            console.log(err);
            return res.status(500).send("<h1>500 Error</h1>");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    })
})

app.post("/index", (req, res) => {
    fs.readFile(`${WEBPATH}/index.html`, (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).send("<h1>500 Error</h1>");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    })
})

server.listen(port, () => {
    console.log(`Server running on ${port}`);
})