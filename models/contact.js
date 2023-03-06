const {Schema, model} = require('mongoose')

const contactSchema = new Schema({
        name: {
          type: String,
          required: [true, 'Set name for contact'],
        },
        email: {
          type: String,
        },
        phone: {
          type: String,
        },
        favorite: {
          type: Boolean,
          default: false,
        },
})

contactSchema.post("save", (err, data, next) => {
    console.log(err.code)
    console.log(err.name)
    next()
})

const Contact = model("contact", contactSchema)

module.exports = Contact