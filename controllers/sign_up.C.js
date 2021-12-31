const userM = require('../models/account.M')
const bcrypt = require('bcrypt');
const session = require('express-session')
const saltRounds = 10;

exports.getSignup = async (req, res) => {
        res.render('signup',{
            layout: false
        }) 
    }
    
