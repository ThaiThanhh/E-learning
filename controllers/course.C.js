exports.getCourse = (req, res) => {
    res.status(200).render('course-information', {
		title: 'Course-information',
		layout: 'main'
	});
}