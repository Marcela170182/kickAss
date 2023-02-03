const path = require("path");
const fs = require('fs');


const userRequest = require('../requests/userRequest');


const registerController = {
    index: (req, res) => {
        res.render('cadastro');
    },
    register: async (req, res) => {

        let successMsg = "Usuário cadastrado com sucesso!"


        let newUser = {

            ...req.body,
        }

        userRequest.createUser(newUser).
            then(userReturn => {
                res.render('cadastro', { successMsg: successMsg });
            })
            .catch(error => {
                if (error.code === 'ECONNREFUSED') {
                    return res.render('error', { error: 'Falha na comunicação com o servidor, por favor tente mais tarde!' });
                }
                return res.render('error', { error });
            })


    }


}


module.exports = registerController;