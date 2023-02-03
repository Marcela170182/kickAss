const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contactController");

router.get('/Contact', contactController.index);
router.post('/Contact',contactController.create);



module.exports = router;