const {Schema, model} = require('mongoose')

const contactSchema = new Schema({
    name: String,
    phone: String,
    favorite: Boolean
})

const Contact = model("contact", contactSchema)

module.exports = Contact