const express = require("express");
const appController = require("./controllers/appController");
const routes = express.Router()

routes.get('/', (req, res) => {
    res.render('index')
})

routes.get('/app', appController.index)
routes.post('/app/delete/:id', appController.delete)

module.exports = routes