/*
const http = require("http");
const fs = require("fs");
const server = http.createServer(app);
const WEBPATH = "./templates";
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
        const userName = req.params("user_name");
        console.log(userName);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.send(userName);
        res.end(data);
    })
})
server.listen(port, () => {
    console.log(`Server running on ${port}`);
})
*/

const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
var bodyParser = require('body-parser');
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile)
app.set("view engine", "html");
app.set("views", path.join(__dirname, "/public/views"));

router.get("/", (req, res) => {
    res.render("login");
})

router.post("/index", (req, res) => {
    const name = req.body.name;

    res.render("index", { user_name: name})
})

app.use("/", router);
app.listen(port);

console.log(`Running at Port ${port}`);