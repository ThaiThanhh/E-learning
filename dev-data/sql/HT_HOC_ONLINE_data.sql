insert into "USER" (fullname, dateofbirth, address, email, phonenumber, gender, avatar, role) values ('Huỳnh Thái Thành', '05/30/2001', 'Q1, TPHCM','thanh@gmail.com','0123456789','M', './img/thanh.jpg',2);
insert into "USER" (fullname, dateofbirth, address, email, phonenumber, gender, avatar, role) values ('Nguyễn Quang An', '09/14/2001', 'Q1, TPHCM','an@gmail.com','0123456789','M', './img/an.jpg', 1);
insert into "USER" (fullname, dateofbirth, address, email, phonenumber, gender, avatar, role) values ('Huỳnh Ngọc Văn', '10/11/2001', 'Q1, TPHCM','van@gmail.com','0123456789','M', './img/van.jpg', 0);
insert into "USER" (fullname, dateofbirth, address, email, phonenumber, gender, avatar, role) values ('Nguyễn Thị Ngọc Mai', '08/20/2001', 'Q1, TPHCM','mai@gmail.com','0123456789','F', './img/mai.jpg',0);
insert into "USER" (fullname, dateofbirth, address, email, phonenumber, gender, avatar, role) values ('Ngô Đình Minh Như', '09/26/2002','Q1, TPHCM', 'nhu@gmail.com','0123456789','F', './img/mai2.jpg',2);
insert into "USER" (fullname, dateofbirth, address, email, phonenumber, gender, avatar, role) values ('Trần Lê Thanh Tuyền', '02/16/2001','Q1, TPHCM', 'tuyen@gmail.com','0123456789','F', './img/tram.jpg',1);
insert into "USER" (fullname, dateofbirth, address, email, phonenumber, gender, avatar, role) values ('Huỳnh Trường Vũ', '09/24/2001','Q1, TPHCM', 'vu@gmail.com','0123456789','M', './img/dat.jpg', 1);
insert into "USER" (fullname, dateofbirth, address, email, phonenumber, gender, avatar, role) values ('Kiều Thúy Vy', '10/05/2001','Q1, TPHCM', 'vy@gmail.com','0123456789','F', './img/thanh2.jpg', 1);
insert into "USER" (fullname, dateofbirth, address, email, phonenumber, gender, avatar, role) values ('Lê Đức Anh', '09/15/2001','Q1, TPHCM', 'anh@gmail.com','0123456789','M', './img/an2.jpg', 0);
insert into "USER" (fullname, dateofbirth, address, email, phonenumber, gender, avatar, role) values ('Nguyễn Thôi Kim Phương', '11/17/2001', 'Q1, TPHCM','phuong@gmail.com','0123456789','F', './img/mai3.jpg', 0);

insert into account (username, password, status, role, userid) values ('admin1', '$2a$12$q5Mev.uQO7VfUsz2vIJ1j.eljgiQFtReMJQKXJycFI4MmlwMvehsK', 1 , 2, 1);
insert into account (username, password, status, role, userid) values ('an123', '$2a$12$tGJyRan/jn2FF0QgDhfvweP7NLXHpNfFbjgP3XTl0b9LcWfd2kJqO', 1 , 1, 2);
insert into account (username, password, status, role, userid) values ('van123', '$2a$12$CdkhadKb15UPrhGNaUhi3eXZsH71ebM2WYjMsUzAD2rIS8ctOxRb2', 1 , 0, 3);
insert into account (username, password, status, role, userid) values ('mai123', '$2a$12$JpbDP5m8mGXpF9VZ0FhVN.EAKpSEGtz9mo1D9cFY86vB/VxaT.7RW', 1 , 0, 4);
insert into account (username, password, status, role, userid) values ('admin2', '$2a$12$0vOxCQ0cqOKp9fa4YPgYmemYxNC7azfaC536EAmnZKNIGExE6z.1y', 1 , 2, 5);
insert into account (username, password, status, role, userid) values ('tuyen123', '$2a$12$tWS/4nVsxVHaQ1ctL9WXIuVsziC.9Wy5CHvwzEQWpGdzQ09R2BMVi', 1 , 1, 6);
insert into account (username, password, status, role, userid) values ('vu123', '$2a$12$rVfs7wQV1GczNgpNWCwWje2f7CeiV0q0ZigZ3U.F2Ir2Y7kd/jIQu', 1 , 1, 7);
insert into account (username, password, status, role, userid) values ('vy123', '$2a$12$2lwR75aCm6FviKetsGybN.C8udS0HyI/bJcd/3Zsjjz6ZAA7YI7te', 1 , 1, 8);
insert into account (username, password, status, role, userid) values ('anh123', '$2a$12$OS1VeqGYbACIFipd.mB/LegpbbUMnnq0wG6uRB/fWYkINC5qMeZb2', 1 , 0, 9);
insert into account (username, password, status, role, userid) values ('phuong123', '$2a$12$WNOaugeoMxFcqTGMALbuwu1w9oLspO1B0goe2Q.TncIh4KdcIiurC', 1 , 0, 10);

insert into bankAccount (cardnumber, bank, userid) values ('5610486812817338', 'BIDV', 2);
insert into bankAccount (cardnumber, bank, userid) values ('5610486812817338', 'Argibank', 3);
insert into bankAccount (cardnumber, bank, userid) values ('5610486812817338', 'Techcombank', 4);
insert into bankAccount (cardnumber, bank, userid) values ('5610486812817338', 'Techcombank', 6);
insert into bankAccount (cardnumber, bank, userid) values ('5610486812817338', 'Sacombank', 7);
insert into bankAccount (cardnumber, bank, userid) values ('5610486812817338', 'Argibank', 8);
insert into bankAccount (cardnumber, bank, userid) values ('5610486812817338', 'BIDV', 9);
insert into bankAccount (cardnumber, bank, userid) values ('5610486812817338', 'Sacombank', 10);

insert into teacher (userid, major, introduction) values (2, 'Công nghệ thông tin', 'Tốt nghiệp loại giỏi ngành hệ thống thông tin - Đại học Khoa học tự nhiên TPHCM');
insert into teacher (userid, major, introduction) values (6, 'Công nghệ thông tin', 'Tốt nghiệp loại giỏi ngành công nghệ thông tin - Đại học Sư phạm Kĩ thuật TPHCM');
insert into teacher (userid, major, introduction) values (7, 'Ngôn ngữ Anh', 'tốt nghiệp loại giỏi chuyên ngành hệ thống thông tin - Đại học Khoa học tự nhiên TPHCM');
insert into teacher (userid, major, introduction) values (8, 'Marketing', 'tốt nghiệp loại giỏi chuyên ngành hệ thống thông tin - Đại học Khoa học tự nhiên TPHCM');

insert into course (coursename, startdate, enddate, capacity, fee, description, userid, url_image) values ('HTML, CSS từ Zero đến Hero', '01/01/2021','01/02/2021', 50, 2500000, 'khóa học đáng học', 2, './img/html.png');
insert into course (coursename, startdate, enddate, capacity, fee, description, userid, url_image) values ('JavaScript Cơ Bản', '01/01/2021','01/02/2021', 50, 2500000, 'khóa học đáng học', 2, './img/jscb.png');
insert into course (coursename, startdate, enddate, capacity, fee, description, userid, url_image) values ('Kiến Thức Nhập Môn', '01/01/2021','01/02/2021', 50, 2500000, 'khóa học đáng học', 2, './img/ktnt.png');
insert into course (coursename, startdate, enddate, capacity, fee, description, userid, url_image) values ('Responsive Với Grid System', '01/01/2021','01/02/2021', 50, 2500000, 'khóa học đáng học', 6, './img/responsive.png');
insert into course (coursename, startdate, enddate, capacity, fee, description, userid, url_image) values ('Node & ExpressJS', '01/01/2021','01/02/2021', 50, 2500000, 'khóa học đáng học', 6, './img/nodejs.png');
insert into course (coursename, startdate, enddate, capacity, fee, description, userid, url_image) values ('Xây Dựng Website với ReactJS', '01/01/2021','01/02/2021', 50, 2500000, 'khóa học đáng học', 6, './img/reactjs.png');
insert into course (coursename, startdate, enddate, capacity, fee, description, userid, url_image) values ('HTML, CSS Tips & Tricks', '01/01/2021','01/02/2021', 50, 2500000, 'khóa học đáng học', 7, './img/tip&trick.png');
insert into course (coursename, startdate, enddate, capacity, fee, description, userid, url_image) values ('JavaScript Nâng Cao', '01/01/2021','01/02/2021', 50, 2500000, 'khóa học đáng học', 7, './img/jsnc.png');
insert into course (coursename, startdate, enddate, capacity, fee, description, userid, url_image) values ('App "Đừng Chạm Tay Lên Mặt"', '01/01/2021','01/02/2021', 50, 2500000, 'khóa học đáng học', 8, './img/dtyf.png');
insert into course (coursename, startdate, enddate, capacity, fee, description, userid, url_image) values ('Làm việc với Terminal & Ubuntu', '01/01/2021','01/02/2021', 50, 2500000, 'khóa học đáng học', 8, './img/win.png');

insert into "JOIN" (courseid,userid, registered_at) values (1, 3, '01/01/2021');
insert into "JOIN" (courseid,userid, registered_at) values (1, 10, '01/01/2021');
insert into "JOIN" (courseid,userid, registered_at) values (2, 3, '01/01/2021');
insert into "JOIN" (courseid,userid, registered_at) values (2, 10, '01/01/2021');
insert into "JOIN" (courseid,userid, registered_at) values (3, 3, '01/01/2021');
insert into "JOIN" (courseid,userid, registered_at) values (4, 4, '01/01/2021');
insert into "JOIN" (courseid,userid, registered_at) values (4, 10, '01/01/2021');
insert into "JOIN" (courseid,userid, registered_at) values (5, 4, '01/01/2021');
insert into "JOIN" (courseid,userid, registered_at) values (6, 4, '01/01/2021');
insert into "JOIN" (courseid,userid, registered_at) values (7, 9, '01/01/2021');
insert into "JOIN" (courseid,userid, registered_at) values (8, 9, '01/01/2021');
insert into "JOIN" (courseid,userid, registered_at) values (9, 9, '01/01/2021');
insert into "JOIN" (courseid,userid, registered_at) values (10, 9,'01/01/2021');

insert into disable (courseid, userid, updated_at) values (1, 1 , '01/01/2021');
insert into disable (courseid, userid, updated_at) values (2, 1 , '01/01/2021');
insert into disable (courseid, userid, updated_at) values (3, 1 , '01/01/2021');
insert into disable (courseid, userid, updated_at) values (6, 5 , '01/01/2021');
insert into disable (courseid, userid, updated_at) values (7, 5 , '01/01/2021');

insert into enable (courseid, userid, updated_at) values (1, 5 , '01/01/2021');
insert into enable (courseid, userid, updated_at) values (2, 1 , '01/01/2021');
insert into enable (courseid, userid, updated_at) values (3, 5 , '01/01/2021');
insert into enable (courseid, userid, updated_at) values (6, 5 , '01/01/2021');
insert into enable (courseid, userid, updated_at) values (7, 1 , '01/01/2021');

insert into review (courseid, userid, star, review, updated_at) values (1, 3 , 5, 'khóa học tuỵt zời', '01/01/2021');
insert into review (courseid, userid, star, review, updated_at) values (1, 10 , 5, 'khóa học tuỵt zời', '01/01/2021');
insert into review (courseid, userid, star, review, updated_at) values (2, 3 , 5, 'khóa học tuỵt zời', '01/01/2021');
insert into review (courseid, userid, star, review, updated_at) values (2, 10 , 5, 'khóa học tuỵt zời', '01/01/2021');
insert into review (courseid, userid, star, review, updated_at) values (3, 3 , 5, 'khóa học tuỵt zời', '01/01/2021');
insert into review (courseid, userid, star, review, updated_at) values (4, 4 , 5, 'khóa học tuỵt zời', '01/01/2021');
insert into review (courseid, userid, star, review, updated_at) values (4, 10 , 5, 'khóa học tuỵt zời', '01/01/2021');
insert into review (courseid, userid, star, review, updated_at) values (5, 4 , 5, 'khóa học tuỵt zời', '01/01/2021');
insert into review (courseid, userid, star, review, updated_at) values (6, 4 , 5, 'khóa học tuỵt zời', '01/01/2021');
insert into review (courseid, userid, star, review, updated_at) values (7, 9 , 5, 'khóa học tuỵt zời', '01/01/2021');
insert into review (courseid, userid, star, review, updated_at) values (8, 9 , 5, 'khóa học tuỵt zời', '01/01/2021');

insert into schedule (courseid, day, time) values (1, 'Thứ 2' , '19:00');
insert into schedule (courseid, day, time) values (1, 'Thứ 4' , '19:00');
insert into schedule (courseid, day, time) values (1, 'Thứ 6' , '19:00');
insert into schedule (courseid, day, time) values (2, 'Thứ 3' , '19:00');
insert into schedule (courseid, day, time) values (2, 'Thứ 5' , '19:00');
insert into schedule (courseid, day, time) values (2, 'Thứ 7' , '19:00');
insert into schedule (courseid, day, time) values (3, 'Thứ 3' , '09:30');
insert into schedule (courseid, day, time) values (3, 'Thứ 5' , '09:30');
insert into schedule (courseid, day, time) values (4, 'Thứ 2' , '09:30');
insert into schedule (courseid, day, time) values (4, 'Thứ 4' , '09:30');
insert into schedule (courseid, day, time) values (4, 'Thứ 6' , '09:30');
insert into schedule (courseid, day, time) values (5, 'Thứ 3' , '09:30');
insert into schedule (courseid, day, time) values (5, 'Thứ 7' , '09:30');
insert into schedule (courseid, day, time) values (6, 'Thứ 2' , '15:30');
insert into schedule (courseid, day, time) values (6, 'Thứ 6' , '15:30');
insert into schedule (courseid, day, time) values (7, 'Thứ 3' , '09:30');
insert into schedule (courseid, day, time) values (7, 'Thứ 7' , '09:30');
insert into schedule (courseid, day, time) values (8, 'Thứ 2' , '20:00');
insert into schedule (courseid, day, time) values (8, 'Thứ 4' , '20:00');
insert into schedule (courseid, day, time) values (8, 'Thứ 6' , '20:00');
insert into schedule (courseid, day, time) values (9, 'Thứ 3' , '20:00');
insert into schedule (courseid, day, time) values (9, 'Thứ 5' , '20:00');
insert into schedule (courseid, day, time) values (9, 'Thứ 7' , '20:00');
insert into schedule (courseid, day, time) values (10, 'Thứ 3' , '15:30');
insert into schedule (courseid, day, time) values (10, 'Thứ 5' , '15:30');
insert into schedule (courseid, day, time) values (10, 'Thứ 7' , '15:30');



