const express = require('express')
const router = express.Router()
const bookingsController = require('../controllers/bookingsController')

/**
 * App Routes
 */
router.get('/', bookingsController.homepage)

module.exports = router