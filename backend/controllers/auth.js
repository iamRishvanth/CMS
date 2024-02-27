const {UserModel} = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config({path: '../.env'})

const signup = async (req, res) => {
    const {name, email, password, role} = req.body
    if(role != 'user'){
        res.status(200).json({data: "only allowed to create new account with 'user' role"})
        return
    }
    const user = await UserModel.findOne({email: email})
    if(user){
        res.json({data: "You already have a account, please sign in"})
        return
    }
    UserModel.create({
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10),
        role: role
    })
    res.status(200).json({data: "Account Created Sucessfully, Please Sign in"})
    return
}

const signin = async (req, res) => {
    const {email, password} = req.body
    const userDetails = await UserModel.findOne({email})
    if(!userDetails){
        res.status(200).json({data: "No Account found with this eamil, please enter correct right one or signup"})
        return
    }
    try{
        if(await bcrypt.compare(password, userDetails.password)){
            const jwtToken = await jwt.sign({
                _id: userDetails._id,
                email: userDetails.email, 
                role: userDetails.role,
                catagory: userDetails.catagory
            }, process.env.JSON_SECRET_KEY)

            res.cookie('jwt', jwtToken 
            ,{
                // httpOnly: true,
                // secure: true,
                // sameSite: true,
                maxAge: 7 * 86400 * 1000
            }
            ).status(200).json({data: 'Signed In Succesfully', role: userDetails.role})
            return
        }else{
            res.status(200).json({data: 'Incorrect Password'})
            return
        }
    }catch{
        res.status(200).json({data: 'Something went wrong in server'})
        return
    }
}

const logout = (req, res) => {
    res
    .clearCookie("jwt")
    .status(200)
    .json({ data: "Successfully logged out"})
    return
};

module.exports = {
    signin,
    signup,
    logout
}

