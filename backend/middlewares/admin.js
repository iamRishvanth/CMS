require('dotenv').config({path: '../.env'})
const jwt = require('jsonwebtoken')

function adminAuthMiddleware(req, res, next){
    const token = req.cookies.jwt;
    if (!token) {
        res.status(403).json({data: "You dont have any access token, Re-Login and continue"});
        return
    }
    try {
        const data = jwt.verify(token, process.env.JSON_SECRET_KEY);
        if(data.role != 'admin'){
            res.status(403).json({data: `You have '${data.role}' access token, but you need 'admin' access token to perform this operation`})
            return
        }
        req.email = data.email;
        req.role = data.role;
        req.catagory = data.catagory;
        req._id = data._id;
        next();
        return
    } catch {
        res.status(403).json({data: "Invalid Access Token"});
        return
    }
}

module.exports = adminAuthMiddleware;