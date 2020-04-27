import { PLAY, PAUSE, TIMEUPDATE, PREV, NEXT } from './../actions/actions'
import songList from './../data/songs'
let initalState = {
    playing: false,
    songId: 123,
    songName: '',
    artist: '',
    currentTime: 0, //in secs
    duration: 0,//in secs
    source: ''
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
                playing: true,
                songId: song.id
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
    } else if (action.type === NEXT) {
        let currentSongId = player.songId;
        let currentSongIndex = songList.findIndex(song => song.id === currentSongId);
        let nextSong = songList[(currentSongIndex + 1) % songList.length]; // to round back to the first song after the last
        return {
            ...player,
            songName: nextSong.title,
            source: nextSong.src,
            artist: nextSong.artist,
            songId: nextSong.id,
            // playing: true
        };
    } else if (action.type === PREV) {
        let currentSongId = player.songId;
        let currentSongIndex = songList.findIndex(song => song.id === currentSongId);
        //to round to the last song after the first
        let prevSong = currentSongIndex === 0 ? songList[songList.length - 1] : songList[currentSongIndex - 1];
        return {
            ...player,
            songName: prevSong.title,
            source: prevSong.src,
            artist: prevSong.artist,
            songId: prevSong.id,
            // playing: true
        };
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