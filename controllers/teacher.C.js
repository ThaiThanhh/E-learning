const userM = require('../models/user.M')
const teacherM = require('../models/teacher.M');
const accountM = require('../models/account.M');
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
	//add teacher infor 
	await teacherM.add(teacher)
	//update role 0->1
	await userM.updateRole(1, req.user.userid)
	const accountId = (await accountM.getByID(req.user.userid)).id
	console.log(accountId)
	await accountM.updateRole(1, accountId)
	res.redirect('/teacher')
}

exports.getTeacher = async (req, res) =>{

}