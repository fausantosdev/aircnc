const mongoose = require('mongoose')

class Database {
    constructor() {
        this.init()
            .then(() => {
                console.log('~ database connected')
            })
            .catch(error => {
                console.log('x database connection error: ' + error)
            })
    }
    
    async init() {
        await mongoose.connect(process.env.MONGO_URL)
    }
}

module.exports = new Database()