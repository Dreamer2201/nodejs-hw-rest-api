const express = require('express')
const Joi = require('joi')
const {HttpError} = require('../../helpers/index')
const contacts = require('../../models/contacts')

const router = express.Router()

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required()
});

router.get('/', async (req, res, next) => {
  try {
    const data = await contacts.listContacts()
    res.status(200).json(data)
  } 
  catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const {contactId} = req.params
    const contact = await contacts.getContactById(contactId)
    if(!contact) {
      throw HttpError(404, "Contact is not found")
    }
    res.status(200).json(contact)
  }
  catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {error} = schema.validate(req.body)
    if (error) {
      throw HttpError(400, "Missing required name field")
    }
    const data = await contacts.addContact(req.body)
    res.status(201).json(data)
  }
  catch(error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const {contactId} = req.params
    const removeContact = await contacts.removeContact(contactId)
    if(!removeContact) {
      throw HttpError(404, "Not found")
    }
    res.status(200).json({
      message: "Contact deleted"
    })
  }
  catch (error) {
    next(error)
  }
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const {error} = schema.validate(req.body)
    if (error) {
      throw HttpError(400, "Missing fields")
    }
    const {contactId} = req.params
    const data = await contacts.updateContact(contactId, req.body)
    if(!data) {
      throw HttpError(404, "Not found")
    }
    res.status(200).json(data)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
