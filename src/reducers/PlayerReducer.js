import { PLAY, PAUSE, TIMEUPDATE } from './../actions/actions'
import songList from './../data/songs'
let initalState =   {
    playing: false,
    songId: 123,
    songName: '',
    songArtist: '',
    currentTime: 0, //in secs
    duration: 0,//in secs
    percentComplete: 0
};
const player = (player = initalState, action) => {
    if (action.type === PLAY) {
        if (action.songId) {
            let song = songList.filter(song => song.id === action.songId)[0];
            return {
                ...player,
                songName: song.title,
                source: song.src,
                artist: song.artist,
                playing: true
            }
        }
        return {
            ...player,
            playing: true
        }
    } else if (action.type === PAUSE) {
        return {
            ...player,
            playing: false
        }
    } else if (action.type === TIMEUPDATE) {
        let { currentTime, duration } = action;
        currentTime = Math.floor(currentTime);
        duration = Math.floor(duration);
        
        return {
            ...player,
            currentTime: currentTime,
            duration: duration
        };
    }
    return player;
}
export default player;