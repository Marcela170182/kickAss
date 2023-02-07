const express = require("express");
const router = express.Router();
const multer = require('multer');
const authLogin = require('../middlewares/authLogin');
const admRegisterController = require("../controllers/admRegisterController");
const path = require('path');

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        const folder = path.join(__dirname,'../../public/img' );
        callback(null, folder);
    },
    filename: (req, file, callback) => {
        const imageName = Date.now() + file.originalname;
        callback(null, imageName);
    }

});

const upload = multer ({ storage : multerDiskStorage });



//list
router.get('/list', authLogin, admRegisterController.list);
//create product 
router.get('/products', authLogin, admRegisterController.index);
router.post('/products', upload.single('img'), admRegisterController.create);
//update product
router.get('/edit/:id', authLogin, admRegisterController.edit);
router.put('/edit/:id', upload.single('img'), admRegisterController.update);
//destroy
router.delete('/delete/:id', admRegisterController.destroy); 

module.exports = router;