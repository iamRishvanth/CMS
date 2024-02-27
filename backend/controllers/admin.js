const { UserModel } = require('../models/user')
const bcrypt = require('bcrypt')

const getModerators = async (req,res) => {
    const moderators = await UserModel.find({role: "moderator"})
    res.status(200).json(moderators)
    return
}

const addModerator = async (req, res) => {
    const user = await UserModel.findOne({email: req.body.email})
    if(user){
        res.json({data: "Already a moderator with this email was added. try with another email"})
        return
    }
    UserModel.create({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        role: "moderator",
        catagory: req.body.catagory
    })
    res.status(201).json({data: "Moderator Added"})
    return
}

module.exports = {
    addModerator,
    getModerators
}