class Playlists {
    #playlists = []
    constructor() {
        this.#playlists = []
    }

    addNewPlaylist(playlist) {
        this.#playlists.push({id: String(Math.floor( Math.random() * 9999 )) , playlist: playlist})
    }

    removePlaylist(id) {
        this.#playlists = this.#playlists.filter( item => item.id != id )
    }

    getAllPlaylists() {
        return this.#playlists.length != 0 ? this.#playlists : []
    }

    getPlaylistbyID(id) {
        return this.#playlists.filter( playlist => playlist.id === id )
    }

}


module.exports = Playlists