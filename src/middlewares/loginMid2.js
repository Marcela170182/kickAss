const express = require("express");
const axios = require('axios')
const { body, check, validationResult } = require('express-validator');

const loginValidations =     
    

        [check('email')
        .isEmail()
        .withMessage('Email inválido')
        .custom(async ( value , {req} ) => {
    
        try {
                const response = await axios.get(`http://localhost:3000/user/${value}`);
                const user = response.data
                
                if (!user) {
                    throw new Error('Usuário não encontrado');
                }
                
                req.user = response.data
                return true;
            } 
        
        catch (error) {
           
            if(error.response.status === 404){
              throw new Error('Usuário não encontrado')
            }else{
              throw new Error('Erro ao conectar com o servidor')
            }
        }
     
        }
        ),
         check('password')
        .isLength({ min: 4 })
        .withMessage('A senha deve ter no mínimo 4 caracteres')
        .custom(async ( value , {req} ) => {
            try {
                const email = req.body.email;
                const responsePassword = await axios.get(`http://localhost:3000/user/${email}`);
                const userPassword = responsePassword.data
                if (!userPassword) {
                    throw new Error('Usuário não encontrado');
                }
                if(userPassword.password !== value) {
                  throw new Error("Senha incorreta");
                }
                return true;
            } catch (error) {
              
                if(error.responsePassword.status === 404){
                    throw new Error('Usuário não encontrado')
                }else{
                    throw new Error('Erro ao conectar com o servidor')
                }
            }
        }
        )
        ]

    
        


module.exports = loginValidations;