const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const pool = require('./pool');
const ejs = require('ejs');

const app = express();

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("src"));





app.get('/', (req, res) => {
 	res.render('index');
});

app.post('/', (req, res, next) => {
	var studentId = req.body.studentId;
	var pass = req.body.password;
	
	let sql = "SELECT * FROM students WHERE studentId = ? and pass = ?";
		
	pool.query(sql, [studentId, pass], (err, result) => {
		if (err) throw err;
		else{
			if(result.length>0) {
				console.log("Login sucksexful");
				res.render('dashboard');
        	}else {
            	 res.send("WTF, wrong hole!");
			}
		}
	});

});
app.get('/dashboard', (req, res) => {
 	res.render('dashboard');
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

app.listen(3000, () => {
	console.log("Server is running on 3000");
});