const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contactController");
const authLogin = require('../middlewares/authLogin');


router.get('/Contact', contactController.index);
router.post('/Contact',contactController.create);


//view do admnin
router.get('/admContact', authLogin, contactController.admContact);
router.get('/msgContact/:id', authLogin, contactController.msgContact);



module.exports = router;