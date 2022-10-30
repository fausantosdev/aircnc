const { Router } = require('express')

const userRoutes = require('./user.routes')
const spotRoutes = require('./spot.routes')
const bookingRoutes = require('./booking.routes')

const routes = Router()

routes.use('/user', userRoutes)
routes.use('/spot', spotRoutes)
routes.use('/booking', bookingRoutes)

module.exports = routes