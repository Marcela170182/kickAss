const express = require("express");
const router = express.Router();

const authLogin = require('../middlewares/authLogin');
const salesController = require("../controllers/salesController");

//list
router.get('/listSale', salesController.list);
//create product 
router.get('/sales', salesController.index);
router.post('/sale', salesController.create);
//update product
router.get('/editSale/:id', salesController.edit);
router.put('/editSale/:id', salesController.update);
//destroy
router.delete('/deleteSale/:id', salesController.destroy); 

module.exports = router;