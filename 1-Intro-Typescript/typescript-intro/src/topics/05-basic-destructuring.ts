interface AudioPlayer{
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New Song';

//renombrar una variable desestructurada
// const {song:anotherSong, details} = audioPlayer
// //tarea
// const {author} = details

// console.log('Song: ', anotherSong)
// console.log('Author: ', author)


//desestructuring de arrays

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];



console.log('Personaje 3:', dbz[3] || 'No hay personaje');

export{}