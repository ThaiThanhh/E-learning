exports.getHome = (req, res) => {
    if (!req.user) {
        res.status(200).render('home', {
            title: 'Trang chủ',
            layout:'main',
            isTeacher: false
        })
    }
    else if (req.user.role == 1) {
        res.status(200).render('home', {
            title: 'Trang chủ',
            isTeacher: true,
            layout:'main'
        })

    } else {
        res.status(200).render('home', {
            title: 'Trang chủ',
            layout:'main',
            isTeacher: false
        })
    }
}