const express = require('express')
const playlistController = require('./controllers/playlistController')
const playlistsRoutes  = express.Router()


playlistsRoutes.get('/', playlistController.showPlaylists)
playlistsRoutes.get('/:id', playlistController.getPlaylist)
playlistsRoutes.get('/:id/musics', playlistController.getMusics)
playlistsRoutes.get('/:id/music/:musicID', playlistController.getMusic)

playlistsRoutes.post('/', playlistController.newPlaylist)
playlistsRoutes.post('/:id/music', playlistController.newMusic)

playlistsRoutes.delete('/:id', playlistController.deletePlaylist)
playlistsRoutes.delete('/:id/music/:musicID', playlistController.deleteMusic)

playlistsRoutes.put('/:id', playlistController.updatePlaylist)
playlistsRoutes.put('/:id/music/:musicID', playlistController.updateMusic)

module.exports = playlistsRoutes