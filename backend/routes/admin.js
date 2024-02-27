const { Router} = require('express')
const adminController = require('../controllers/admin')
const adminAuthMiddleware = require('../middlewares/admin')

const route = Router()

route.get('/get-moderators', adminAuthMiddleware, adminController.getModerators)

route.post('/add-moderator', adminAuthMiddleware, adminController.addModerator)

module.exports = {
    adminRoute: route
}