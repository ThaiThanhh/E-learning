const courseM = require('../models/course.M')
const db = require('../models/db.M')
exports.getHome = async (req, res) => {
    const courses = await db.getCourses()
    const homeCourses = courses.slice(0, 4)
    console.log(req.user)
    if (!req.user) {
        console.log('1')
        res.status(200).render('home', {
            title: 'Trang chủ',
            layout:'main',
            homeCourses: homeCourses,
            isTeacher: false
        })
    }
    else if (req.user.role == 1) {
        console.log('2')
        res.status(200).render('home', {
            title: 'Trang chủ',
            isTeacher: true,
            homeCourses: homeCourses,
            layout:'main'
        })

    } else {
        res.status(200).render('home', {
            title: 'Trang chủ',
            layout:'main',
            homeCourses: homeCourses,
            isTeacher: false
        })
    }
}