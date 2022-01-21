const sign_inController = require('../controllers/home.C')
const express = require('express')
const route = express.Router()
const homeController = require('../controllers/home.C')
const viewController = require('../controllers/viewController')
const teacherController = require('../controllers/teacher.C')
const userController = require('../controllers/user.C')
const courseController = require('../controllers/course.C')
const adminController = require('../controllers/adminController')
route.get('/', homeController.getHome)
route.get('/dis-courses', viewController.getDisableCourse);
route.get('/en-courses', viewController.getEnableCourse);
route.get('/list-courses', viewController.getListCourse);
route.get('/search-courses', viewController.getSearchCourse);
route.get('/course-info', viewController.getCourseInfor)
route.get('/user-info', userController.getInfo)
route.post('/user-info/change', userController.chageInfo)
route.post('/',teacherController.becomeTeacher)
route.get('/all-courses',userController.viewAllCourse )
route.post('/search', userController.searchCourse)
//teacher
route.get('/course/:courseid/', courseController.getCourse)
route.get('/teacher/my-courses',teacherController.getTeacherView)
//information of user
route.get('/user/info/:username/', userController.viewUserInfor)
route.get('/teacher/information', teacherController.getTeacherInfor)

//admin 
route.get('/course/:courseid/disable', adminController.enableCourse)
route.get('/course/:courseid/enable', adminController.disableCourse)
module.exports = route