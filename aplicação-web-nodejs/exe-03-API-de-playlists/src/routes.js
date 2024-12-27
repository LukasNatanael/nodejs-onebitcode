const express = require('express')
const playlistController = require('./controllers/playlistController')
const routes  = express.Router()


routes.get('/', playlistController.show)
routes.get('/playlist/:id', playlistController.getPlaylist)


module.exports = routes