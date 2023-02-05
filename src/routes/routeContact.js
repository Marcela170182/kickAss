const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contactController");

router.get('/Contact', contactController.index);
router.post('/Contact',contactController.create);


//view do admnin
router.get('/admContact', contactController.admContact);
router.get('/msgContact/:id', contactController.msgContact);



module.exports = router;