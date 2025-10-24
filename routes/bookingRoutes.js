 const express = require('express');
const router = express.Router();
const { handleBooking } = require('../controllers/bookingController');

router.post('/', handleBooking);

module.exports = router;
