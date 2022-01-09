exports.getHome = (req, res) => {
    console.log(req.user)
    res.status(200).render('home', {
        title: 'Trang chủ',
        layout:'main'
    })
}