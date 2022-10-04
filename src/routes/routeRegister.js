const express = require("express");
const router = express.Router();
const RegisterController = require("../controllers/RegisterControllers");

router.get('/Register', RegisterController.index);


module.exports = router;