require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrllocation = require('../controllers/location');


/* GET Locations page */
router.get('/about', ctrllocation.about);
router.get('/login', ctrllocation.login);
router.get('/menu', ctrllocation.menu);
router.get('/payment', ctrllocation.payment);

module.exports = router;