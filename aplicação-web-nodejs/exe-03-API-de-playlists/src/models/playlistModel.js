const MusicModel = require('../models/musicModel')
class PlaylistModel {
    #id
    #name
    #tags = []
    #musics = []
    constructor( name, tags ) {
        if ( !name || !tags ) {
            return console.log('Dados insuficientes para cadastro!')
        }

        this.#id   = String(Math.floor( Math.random() * 9999 ))  
        this.#name = name
        this.#tags = []

        if (typeof tags === 'object') {
            this.#tags.push(...tags)
        }
        else {
            this.#tags.push(tags)
        }
    }

    newMusic({ title, year, artist, album }) {
        if ( !title || !year || !artist || !album ) {
            return console.log('Os dados informados são insuficientes para cadastro!')
        }

        const data = new MusicModel(title, year, artist, album)
        this.#musics.push( data )

    }

    removeMusic(id) {
        if ( !id ) {
            return console.log('Informe o ID da música a ser removida!')
        }

        this.#musics = this.#musics.filter( music => music.id != id )

    }

    newTag(tags) {
        if (!tags) {
            return console.log('Por favor, informe pelo menos uma tag!')
        }

        if (typeof tags === 'object') {
            this.#tags.push(...tags)
            // return console.log('Novas tags foram adicionadas a playlist!')
        }
        else {
            this.#tags.push(tags)
            // return console.log('Uma nova tag foi adicionada a playlist!')
        }
    }
    
    deleteTag(tagsToDelete) {
        if (!tagsToDelete) {
            return console.log('Por favor, informe ao menos uma tag!')
        }

        if (typeof tagsToDelete === 'object') {
            tagsToDelete.forEach( tag => {
                this.#tags = this.#tags.filter( tagItem => tagItem != tag)
            })
        }
        else {
            this.#tags = this.#tags.filter( tag => tag != tagsToDelete)
        }

    }

    get data() {
        if ( !this.#name ) {
            return 'Os dados informados são insuficientes para cadastro!'
        }

        return {
            id:     this.#id,
            name:   this.#name,
            tags:   this.#tags,
            musics: this.#musics
        }

    }

    get tags() {
        return this.#tags
    }

    get name() {
        return this.#name
    }
    get musics() {
        return this.#musics
    }

    getAllMusics(info='fullData') {
        const musics = []
        this.#musics.forEach( music => {
            musics.push(music.data[info])
        } )

        return musics
    }
}

module.exports = PlaylistModel