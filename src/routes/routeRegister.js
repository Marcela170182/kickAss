const express = require("express");
const router = express.Router();
const RegisterController = require("../controllers/registerControllers");

router.get('/Register', RegisterController.index);


module.exports = router;