const path = require('path');
const axios = require('axios')
const { body, check, validationResult } = require('express-validator');
const userRequest = require('../requests/userRequest');
const loginValidations = require('../middlewares/loginMid2');


const loginController = {
    index : (req, res) => {
       res.render("login");
    
    },
    login : [loginValidations, (req, res) => {
        
            
            const errors = validationResult(req, res);
            if (!errors.isEmpty()) {
                return res.render('login', { errors: errors.mapped() });
            } else {
              req.session.user = req.user;
              
              return res.render('admRegister' , {usuario : req.session.user});

            }
                                   
        
       
    }]    
    
}

module.exports = loginController;