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
            return console.log('Os dados informados são insuficientes para cadastro!')
        }

        return {
            id:     this.#id,
            title:  this.#title,
            year:   this.#year,
            artist: this.#artist,
            album:  this.#album
        }

    }
}

console.clear()
const music = new MusicModel( 'Big Poppa - 2007 Remaster', '2007', 'The Notorius B.I.G', 'Greatest Hits')

console.log( music.data )