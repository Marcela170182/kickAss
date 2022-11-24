const express = require ('express')
const router = express.Router();
const usuarioController = require('../controllers/usuariosController')

router.get('/', usuarioController.list)

router.post('/usuario', usuarioController.create)
router.put('/usuario', usuarioController.update)
router.delete('/usuario', usuarioController.delete)


module.exports = router;