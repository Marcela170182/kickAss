const { Router } = require("express");
const express = require("express");
const router = express.Router();



router.get('/closeSession', (req, res) => {
    console.log(req.session.user);
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
            
        }
    });
});


module.exports = router;