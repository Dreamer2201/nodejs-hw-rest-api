const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const {SENDGRID_API_KEY} = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const sendEmail = async(data) => {
    try {
        const email = {...data, from: "ddreamer22011986@gmail.com"}
        await sgMail.send(email)
        return true
    }
    catch (error) {
        throw error
    }
}

module.exports = sendEmail

// const email = {
//     to: "ddreamer22011986@gmail.com",
//     from: "ddreamer22011986@gmail.com",
//     subject: "Hello",
//     html: "Hello, me!",
// }

// sgMail.send(email)
// .then(() => console.log('Email send success'))
// .catch(err => console.log(err))