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
		
	let sql = "SELECT studentId, name, email, phone, currentStatus from student  WHERE studentId = ? and pass = ?";
	let sql1 = "SELECT semesterName, semesterYear, scholarshipStatus from scholarship WHERE studentId = ? ORDER BY semesterYear DESC, semesterId DESC";

    pool.query(sql, [studentId, pass], (err, result) => {
        if (err) throw err;
        else {
            if (result.length > 0) {
                console.log("Login sucksexful");
                var name, email, phone, currentStatus;
                studentId = result[0].studentId;
				// studentIdGlobal = result[0].studentId;
                name = result[0].name;
				// nameGlobal = result[0].name;
                email = result[0].email;
				// emailGlobal = result[0].email;
                phone = result[0].phone;
				// phoneGlobal = result[0].phone;
                currentStatus = result[0].currentStatus;
				// currentStatusGlobal = result[0].currentStatus;

				pool.query(sql1, [studentId, pass], (err, result) => {
					if (err) throw err;
					else {
						if (result.length > 0) {
							var semesterName = [], semesterYear = [], scholarshipStatus = [];
							for(var i=0; i<result.length; i++){
								semesterName.push(result[i].semesterName);
								semesterName.push(result[i].semesterName);
								semesterYear.push(result[i].semesterYear);
								semesterYear.push(result[i].semesterYear);
								scholarshipStatus.push(result[i].scholarshipStatus);
								scholarshipStatus.push(result[i].scholarshipStatus);
							}
							res.render('dashboard', { studentId: studentId, name: name, email: email, phone: phone, currentStatus: currentStatus, semesterName: semesterName, semesterYear: semesterYear, scholarshipStatus: scholarshipStatus});
						} else {
							res.send("WTF, wrong hole!");
						}
					}
				});

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
    let updatedEmail = req.body.email;
    let updatedPhone = req.body.phone;
	let studentId = req.body.studentId;
    let sql = "UPDATE student SET email= ?, phone= ? WHERE studentId= ? ";
    pool.query(sql, [updatedEmail, updatedPhone, studentId],  function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
		console.log(studentId);
    });
	
	let sql0 = "SELECT studentId, name, email, phone, currentStatus from student  WHERE studentId = ?";
	let sql1 = "SELECT semesterName, semesterYear, scholarshipStatus from scholarship WHERE studentId = ? ORDER BY semesterYear DESC, semesterId DESC";

    pool.query(sql0, [studentId], (err, result) => {
        if (err) throw err;
        else {
            if (result.length > 0) {
                console.log("Login sucksexful");
                var name, email, phone, currentStatus;
                name = result[0].name;
                email = result[0].email;
                phone = result[0].phone;
                currentStatus = result[0].currentStatus;

				pool.query(sql1, [studentId], (err, result) => {
					if (err) throw err;
					else {
						if (result.length > 0) {
							var semesterName = [], semesterYear = [], scholarshipStatus = [];
							for(var i=0; i<result.length; i++){
								semesterName.push(result[i].semesterName);
								semesterName.push(result[i].semesterName);
								semesterYear.push(result[i].semesterYear);
								semesterYear.push(result[i].semesterYear);
								scholarshipStatus.push(result[i].scholarshipStatus);
								scholarshipStatus.push(result[i].scholarshipStatus);
							}
							res.render('dashboard', { studentId: studentId, name: name, email: email, phone: phone, currentStatus: currentStatus, semesterName: semesterName, semesterYear: semesterYear, scholarshipStatus: scholarshipStatus});
						} else {
							res.send("WTF, wrong hole!");
						}
					}
				});

            } else {
                res.send("WTF, wrong hole!");
            }
        }
    });
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