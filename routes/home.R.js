const sign_inController = require('../controllers/home.C')
const express = require('express')
const route = express.Router()
const homeController = require('../controllers/home.C')
const viewController = require('../controllers/viewController')

route.get('/', homeController.getHome)
route.get('/dis-courses', viewController.getDisableCourse);
route.get('/en-courses', viewController.getEnableCourse);
route.get('/list-courses', viewController.getListCourse);
route.get('/search-courses', viewController.getSearchCourse);

module.exports = route