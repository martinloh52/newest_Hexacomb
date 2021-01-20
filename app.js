var express = require("express");
var http = require("http");
const websocket = require("ws");

var port = process.argv[2];
var app = express();

app.use(express.static(__dirname + "/public"));

const server = http.createServer(app);

/* GET home page */
app.get("/", function(req, res) {
    res.sendFile("splash.html", { root: "./public" });
});

/* Pressing the 'PLAY' button, returns this page */
app.get("/play", function(req, res) {
    res.sendFile("game.html", { root: "./public" });
});

/* Pressing the 'Rules' button, returns this page */
app.get("/rules", function(req, res) {
    res.sendFile("rules.html", { root: "./public" });
});


/*Sets up a websocket for the server*/
const wss = new websocket.Server({ server });


/* when a connection is made, wait 2000 ms and then send message*/
wss.on("connection", function (ws) {
    /*
     * let's slow down the server response time a bit to 
     * make the change visible on the client side
     */ 
    setTimeout(function () {
        console.log("Connection state: " + ws.readyState);
        ws.send("Thanks for the message. --Your server.");
        ws.close();
        console.log("Connection state: " + ws.readyState);
    }, 2000);

    ws.on("message", function incoming(message) {
        console.log("[LOG] " + message);
    });
});

server.listen(port);

