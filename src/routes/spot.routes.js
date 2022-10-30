const { Router } = require('express')
const multer = require('multer')

const multerConfig = require('../config/multer')

const spotController = require('../app/controllers/SpotController')

const routes = Router()

const upload = multer(multerConfig.local)

routes.post('/', upload.single('thumbnail'),spotController.store)
routes.get('/:id?', spotController.index)

module.exports = routes