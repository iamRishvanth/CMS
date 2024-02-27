const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true,
        default: 'user'
    },
    catagory: {
        type: String,
        require: false,
        default: null
    },
    // upvoted: [
    //     { type: mongoose.Schema.Types.ObjectId, ref: 'Complaint' }
    // ]
})

const User = mongoose.model('User', UserSchema)

module.exports = {
    UserModel: User
}