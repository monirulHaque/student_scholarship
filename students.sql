DROP DATABASE IF EXISTS students;
CREATE DATABASE students;
USE students;


create table student(
 	studentId INT NOT NULL UNIQUE,
    name VARCHAR(64) NOT NULL,
 	email VARCHAR(255) NOT NULL UNIQUE,
 	phone VARCHAR(11) NOT NULL UNIQUE,
 	pass VARCHAR(255) NOT NULL,
    scholarshipStatus VARCHAR(64) NOT NULL,
 	primary key(studentId)
);
 
# create table scholarship(
#     scholarshipId INT NOT NULL UNIQUE AUTO_INCREMENT,
#  	semesterId VARCHAR(1) NOT NULL;
#    semesterName VARCHAR(6) NOT NULL;
#     semesterYear VARCHAR(4) NOT NULL;
#     scholarshipName VARCHAR(64) NOT NULL,
#     studentId INT NOT NULL,
#  	primary key (scholarshipId),
#  	FOREIGN KEY (studentId) REFERENCES student(studentId)
# );




INSERT INTO student(studentId, name, email, phone, pass, scholarshipStatus)
VALUES(12345678, "testuser", "testuser@test.com", 12345678910, "testpass123", "APPROVED");

