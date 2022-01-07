const sign_inRoute =  require('./sign_in.R')
const sign_upRoute =  require('./sign_up.R')
const homeRoute = require('./home.R')
const siginController = require('../controllers/sign_in.C')
function Route(app){
    
    app.use('/', homeRoute)
    app.use('/signin', sign_inRoute)
    app.use('/signup', sign_upRoute)
    app.get('/signout', siginController.logOut)
}

module.exports = Route