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
    // GET /
    showPlaylists( req, res ) {
        res.json({ allPlaylists: playlists.all })
    },

    // GET /playlist/:id
    getPlaylist(req, res) {
        const { id } = req.params
        const currentPlaylist = playlists.getPlaylistByID(id)
        res.json({ playlist: currentPlaylist })
    },

    // GET /playlist/:id/musics
    getMusics(req, res) {
        const { id } = req.params
        const currentPlaylist = playlists.getPlaylistByID(id)
        res.json({ musics: currentPlaylist.musics })
    },

    // GET /playlist/:id/musics/:musicID
    getMusic(req, res) {
        const { id, musicID } = req.params
        const currentPlaylist = playlists.getPlaylistByID(id)
        const music = currentPlaylist.getMusicByID(musicID)
        
        res.json({ music: music })
    },
    
    // POST /playlist/:id
    newPlaylist(req, res) {
        const { name, tags } = req.body
        const newPlaylist = new Playlist(name, tags)
        playlists.addPlaylist( newPlaylist )
        
        res.json({ playlist: newPlaylist })
    },
    
    // POST /playlist/:id/music
    newMusic(req, res) {
        const { id } = req.params
        const { name, artist, album } = req.body
        const currentPlaylist = playlists.getPlaylistByID(id)
        currentPlaylist.addMusic([{ name, artist, album }])
        
        res.json({ musics: currentPlaylist.musics })
    },

    // DELETE /playlist/:id
    deletePlaylist(req, res) {
        const { id } = req.params
        playlists.removePlaylist(id)
        
        res.json({ message: 'Playlist deletada!' })
    },
    
    // DELETE /playlist/:id/music/:musicID
    deleteMusic(req, res) {
        const { id, musicID } = req.params
        const currentPlaylist = playlists.getPlaylistByID(id)
        currentPlaylist.removeMusic(musicID)
        
        res.json({ message: 'Musica deletada!' })
    },
    
    // PUT /playlist/:id
    updatePlaylist(req, res) {
        const { id } = req.params
        const { name, tags } = req.body

        const currentPlaylist = playlists.getPlaylistByID(id)

        if ( typeof name === 'string' ) {
            currentPlaylist.name = name
        }
        
        if ( typeof tags === 'object' ) {
            currentPlaylist.tags = tags
        }

        res.json({ message: 'Dados da playlist atualizados!' })
    },

    // PUT /playlist/:id/music/:musicID
    updateMusic(req, res) {
        const { id, musicID } = req.params
        const { name, artist, album } = req.body
        const currentPlaylist = playlists.getPlaylistByID(id)
        const music = currentPlaylist.getMusicByID(musicID)

        if (typeof name === 'string') {
            music.name = name
        }

        if (typeof artist === 'string') {
            music.artist = artist
        }

        if (typeof album === 'string') {
            music.album = album
        }

        res.json({ message: 'Dados da música atualizados!' })

    }
}