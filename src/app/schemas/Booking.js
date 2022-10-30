const { Schema, model } = require('mongoose')

const BookingSchema = new Schema({
    date: {
        type: String,
        required: true,
    },
    approved: {
        type: Boolean,
    },
    user: {// Quem solicitou
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },  
    spot: {// Para qual spot
        type: Schema.Types.ObjectId,
        ref: 'Spot',
        required: true,
    } 
},{
    timestamps: true
})

module.exports = model('Booking', BookingSchema)