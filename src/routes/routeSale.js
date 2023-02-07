const express = require("express");
const router = express.Router();

const authLogin = require('../middlewares/authLogin');
const salesController = require("../controllers/salesController");


router.get('/listSale', authLogin, salesController.list);

//router.get('/sales', salesController.index);
router.post('/sale', salesController.create);

//router.get('/editSale/:id', salesController.edit);
//router.put('/editSale/:id', salesController.update);

//router.delete('/deleteSale/:id', salesController.destroy); 

module.exports = router;