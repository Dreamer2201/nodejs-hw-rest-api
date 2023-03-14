const express = require('express')
const isValid = require('../../middlewares/index')
const ctrl = require('../../controllers/index')

const router = express.Router()


router.get('/', ctrl.getContacts)

router.get('/:id', isValid, ctrl.getContactById)

router.post('/', ctrl.postContact)

router.delete('/:id', isValid, ctrl.deleteContact )

router.put('/:id', isValid, ctrl.updateContact)

router.patch('/:id/favorite', isValid, ctrl.updateFavoruteContact)

module.exports = router
