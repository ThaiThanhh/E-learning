const catchAsync = require('../utils/catchAsync');
const AppError = require('./../utils/appError');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { promisify } = require('util');
const queriesController = require('./queriesController');

const signToken = id => {
	return jwt.sign({ id: id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN
	});
};

correctPassword = async function (password, password2) {
	return await bcrypt.compare(password, password2);
}
exports.login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		next(new AppError('Please provide email and password!', 400));
	}

	const userPassword = await queriesController.login(email);

	if (!userPassword || !(await correctPassword(password, userPassword))) {
		return next(new AppError('Incorrect email or password', 401));
	}
	createSendToken(res, 200, user);
});
const createSendToken = (res, statusCode, user) => {
	const token = signToken(user._id);
	const cookieOptions = {
		expires: new Date(
			Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
		),
		httpOnly: true
		//https://web.dev/samesite-cookies-explained/
	};
	if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

	//save jwt in cookie from output
	res.cookie('jwt', token, cookieOptions);

	//remove password for response
	user.password = undefined;

	res.status(statusCode).json({
		status: 'success',
		token,
		data: {
			user
		}
	});
};

exports.isLoggedIn = async (req, res, next) => {
	if (req.cookies.jwt) {
		try {
			// 1) verify token
			const decoded = await promisify(jwt.verify)(
				req.cookies.jwt,
				process.env.JWT_SECRET
			);

			// 2) Check if user still exists
			const currentUser = await queriesController.findById(decoded.id);
			if (!currentUser) {
				return next();
			}

			// 3) Check if user changed password after the token was issued
			if (queriesController.changedPasswordAfter(decoded.iat)) {
				return next();
			}

			// THERE IS A LOGGED IN USER
			res.locals.user = currentUser;
			return next();
		} catch (err) {
			return next();
		}
	}
	next();
};
