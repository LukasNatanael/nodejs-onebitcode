const express = require('express')
const playlistController = require('./controllers/playlistController')
const routes  = express.Router()


routes.get('/', playlistController.show)
routes.get('/playlist/:id', playlistController.getPlaylist)
routes.get('/playlist/:id/musics', playlistController.getMusics)
routes.get('/playlist/:id/music/:musicID', playlistController.getMusic)

routes.post('/playlist', playlistController.newPlaylist)

module.exports = routes