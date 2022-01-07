exports.getIndex =  (req, res) => {
	res.status(200).render('index', {
		title: 'Index',
		layout: 'main',
	});
};
exports.getDisableCourse =  (req, res) => {
	res.status(200).render('dis-courses', {
		title: 'Disable courses',
		layout: 'main',
	});
};
exports.getEnableCourse =  (req, res) => {
	res.status(200).render('en-courses', {
		title: 'Enable courses',
		layout: 'main',
	});
};
exports.getListCourse =  (req, res) => {
	res.status(200).render('list-courses', {
		title: 'List courses',
		layout: 'main',
	});
};
exports.getSearchCourse =  (req, res) => {
	res.status(200).render('search-courses', {
		title: 'Search courses',
		layout: 'main',
	});
};
exports.getSignupForm = (req, res) => {
	res.status(200).render('signup', {
		title: 'Register new account',
		layout: 'login-layout',
	});
};
exports.getLogin1Form = (req, res) => {
	res.status(200).render('login-1', {
		title: 'Log into your account',
		layout: 'login-layout'
	});
};
exports.getLogin2Form = (req, res) => {
	res.status(200).render('login-2', {
		title: 'Log into your account',
		layout: 'login-layout'
	});
};

exports.getTeacherInfor = (req, res) => {
	res.status(200).render('teacher-information', {
		title: 'Teacher-information',
		layout: 'login-layout'
	});
};