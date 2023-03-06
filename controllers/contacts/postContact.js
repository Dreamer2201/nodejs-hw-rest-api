const { schemaContact } = require('../../shemas/shemaContacts')
const contacts = require('../../models/contacts')
const {HttpError} = require('../../helpers/index')

const postContact = async (req, res, next) => {
    try {
      const {error} = schemaContact.validate(req.body)
      if (error) {
        throw HttpError(400, "Missing required name field")
      }
      const data = await contacts.addContact(req.body)
      res.status(201).json(data)
    }
    catch(error) {
      next(error)
    }
  }

  module.exports = postContact