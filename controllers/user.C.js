const userM = require('../models/user.M')
const db = require('../models/db.M')
const teacherM = require('../models/teacher.M')
exports.getInfo =  async(req, res) => {
    const userR = req.user
    if (!userR) {
        return res.redirect('/signin')
    }
    const user = await userM.getByID(userR.userid)
    res.status(200).render('user-information', {
        title: 'Thông tin cá nhân',
        user: user
    })
}

exports.viewUserInfor = async (req, res) => {
    const userId = req.query.userid
    const user = await db.getUserInfo(userId)
    user.gender = (user.gender == 'M') ? 'Nam' : 'Nữ' 
    const isMale = (user.gender == 'M') ? true : false
    const courses = await db.getCoursesOfTeacher(userId)
    res.status(200).render('other-user-information', {
        title: 'Thông tin cá nhân',
        user: user,
        courses: courses,
        isMale: isMale
    })
}
exports.chageInfo = async (req, res) => {
    const userID = req.user.userid
    console.log(userID)
    const rs = await db.changeInfo(req.body, userID)
    res.redirect('/user-info')
}

exports.viewAllCourse = async (req, res) => {
    const courses = await db.getCourses()
    res.status(200).render('list-courses', {
        courses: courses
    })
}
exports.searchCourse = async (req, res) => {
    const searchText = req.body
    const courses = await db.searchCourses(searchText)
    console.log(courses)
    res.status(200).render('list-courses', {
        courses: courses
    })
}

exports.addCourse = async (req, res) =>{
    const userID = req.user.userid;
    console.log(req.user.userid);
    const {course_name, start_date, end_date, fee, capacity, description} = req.body;
    await db.addCourse(userID, course_name, start_date, end_date, fee, capacity, description)
    res.redirect('/teacher/my-courses')
}