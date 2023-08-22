var express = require('express');
var router = express.Router();
var ctrllocation = require('../controllers/location');
var ctrlothers = require('../controllers/others');


/* GET Locations page */
router.get('/about', ctrllocation.about);
router.get('/login', ctrllocation.login);
router.get('/menu', ctrllocation.menu);
// router.get('/location3', ctrllocation.locationInfo3);
// router.get('/location/review/new', ctrllocation.addReview);

/*GET others page */
// router.get('/about', ctrlothers.about);

// router.get('/signin', ctrlothers.signin);

// router.get('/register', ctrlothers.register);

module.exports = router;