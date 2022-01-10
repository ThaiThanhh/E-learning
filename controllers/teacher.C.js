const userM = require('../models/user.M')
const teacherM = require('../models/teacher.M')
exports.getTeacherInfor = (req, res) => {
	res.status(200).render('teacher-information', {
		title: 'Teacher-information',
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
	await teacherM.add(teacher)
	const rs = await userM.updateRole(1, req.user.userid)
	console.log(rs)
	res.redirect('/teacher')
}

exports.getTeacher = async (req, res) =>{

}