const MusicModel   = require('../models/musicModel')
const PlaylistModel = require('../models/playlistModel')


class MusicController {

    addMusic(req, res) {
        const { title, year, artist, album } = req.body
        const music = new MusicModel( title, year, artist, album )
    }

    remMusic(req, res) {}
}