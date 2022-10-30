const { Router } = require('express')

const userController = require('../app/controllers/UserController')

const routes = Router()

routes.post('/', userController.store)
routes.get('/:id?', userController.index)

module.exports = routes