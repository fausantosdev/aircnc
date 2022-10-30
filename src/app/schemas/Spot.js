const { Schema, model } = require('mongoose')

const SpotSchema = new Schema({
    thumbnail: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },   
    price: {
        type: Number,
        required: true,
    },  
    techs: [{
        type: String,
    }],  
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },  
},{
    timestamps: true
})

module.exports = model('Spot', SpotSchema)