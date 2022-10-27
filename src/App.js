const express = require('express')

const routes = require('./routes')

require('./database/index.js')

class App {

    constructor () {
        this.server = express()

        this.middlewares()
        this.routes()
    }

    middlewares () {
        this.server.use(express.json())

        this.server.set('port', process.env.PORT || 3333)
    }

    routes () {
        this.server.use(routes)
    }
}

module.exports = new App().server