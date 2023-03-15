const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {loginSchema} = require('../../shemas/shemaUsers')
const User = require('../../models/user')
const {HttpError} = require('../../helpers/index')

const {SECRET_KEY} = process.env

const loginUser = async (req, res, next) => {
    try {
        const {error} = loginSchema.validate(req.body)
        if(error) {
            throw HttpError(400, "missing requires name field")
        }
        const {email, password} = req.body

        const user = await User.findOne({email})
        console.log(email)
        
        if(!user) {
            throw HttpError(401, "Email or password is invalid")
        }
        const comparePassword = await bcrypt.compare(password, user.password)

        console.log(password)
        console.log(user.password)
        
        console.log(comparePassword)
        if(!comparePassword) {
            throw HttpError(401, "Email or password is invalid")
        }
        const payload = {
            id: user._id,
        }
        const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"})

        res.json({
            token,
        })
    }
    catch(error) {
        next(error)
      }
}

module.exports = loginUser