const {isValidObjectId} = require('mongoose')

const {HttpError} = require('../helpers/index')

const isValidId = (req, res, next) => {
    const {id} = req.params
    if(!isValidObjectId(id)) {
        next(HttpError(404, "Invalid id"))
    }
    next()
}

module.exports = isValidId