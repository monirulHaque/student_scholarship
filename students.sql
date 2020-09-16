DROP DATABASE IF EXISTS students;
CREATE DATABASE students;
USE students;

create table student(
 	studentId INT NOT NULL UNIQUE,
    name VARCHAR(64) NOT NULL,
 	email VARCHAR(255) NOT NULL UNIQUE,
 	phone VARCHAR(11) NOT NULL UNIQUE,
 	pass VARCHAR(255) NOT NULL,
    currentStatus VARCHAR(10) NOT NULL,
 	primary key(studentId)
);
 
create table scholarship(
    scholarshipId INT NOT NULL UNIQUE AUTO_INCREMENT,
 	semesterId VARCHAR(1) NOT NULL,
    semesterName VARCHAR(6) NOT NULL,
    semesterYear VARCHAR(4) NOT NULL,
    scholarshipStatus VARCHAR(10) NOT NULL,
    studentId INT NOT NULL,
 	primary key (scholarshipId),
 	FOREIGN KEY (studentId) REFERENCES student(studentId)
);



INSERT INTO student(studentId, name, email, phone, pass, currentStatus)
VALUES(12345678, "testuser", "testuser@test.com", 12345678910, "test12", "APPROVED");

INSERT INTO student(studentId, name, email, phone, pass, currentStatus)
VALUES(18300000, "Farah Farhin", "farahfarhin@gmail.com", 01234567890, "farhin", "PENDING");

INSERT INTO student(studentId, name, email, phone, pass, currentStatus)
VALUES(18101296, "Farhin Oishi", "farhinoishi@yahoo.com", 01851792387, "oishi231", "PENDING");

INSERT INTO student(studentId, name, email, phone, pass, currentStatus)
VALUES(19301237, "Walter White", "wwhite@hotmail.com", 01791421287, "imdanger", "Rejected");

INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(2,"Summer", 2018, "N/A", 12345678);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(3,"Fall", 2018, "N/A", 12345678);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(1,"Spring", 2019, "Rejected", 12345678);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(2,"Summer", 2019, "Approved", 12345678);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(3,"Fall", 2019, "Rejected", 12345678);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(1,"Spring", 2020, "Approved", 12345678);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(2,"Summer", 2020, "Approved", 12345678);

INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(2,"Summer", 2018, "N/A", 18300000);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(3,"Fall", 2018, "N/A", 18300000);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(1,"Spring", 2019, "Approved", 18300000);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(2,"Summer", 2019, "Rejected", 18300000);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(3,"Fall", 2019, "Approved", 18300000);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(1,"Spring", 2020, "Rejected", 18300000);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(2,"Summer", 2020, "Pending", 18300000);

INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(2,"Summer", 2018, "N/A", 18101296);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(3,"Fall", 2018, "Rejected", 18101296);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(1,"Spring", 2019, "Approved", 18101296);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(2,"Summer", 2019, "Approved", 18101296);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(3,"Fall", 2019, "Approved", 18101296);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(1,"Spring", 2020, "Rejected", 18101296);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(2,"Summer", 2020, "Pending", 18101296);


INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(1,"Spring", 2020, "Rejected", 19301237);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(3,"Fall", 2019, "Rejected", 19301237);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(2,"Summer", 2020, "Rejected", 19301237);
INSERT INTO scholarship(semesterId, semesterName, semesterYear, scholarshipStatus, studentId)
VALUES(2,"Summer", 2019, "N/A", 19301237);


