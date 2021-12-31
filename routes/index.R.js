const sign_inRoute =  require('./sign_in.R')
const sign_upRoute =  require('./sign_up.R')
const homeRoute = require('./home.R')
function Route(app){
    
    app.use('/', homeRoute)
    app.use('/signin', sign_inRoute)
    app.use('/signup', sign_upRoute)
}

module.exports = Route