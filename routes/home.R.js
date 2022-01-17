const sign_inController = require('../controllers/home.C')
const express = require('express')
const route = express.Router()
const homeController = require('../controllers/home.C')
const viewController = require('../controllers/viewController')
const teacherController = require('../controllers/teacher.C')
const userController = require('../controllers/user.C')
const courseController = require('../controllers/course.C')

route.get('/', homeController.getHome)
route.get('/dis-courses', viewController.getDisableCourse);
route.get('/en-courses', viewController.getEnableCourse);
route.get('/list-courses', viewController.getListCourse);
route.get('/search-courses', viewController.getSearchCourse);
route.get('/course-info', viewController.getCourseInfor)
route.get('/user-info', userController.getInfo)
route.post('/',teacherController.becomeTeacher)

//teacher
route.get('/course/:courseid/', courseController.getCourse)
route.get('/teacher/my-courses',teacherController.getTeacherView)
//information of user
route.get('/user/info/:username/', userController.viewUserInfor)
route.get('/teacher/information', teacherController.getTeacherInfor)
module.exports = route