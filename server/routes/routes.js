const express = require('express')
const router = express.Router()

const controllers = require('../controllers/controllers')

router.post('/login', controllers.login_complete)
router.post('/refresh', controllers.refresh_complete)

module.exports = router