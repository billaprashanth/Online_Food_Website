const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
require('dotenv').config();

// Define your API endpoints here
router.get('/locations', ctrlLocations.getEndpoint);
router.post('/locations', ctrlLocations.postEndpoint);

// PageHeader to get and retrive Api
router.get('/locations/:locationid', ctrlLocations.PageHeaderReadOne);
router.put('/locations/:locationid', ctrlLocations.updateEndpoint);
router.post('/locations/:locationid', ctrlLocations.postHeaderEndpoint);
router.delete('/locations/:locationid', ctrlLocations.deleteEndpoint);

// Payments to get and retrive Api
router.get('/locations/payments/:locationid', ctrlLocations.paymentReadOne);
router.put('/locations/payments/:locationid', ctrlLocations.paymentupdateEndpoint);
router.post('/locations/payments/:locationid', ctrlLocations.paymentpostHeaderEndpoint);
router.delete('/locations/payments/:locationid', ctrlLocations.paymentdeleteEndpoint);

// Menus to get and retrive Api
router.get('/locations/menus/:locationid', ctrlLocations.menuReadOne);
router.put('/locations/menus/:locationid', ctrlLocations.menuupdatePageHeader);
router.post('/locations/menus/:locationid', ctrlLocations.menupostPageHeader);
router.delete('/locations/menus/:locationid', ctrlLocations.menudeletePageHeader);

// signin to get and retrive Api
router.get('/locations/signins/:locationid', ctrlLocations.signinReadOne);
router.post('/locations/signins/:locationid', ctrlLocations.signinpostReadOne);
router.put('/locations/signins/:locationid', ctrlLocations.signinputReadOne);
router.delete('/locations/signins/:locationid', ctrlLocations.signindeleteReadOne);


// PopularDish to get and retrive Api
router.get('/locations/populardishes/:locationid', ctrlLocations.PopularDishReadOne);
router.post('/locations/populardishes/:locationid', ctrlLocations.popularpostEndpoint);
router.put('/locations/populardishes/:locationid', ctrlLocations.popularupdateEndpoint);
router.delete('/locations/populardishes/:locationid', ctrlLocations.populardeleteEndpoint);

module.exports = router;

