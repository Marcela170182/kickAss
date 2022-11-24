const db = require('../database/models/Usuario');
const Usuario = db.Usuario;

const usuarioController = {
    list: (req, res) => {
        usuario.FindAll()
        .then(usuario => {
            res.status(200).json(usuario)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
}

module.exports = usuarioController;