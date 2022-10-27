const Booking = require('../schemas/Booking')
const Spot = require('../schemas/Spot')

class BookingController {
    async store (req, res) {

        const { date } = req.body

        const { user_id } = req.headers

        const { spot_id } = req.params    

        try {

            const spot = await Spot.findById(spot_id)
                .populate({ path: 'user', select: 'name' })

            if(spot.user._id == user_id){
                throw new Error('O spot é seu, seu doente...')
            }

            const booking = await Booking.create({
                user: user_id,
                spot: spot_id,
                date
            })

            return res.status(200).json({
                status: true,
                data: booking
            })
        } catch (error) {
            return res.status(400).json({
                status: false,
                message: error.message
            })
        }
    }

    async index (req, res) {

        const { id } = req.params

        let data = null

        try {
            if(id){
                data = await Booking.findById(id)
                    .populate('spot')
                    .populate('user')
                    
            }else{
                data = await Booking.find()
                    .populate('spot')
                    .populate('user')
            }

            return res.status(200).json({
                status: true,
                data
            })
            
        } catch (error) {
            return res.status(400).json({
                status: false,
                message: error.message
            })
        }
    }

    update (req, res) {
        return res.status(200).json({
            ok: true
        })
    }

    delete (req, res) {
        return res.status(200).json({
            ok: true
        })
    }
}

module.exports = new BookingController()