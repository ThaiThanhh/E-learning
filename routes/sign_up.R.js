const sign_upController = require('../controllers/sign_up.C')
const express = require('express')
const route = express.Router()

route.get('/', sign_upController.getSignup)
// route.post('/', si)


// route.post('/', sign_upController.addUserToDB)
module.exports = route