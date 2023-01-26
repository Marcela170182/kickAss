const express = require("express");
const router = express.Router();

const authLogin = require('../middlewares/authLogin');
const admRegisterController = require("../controllers/admRegisterController");

//list
router.get('/list',authLogin, admRegisterController.list);
//create product 
router.get('/products',authLogin, admRegisterController.index);
router.post('/products', admRegisterController.create);
//update product
router.get('/edit/:id', admRegisterController.edit);
router.put('/edit/:id', admRegisterController.update);
//destroy
router.delete('/delete/:id', admRegisterController.destroy); 

module.exports = router;