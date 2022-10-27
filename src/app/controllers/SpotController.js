const Spot = require('../schemas/Spot')
const User = require('../schemas/User')

class SpotController {
    async store (req, res) {

        const { filename } = req.file
        const { company, price, techs } = req.body

        const { user_id } = req.headers

        const userExixts = await User.findById(user_id)

        if(!userExixts){
            throw new Error('Usuário não existe')
        }

        try {
            const spot = await Spot.create({
                user: user_id,
                thumbnail: filename,
                company,
                price,
                techs: techs.split(',').map(tech => tech.trim())
            })

            return res.status(200).json({
                status: true,
                data: spot
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

        const { tech } = req.query

        const { user_id } = req.headers

        try {
            if(user_id){
                if(id){
                    data = await Spot.find({ _id: id, user: user_id })
                        .populate({ path: 'user', select: 'name' })
                }else{
                    data = await Spot.find({ techs: tech, user: user_id })
                        .populate({ path: 'user', select: 'name' })
                }
            }else{
                if(id){
                    data = await Spot.findById(id)
                        .populate({ path: 'user', select: 'name' })
                }else{
                    if(tech){
                        data = await Spot.find({ techs: tech })
                            .populate({ path: 'user', select: 'name' })
                    }else{
                        data = await Spot.find()
                            .populate({ path: 'user', select: 'name' })
                    }
                }
            }

            return res.status(200).json({
                status: true,
                data
            })
            
        } catch (error) {
            return res.status(400).json({
                status: false,
                message: error
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

module.exports = new SpotController()