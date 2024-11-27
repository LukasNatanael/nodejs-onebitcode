const express = require('express')
const PlaylistController = require('./controllers/playlistController')
const routes  = express.Router() 

const playlistController = new PlaylistController()

routes.get('/', playlistController.show)
routes.get('/playlist', playlistController.createPlaylist)

// Dados com JSON
// routes.post('/playlist', playlistController.createPlaylist)

// Dados com PARÂMETROS
routes.post('/playlist/:name/:tags', playlistController.savePlaylist)
routes.get('/playlist/:name/:tags', playlistController.show)

routes.delete('/playlist/:id', playlistController.deletePlaylist)

module.exports = routes