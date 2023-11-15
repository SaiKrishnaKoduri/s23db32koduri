var express = require('express');
const bike_controlers= require('../controllers/bike');
var router = express.Router();
/* GET bike */
router.get('/', bike_controlers.bike_view_all_Page );
module.exports = router;
// GET request for one costume.
router.get('/bike/:id', bike_controlers.bike_detail);
/* GET detail costume page */
router.get('/detail', bike_controlers.bike_view_one_Page);
/* GET create costume page */
router.get('/create', bike_controlers.bike_create_Page);
/* GET create update page */
router.get('/update', bike_controlers.bike_update_Page);
/* GET delete costume page */
router.get('/delete', bike_controlers.bike_delete_Page);
