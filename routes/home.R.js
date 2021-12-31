const sign_inController = require('../controllers/home.C')
const express = require('express')
const route = express.Router()
const homeController = require('../controllers/home.C')

route.get('/', homeController.getHome)

module.exports = route