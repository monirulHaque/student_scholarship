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
    //res.sendFile('dashboard.html', { root: path.join(__dirname, '../public') });
	var studentId = req.body.studentId;
	var pass = req.body.password;
	
	// let sql = "SELECT * FROM student WHERE studentId = ? and pass = ?";
		
let sql = "SELECT studentId, name, email, phone, currentStatus from student  WHERE studentId = ? and pass = ?";

    pool.query(sql, [studentId, pass], (err, result) => {
        if (err) throw err;
        else {
            if (result.length > 0) {
                console.log("Login sucksexful");
                var studentId, name, email, phone, currentStatus;
                console.log("hi3");
                studentId = result[0].studentId;
                name = result[0].name;
                email = result[0].email;
                phone = result[0].phone;
                currentStatus = result[0].currentStatus;
                console.log(name);
                res.render('dashboard', { studentId: studentId, name: name, email: email, phone: phone, currentStatus: currentStatus });
            } else {
                res.send("WTF, wrong hole!");
            }
        }
    });
});

app.get('/dashboard', (req, res) => {
 	res.render('index');
});
app.post('/dashboard', (req, res, next) => {
	// let sql = "SELECT studentId, name, email, phone, currentStatus from student";
	// console.log("hi1");
	// pool.query(sql, function(err, result) {
	// console.log("hi2");
	// 	if (err) throw err;
	// 	else{
	// 		if(result.length>0) {
	// 			var studentId, name, email, phone, currentStatus;
	// console.log("hi3");
	// 			console.log(result[0]);
	// 			console.log(result.studentId);
	// 			res.render('dashboard', {studentId: studentId, name: name, email: email, phone: phone,});
	// }else {
	// res.send("WTF, wrong hole!");
	// 		}
	// 	}
	// });
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