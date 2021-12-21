const express = require('express');
const viewController = require('../controllers/viewController');
// const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', viewController.getLoginForm);
router.get('/sign-up', viewController.getSignupForm);
router.get('/index', viewController.getIndex);
module.exports = router;
