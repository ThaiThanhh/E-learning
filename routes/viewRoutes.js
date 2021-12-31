const express = require('express');
const viewController = require('../controllers/viewController');
// const authController = require('../controllers/authController');

const router = express.Router();

router.get('/dis-courses', viewController.getDisableCourse);
router.get('/en-courses', viewController.getEnableCourse);
router.get('/list-courses', viewController.getListCourse);
router.get('/search-courses', viewController.getSearchCourse);
router.get('/login-1', viewController.getLogin1Form);
router.get('/login-2', viewController.getLogin2Form);
router.get('/sign-up', viewController.getSignupForm);
router.get('/', viewController.getIndex);
module.exports = router;
