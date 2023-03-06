const express = require('express')

const ctrl = require('../../controllers/index')

const router = express.Router()


router.get('/', ctrl.getContacts)

router.get('/:id', ctrl.getContactById)

router.post('/', ctrl.postContact)

router.delete('/:id', ctrl.deleteContact )

router.put('/:id', ctrl.updateContact)

module.exports = router
