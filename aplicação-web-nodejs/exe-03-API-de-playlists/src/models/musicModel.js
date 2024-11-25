class MusicModel {
    #id
    #title
    #year
    #artist
    #album
    constructor( title, year, artist, album ) {
        if ( !title || !year || !artist || !album ) {
            return console.log('Dados insuficientes para cadastro!')
        }

        this.#id     = String(Math.floor( Math.random() * 9999 ))  
        this.#title  = title 
        this.#year   = year  
        this.#artist = artist
        this.#album  = album 
    }

    get data() {
        if ( !this.#title || !this.#year || !this.#artist || !this.#album ) {
            return 'Os dados informados são insuficientes para cadastro!'
        }

        const data = {
            id:     this.#id,
            title:  this.#title,
            year:   this.#year,
            artist: this.#artist,
            album:  this.#album
        }
        
        return {
            fullData: data,
            id:     this.#id,
            title:  this.#title,
            year:   this.#year,
            artist: this.#artist,
            album:  this.#album
        }

    }

    get title() {
        return this.#title
    }

    set data({ title, year, artist, album }) {

        if (title) {
            this.#title = title
        }
        if (year) {
            this.#year = year
        }
        if (artist) {
            this.#artist = artist
        }
        if (album) {
            this.#album = album
        }

        return console.log('Dados atualizados!')
    }
}

module.exports = MusicModel