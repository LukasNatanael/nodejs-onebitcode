const express = require('express')
const playlistController = require('./controllers/playlistController')
const routes  = express.Router()


routes.get('/', playlistController.showPlaylists)
routes.get('/playlist/:id', playlistController.getPlaylist)
routes.get('/playlist/:id/musics', playlistController.getMusics)
routes.get('/playlist/:id/music/:musicID', playlistController.getMusic)

routes.post('/playlist', playlistController.newPlaylist)
routes.post('/playlist/:id/music', playlistController.newMusic)

routes.delete('/playlist/:id', playlistController.deletePlaylist)
routes.delete('/playlist/:id/music/:musicID', playlistController.deleteMusic)

routes.put('/playlist/:id', playlistController.updatePlaylist)
routes.put('/playlist/:id/music/:musicID', playlistController.updateMusic)

module.exports = routes