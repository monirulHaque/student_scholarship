const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const pool = require('./pool');
const ejs = require('ejs');

const app = express();

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("src"));





app.get('/', function (req, res) {
 	res.render('index');
});













app.use((req, res, next) => {
	let err = new Error("Page not found");
	err.status = 404;
	next(err);
});
app.use((err,req,res,next) => {
	res.status(err.status || 500);
	res.send(err.message);
});

app.listen(3000, function(){
	console.log("Server is running on 3000");
});