const express = require("express");
const router = express.Router();

const ContactController = require("../controllers/ContactControllers");

router.get('/Contact', ContactController.index);



module.exports = router;