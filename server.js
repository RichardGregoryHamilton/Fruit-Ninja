var express = require("express");
var app = express();
var passport = require('passport');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var session = require('express-session');

app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + '/assets'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/js/phaser.js", function(req, res) {
    res.sendFile(__dirname + "/js/phaser.js");
});

app.get("/js/prefabs/Cuttable.js", function(req, res) {
	res.send_file(__dirname + "/js/prefabs/Cuttable.js");
});

app.get("/js/prefabs/Prefab.js", function(req, res) {
	res.send_file(__dirname + "/js/prefabs/Prefab.js");
});

app.get("/js/prefabs/Fruit.js", function(req, res) {
	res.send_file(__dirname + "/js/prefabs/Fruit.js");
});

app.get("/js/prefabs/Bomb.js", function(req, res) {
	res.send_file(__dirname + "/js/prefabs/Bomb.js");
});

app.get("/js/prefabs/Spawner.js", function(req, res) {
	res.send_file(__dirname + "/js/prefabs/Spawner.js");
});

app.get("/js/prefabs/FruitSpawner.js", function(req, res) {
	res.send_file(__dirname + "/js/prefabs/FruitSpawner.js");
});

app.get("/js/prefabs/BombSpawner.js", function(req, res) {
	res.send_file(__dirname + "/js/prefabs/BombSpawner.js");
});

app.get("/js/prefabs/Score.js", function(req, res) {
	res.send_file(__dirname + "/js/prefabs/Score.js");
});

app.get("/js/states/BootState.js", function(req, res) {
	res.send_file(__dirname + "/js/states/BootState.js");
});

app.get("/js/states/LoadingState.js", function(req, res) {
	res.send_file(__dirname + "/js/states/LoadingState.js");
});

app.get("/js/states/LevelState.js", function(req, res) {
	res.send_file(__dirname + "/js/states/LevelState.js");
});

app.get("/assets/images/background.png", function(req, res) {
    res.sendFile(__dirname + "/assets/images/background.png");
});

app.get("/assets/images/bomb.png", function(req, res) {
    res.sendFile(__dirname + "/assets/images/bomb.png");
});

app.get("/assets/images/fruits.png", function(req, res) {
    res.sendFile(__dirname + "/assets/images/fruits.png");
});

app.get("/assets/levels/level1.json", function(req, res) {
    res.sendFile(__dirname + "/assets/levels/level1.json");
});

app.listen(app.get("port"), function() {
    console.log("Server started: http://localhost:" + app.get("port") + "/");
});
