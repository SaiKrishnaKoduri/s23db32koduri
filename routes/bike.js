var express = require('express');
const bike_controlers= require('../controllers/bike');
var router = express.Router();
/* GET bike */
router.get('/', bike_controlers.bike_view_all_Page );
module.exports = router;