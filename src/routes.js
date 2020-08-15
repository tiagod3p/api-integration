const express = require('express')

const PipeDriveController = require('./controllers/PipeDriveController')
const BlingController = require('./controllers/BlingController')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.redirect('/deals')
})

routes.get('/deals', PipeDriveController.index)
routes.get('/deals/bling', BlingController.index)


module.exports = routes