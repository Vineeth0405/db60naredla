var express = require('express');
var router = express.Router();
const vehicle_controllers = require('../controllers/vehicle')

/* GET home page. */
router.get('/', vehicle_controllers.vehicle_view_all_Page);

module.exports = router;
