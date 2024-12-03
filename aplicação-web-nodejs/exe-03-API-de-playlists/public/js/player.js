// import songs from '../../src/songs.js'
import songs from './songs.js'

const player          = document.querySelector('#player')

const musicName       = document.querySelector('#music-name')
const artist          = document.querySelector('#artist')
const musicImage      = document.querySelector('#playing-now-image')

const playPauseButton = document.querySelector('#playPauseButton')
const prevButton      = document.querySelector('#prevButton')
const nextButton      = document.querySelector('#nextButton')
const currentTime     = document.querySelector('.currentTime')
const duration        = document.querySelector('.duration')
const progressBar     = document.querySelector('.progress-bar')
const progress        = document.querySelector('.progress')

console.log(currentTime)

const textButtonPlay  = '<i class="fa-solid fa-play"></i>'
const textButtonPause = '<i class="fa-solid fa-pause"></i>'

let currentMusic = 0

prevButton.onclick      = () => prevNextMusic('previous')
nextButton.onclick      = () => prevNextMusic()
playPauseButton.onclick = () => playPause()

function playPause() {
    if ( player.paused ) {
        player.play()
        playPauseButton.innerHTML = textButtonPause
    }
    else {
        player.pause()
        playPauseButton.innerHTML = textButtonPlay
    }
}

player.ontimeupdate = () => updateTime()
const formatZero = (n) => ( n < 10 ? '0' + n : n )

progressBar.onclick = (event) => {
    const newTime = (event.offsetX / progressBar.offsetWidth) * player.duration
    player.currentTime = newTime
}

function updateTime() {
    const currentMinutes = Math.floor( player.currentTime / 60 )
    const currentSeconds = Math.floor( player.currentTime % 60 )
    currentTime.textContent = `${currentMinutes}:${formatZero(currentSeconds)}`

    const durationFormated = isNaN(player.duration) ? 0 : player.duration
    const durationMinutes = Math.floor( durationFormated / 60 )
    const durationSeconds = Math.floor( durationFormated % 60 )
    duration.textContent = `${durationMinutes}:${formatZero(durationSeconds)}`

    const progressWidth = durationFormated ? ( player.currentTime / durationFormated ) * 100 : 0
    progress.style.width = progressWidth + '%'
}


function prevNextMusic( type = 'previous' ) {
    if (( type === 'next' && currentMusic + 1 === songs.length ) || type === 'init' ) {
        currentMusic = 0
    }
    else if ( type === 'previous' && currentMusic === 0 ) {
        currentMusic = songs.length
    }
    else {
        currentMusic = type === 'previous' && currentMusic ? currentMusic - 1 : currentMusic + 1
    }

    musicImage.style.backgroundImage = `url('${songs[currentMusic].clip_img}')`
    player.src          = songs[currentMusic].song
    musicName.innerHTML = songs[currentMusic].title
    artist.innerHTML    = songs[currentMusic].artist_name

    if (type !== 'init') playPause()
    
    updateTime()
}

prevNextMusic('init')


