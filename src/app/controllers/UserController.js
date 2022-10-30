const User = require('../schemas/User')

class UserController {
    async store (req, res) {

        const { name, email } = req.body

        try {
            const userExixts = await User.findOne({ email })

            if(userExixts){
                throw new Error('Usuário já existe')
            }

            const user = await User.create({
                name,
                email,
            })

            return res.status(200).json({
                status: true,
                data: user
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
                data = await User.findById(id)
            }else{
                data = await User.find()
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

module.exports = new UserController()