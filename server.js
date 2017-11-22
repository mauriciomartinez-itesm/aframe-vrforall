
// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var assets = require('./assets');

// Load required modules
var http    = require("http");              // http server core module
var serveStatic = require('serve-static');  // serve static files
var socketIo = require("socket.io");        // web socket external module
var easyrtc = require("easyrtc");               // EasyRTC external module

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use("/assets", assets);

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

