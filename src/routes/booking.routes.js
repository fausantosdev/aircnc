const { Router } = require('express')

const bookingController = require('../app/controllers/BookingController')

const routes = Router()

routes.post('/spot/:spot_id/reservation', bookingController.store)
routes.get('/:id?', bookingController.index)

module.exports = routes