class Playlist {
    #playlists
    constructor( name='New Playlist', tags=[] ) {
        this.id     = this.generateID()
        this.name   = name
        this.tags   = tags
        this.musics = []
        this.#playlists = []
    }

    generateID() {
        return `${Math.floor(1000 + Math.random() * 9000)}`
    }

    addMusic( data ) {
        if (!data) {
            return 'Nenhuma música informada!'
        }
        data.forEach( music => music.id = this.generateID() )

        this.musics.push(...data)
    }

    removeMusic(id) {
        const musicToRemove = this.musics.filter( music => music.id === id )
        this.musics = this.musics.filter( music => music.id != id )
        
        console.log(musicToRemove)
    }
    
    getPlaylistByID(id) {
        const playlist = this.#playlists.filter( playlist => playlist.id == id )
        
        if (!playlist) {
            return 'Playlist não localizada!'
        }

        return playlist[0]
    }

    getMusicByID(id) {
        const music = this.musics.filter( music => music.id == id )
        
        if (!music) {
            return 'Musica não localizada!'
        }

        return music[0]
    }

    addPlaylist( data ) {
        if (!data) {
            return 'Nenhuma playlist informada!'
        }
        
        this.#playlists.push(data)
    }

    removePlaylist(id) {
        this.#playlists = this.#playlists.filter( playlist => playlist.id != id )
    }

    get all() {
        if (!this.#playlists) {
            return 'Nenhuma música cadastrada!'
        }
        return this.#playlists
    }

    get music() {
        if (!this.musics) {
            return 'Nenhuma música cadastrada!'
        }
        return this.musics
    }

}

module.exports = Playlist