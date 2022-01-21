const db = require('../models/db.M')
exports.getCourse = async (req, res) => {
	//get id from query
	const courseId = req.query.courseid
	const course = await db.getCourseByID(courseId)
	//get relative course
	const courses = await db.getCourses()
    const relativeCourses = courses.slice(0, 4)
	//get review
	const reviews = await db.getReviews(courseId)
	if (!req.user) {
		return res.status(200).render('course-information', {
			title: 'Course-information',
			course: course,
			relativeCourses: relativeCourses,
			reviews: reviews,
			isAdmin: false,
			layout: 'main'
		});
	}
	if (req.user.role == 2) {
		const isDisabled = (course.status == 0)? true : false
		return res.status(200).render('course-information', {
			title: 'Course-information',
			course: course,
			relativeCourses: relativeCourses,
			reviews: reviews,
			isAdmin: true,
			isDisabled: isDisabled,
			layout: 'main'
		});
	}
	res.status(200).render('course-information', {
		title: 'Course-information',
		course: course,
		relativeCourses: relativeCourses,
		reviews: reviews,
		isAdmin: false,
		layout: 'main'
	});
}

