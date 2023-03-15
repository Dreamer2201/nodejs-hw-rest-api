const express = require("express")
const ctrl = require('../../controllers/users/index')
const router = express.Router()

router.post('/register', ctrl.postUser)
router.post('/login', ctrl.loginUser)

module.exports = router