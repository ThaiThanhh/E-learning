const db = require('../models/db.M')
exports.enableCourse = async(req, res) => {
    const courseid = req.params.courseid 
    const course = await db.getCourseByID(courseid)
    await db.updateStatusCourse(courseid, 0)
    res.redirect(`/course/${course.coursename}?courseid=${courseid}`)
}
exports.disableCourse = async(req, res) => {
    const courseid = req.params.courseid 
    const course = await db.getCourseByID(courseid)
    await db.updateStatusCourse(courseid, 1)
    res.redirect(`/course/${course.coursename}?courseid=${courseid}`)
}