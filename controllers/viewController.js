exports.getIndex =  (req, res) => {
	res.status(200).render('index', {
		title: 'Index',
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
