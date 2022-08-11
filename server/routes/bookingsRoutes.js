const express = require('express')
const router = express.Router()
const bookingsController = require('../controllers/bookingsController')

/**
 * App Routes
 */
router.get('/', bookingsController.homepage)
router.get('/submit-bookings', bookingsController.submitBookings)
router.post('/submit-bookings', bookingsController.submitBookingsOnPost)
router.get('/show-bookings/:id', bookingsController.exploreBookings)
router.get('/edit-bookings/', bookingsController.updateBookings)
// router.delete('/delete-bookings/:id', bookingsController.deleteBookings)

module.exports = router