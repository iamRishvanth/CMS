const mongoose = require('mongoose')

const ComplaintSchema = new mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    catagory: {
        type: String,
        require: true
    },
    status: {
        type: String,
        default: 'Posted',
        require: true
    },
    // upvotes: [
    //     { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    // ]
})

const Complaint = mongoose.model('Complaint', ComplaintSchema)

module.exports = {
    ComplaintModel: Complaint
}