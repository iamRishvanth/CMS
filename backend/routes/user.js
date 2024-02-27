const { Router} = require('express')
const userContoller = require('../controllers/user')
const userAuthMiddleware = require('../middlewares/user')

const route = Router()

route.post('/post', userAuthMiddleware, userContoller.postComplaint)

route.get('/all-complaints', userAuthMiddleware, userContoller.getAllComplaints)

route.get('/my-complaints', userAuthMiddleware, userContoller.getMyComplaints)

module.exports = {
    userRoute: route
}