const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection ({
	//connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: '',
	//password : process.env.MYSQL_PW,
	database: 'students'
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.connection = connection;




connection.query = util.promisify(connection.query);

module.exports = connection;