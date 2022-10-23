const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

router.get('/Register', registerController.index);
router.post('/Register', registerController.register);


module.exports = router;