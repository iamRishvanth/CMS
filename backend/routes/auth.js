const { Router} = require('express')
const authContoller = require('../controllers/auth')

const route = Router()

route.post('/signup',authContoller.signup)

route.post('/signin',authContoller.signin)

route.get('/logout',authContoller.logout)

module.exports = {
    authRoute: route
}