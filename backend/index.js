const express = require("express")
const mongoose = require('mongoose')
require('dotenv').config({path: './.env'})
// const { config } = require("dotenv")
mongoose.connect(process.env.MONGO_DB_CONNECTION_URL)
const cors = require('cors')
const {userRoute} = require('./routes/user')
const {moderatorRoute} = require('./routes/moderator')
const {adminRoute} = require('./routes/admin')
const { authRoute } = require("./routes/auth")
const cookieParser = require("cookie-parser")
const app = express()


app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true,
    sameSite: 'none'
}))
app.use(express.json())
app.use(cookieParser())

app.use('/auth',authRoute)
app.use('/user',userRoute)
app.use('/moderator',moderatorRoute)
app.use('/admin',adminRoute)

app.listen(3000,() => { console.log('Server listening to the port 3000') } )