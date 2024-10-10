const express = require("express");
const appController = require("./controllers/appController");
const tasksController = require("./controllers/tasksController");
const routes = express.Router()

routes.get('/', (req, res) => {
    res.render('index')
})

routes.get('/app', appController.index)
routes.post('/app/delete/:id', appController.delete)

routes.get('/app/tasks/:id', tasksController.index)

module.exports = routes