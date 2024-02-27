const { ComplaintModel } = require('../models/complaint')
const { UserModel } = require('../models/user')
const mongoose = require('mongoose')

const postComplaint = async (req,res) => {
    ComplaintModel.create({
        title: req.body.title,
        description: req.body.description,
        catagory: req.body.catagory,
        //status: req.body.status,
        postedBy: mongoose.Types.ObjectId.createFromHexString(req._id)
    })
    res.status(201).json({data: "Complaint Posted Succesfully"})
    return
}

const getAllComplaints = async (req, res) => {
    const complaints = await ComplaintModel.find({})
    res.status(200).json(complaints)
    return
}

const getMyComplaints = async (req, res) => {
    const user_id = mongoose.Types.ObjectId.createFromHexString(req._id)
    const complaints = await ComplaintModel.find({postedBy: user_id})
    res.status(200).json(complaints)
    return
}

module.exports = {
    postComplaint,
    getAllComplaints,
    getMyComplaints
}