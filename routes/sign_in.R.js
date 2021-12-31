const sign_inController = require('../controllers/sign_in.C')
const express = require('express')
const route = express.Router()

route.get('/', sign_inController.getSignin)

route.post('/', sign_inController.login)
module.exports = route