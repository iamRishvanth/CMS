const mongoose = require('mongoose')
const { ComplaintModel } = require('../models/complaint')

const getMyComplaints = async (req, res) => {
    const complaints = await ComplaintModel.find({catagory: req.catagory})
    res.status(200).json(complaints)
    return
}

const updateComplaintStatus = async (req, res) => {
    await ComplaintModel.findByIdAndUpdate({ _id: req.body.post_id},{status: req.body.newStatus})
    res.status(200).json({data: "status updated"})
    return
}

module.exports = {
    getMyComplaints,
    updateComplaintStatus
}