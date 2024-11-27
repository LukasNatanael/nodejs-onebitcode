const MusicModel    = require('../models/musicModel')
const PlaylistModel = require('../models/playlistModel')
const Playlists     = require('../models/playlists')

const playlists = new Playlists()

const newPlaylist = new PlaylistModel('Academia', 'Hip Hop')
playlists.addNewPlaylist( newPlaylist )
class PlaylistController {
   
    show(req, res) {

        const allPlaylists =  playlists.getAllPlaylists()
        res.render('index', { playlists: allPlaylists })
    }
    
    createPlaylist(req, res) {
        res.render('createPlaylist')
    }

    savePlaylist(req, res) {
        // const { name, tags } = req.body
        const { name, tags } = req.params
        const newPlaylist = new PlaylistModel(name, tags)

        playlists.addNewPlaylist( newPlaylist )

        // res.json({message: 'Playlist criada!', name: newPlaylist.name, tags: newPlaylist.tags })
    }
    deletePlaylist(req, res) {
        const { id } = req.params
        
        // playlists = playlists.forEach( playlist => playlist.id != id )

        playlists.removePlaylist(id)

        res.json({message: 'Playlist removida!', id: id})
    }
}

module.exports = PlaylistController