exports.getTeacherInfor = (req, res) => {
	res.status(200).render('teacher-information', {
		title: 'Teacher-information',
	});
};