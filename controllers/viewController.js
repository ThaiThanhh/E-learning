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
exports.getLoginForm = (req, res) => {
	res.status(200).render('login', {
		title: 'Log into your account',
		layout: 'login-layout',
	});
};
