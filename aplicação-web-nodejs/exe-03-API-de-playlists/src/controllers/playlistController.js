const Playlist     = require('../models/playlists')
const playlists = new Playlist('Minhas Playlists')

const musics = [
    {
        name:   'Musica 1',
        artist: 'Artista 1',
        album:  'Album 1',
    },
    {
        name:   'Musica 2',
        artist: 'Artista 2',
        album:  'Album 2',
    },
]



console.clear()
const academia = new Playlist( 'Academia', [ 'rock', 'funk', 'rap' ] )
academia.addMusic( musics )

playlists.addPlaylist(academia)

console.log(playlists)

module.exports = {
    show( req, res ) {
        res.json({ allPlaylists: playlists.all })
    },
    getPlaylist(req, res) {
        res.json({ playlist: playlists })
    }
}