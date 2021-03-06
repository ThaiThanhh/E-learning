const userM = require('../models/user.M')
const teacherM = require('../models/teacher.M');
const accountM = require('../models/account.M');
const db = require('../models/db.M')
exports.getTeacherInfor = async (req, res) => {
	const teacher = await db.getUserInfo(req.user.userid)
	teacher.gender = (teacher.gender == 'M') ? 'Nam' : 'Nữ'
	res.status(200).render('teacher-info', {
		title: 'Teacher-information',
		teacher: teacher
	});
};

exports.becomeTeacher = async (req, res) => {
	console.log(req.body)
	const {major, introduction} = req.body
	const teacher = {
		userid: req.user.userid,
		major: major,
		introduction: introduction
	}
	//add teacher infor 
	await teacherM.add(teacher)
	//update role 0->1
	const rs = await userM.updateRole(1, req.user.userid)
	const accountId = (await accountM.getByID(req.user.userid)).id
	console.log(accountId)
	await db.updateRoleAcc(req.user.userid)
	res.redirect('/teacher/my-courses')
}

exports.getTeacherView = async (req, res) =>{
	const userId = req.user.userid
	const teacher = teacherM.getByID(userId)
	const courses = await db.getCoursesOfTeacher(userId)
	res.status(200).render('teacher', {
		title: 'Teacher',
		teacher: teacher,
		courses: courses,
	});
}

exports.getAddCourse = async (req, res) =>{
	res.status(200).render('add-course', {
		title: 'Tạo khóa học'
	});
}

