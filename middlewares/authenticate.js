const jwt = require('jsonwebtoken')
const User = require('../models/user')
const {HttpError} = require('../helpers/index')

const {SECRET_KEY} = process.env

const authenticate = async (req, res, next) => {
    const {authorization} = req.headers
    const [bearer, token] = authorization.split(" ")
    console.log(req.headers)
    console.log(bearer)
    console.log(token)

    if(bearer !== "Bearer") {
        next(HttpError(401))
    }
    try {
        const {id} = jwt.verify(token, SECRET_KEY)
  
        const user = await User.findById(id)
        if(!user || !user.token) {
            next(HttpError(401))
        }
        req.user = user
        next()
    }
    catch(err) {
       next(err)
    }
}

module.exports = authenticate