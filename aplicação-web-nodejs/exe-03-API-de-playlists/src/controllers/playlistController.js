const MusicModel    = require('../models/musicModel')
const PlaylistModel = require('../models/playlistModel')
const Playlists     = require('../models/playlists')

const playlists = new Playlists()

const Academia = new PlaylistModel('Academia', 'Hip Hop')
const Biscodazzo = new PlaylistModel('Biscodazz0_', ['Hip Hop', 'Pop', 'Funk'])
const GameMusic = new PlaylistModel('Game Music', 'Eletrônica')
const AnimationsMusic = new PlaylistModel('Animations Music', ['Pop', 'TikTok'])

playlists.addNewPlaylist( Academia )
playlists.addNewPlaylist( Biscodazzo )
playlists.addNewPlaylist( GameMusic )
playlists.addNewPlaylist( AnimationsMusic )
class PlaylistController {
   
    show(req, res) {

        const allPlaylists =  playlists.getAllPlaylists()
        res.render('index', { playlists: allPlaylists })
    }
    
    createPlaylist(req, res) {
        res.render('createPlaylist')
    }

    showAllPlaylists(req, res) {
        res.render('allPlaylists', {playlists: playlists})
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