const express = require('express')
const PlaylistController = require('./controllers/playlistController')
const routes  = express.Router() 

const playlistController = new PlaylistController()

routes.get('/', playlistController.show)
routes.get('/playlist', playlistController.createPlaylist)

routes.get('/teste', playlistController.teste)
// Dados com JSON
// routes.post('/playlist', playlistController.createPlaylist)

// Dados com PARÂMETROS
routes.post('/playlist/:name/:tags', playlistController.savePlaylist)
routes.get('/playlist/:name/:tags', playlistController.show)
routes.get('/playlist/all', playlistController.showAllPlaylists)

routes.get('/playlist/music', playlistController.newMusic)
routes.post('/playlist/music', playlistController.saveMusic)

routes.get('/playlist/artists', playlistController.newArtist)
routes.post('/playlist/artists', playlistController.saveArtist)

// routes.post('/playlist/music/:imgLink/:name/:artist', playlistController.saveMusic)



routes.delete('/playlist/:id', playlistController.deletePlaylist)

module.exports = routes