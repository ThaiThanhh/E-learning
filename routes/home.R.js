const sign_inController = require('../controllers/home.C')
const express = require('express')
const route = express.Router()
const homeController = require('../controllers/home.C')
const viewController = require('../controllers/viewController')
const teacherController = require('../controllers/teacher.C')
const userController = require('../controllers/user.C')

route.get('/', homeController.getHome)
route.get('/dis-courses', viewController.getDisableCourse);
route.get('/en-courses', viewController.getEnableCourse);
route.get('/list-courses', viewController.getListCourse);
route.get('/search-courses', viewController.getSearchCourse);
route.get('/teacher-information', teacherController.getTeacherInfor)
route.get('/course-info', viewController.getCourseInfor)
route.get('/user-info', userController.getInfo)
route.post('/',teacherController.becomeTeacher)
module.exports = route