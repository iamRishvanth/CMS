const { Router} = require('express')
const moderatorMiddlerware = require('../middlewares/moderator')
const moderatorContoller = require('../controllers/moderator')

const route = Router()

route.get('/my-complaints', moderatorMiddlerware, moderatorContoller.getMyComplaints)

route.put('/update-complaint-status', moderatorMiddlerware, moderatorContoller.updateComplaintStatus)

module.exports = {
    moderatorRoute: route
}