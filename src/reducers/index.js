//export the root reducer
import { combineReducers } from 'redux'
// import songList from '../data/songs'
// import todos from './todos'
import songs from './SongsReducer'
import player from './PlayerReducer'
import searchbar from './SearchbarReducer'

let exampleStateTree = {
    songs: [{
        title: 'Moon River',
        artist: 'Jacob Collier',
        id: 1
    }, {
        title: 'Dungar',
        artist: 'Clinton Cerejo',
        id: 2
    }, {
        title: 'Summer of 69',
        artist: 'Bryan Adams',
        id: 3
    }],
    searchbar: {
        filter: ''
    },
    player: {
        playing: false,
        songId: 123,
        songName: '',
        songArtist: '',
        currentTime: 0, //in secs
        duration: 0,//in secs
        percentComplete: 0
    }
};

export default combineReducers({
    songs, searchbar, player
});

