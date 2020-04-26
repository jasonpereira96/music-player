//export the root reducer
import { combineReducers } from 'redux'
import {FILTER} from './../actions/actions'
import songList from '../data/songs'
// import todos from './todos'
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
        songName: '',
        songArtist: '',
        timeElasped: 0, //in secs
        duration: 0,//in secs
        percentComplete: 0
    }
};
const songs = (songs = [], action) => { //songReducer
    switch (action.type) {
        case FILTER: 
            let {filterString} = action;
            filterString = filterString.toLowerCase().trim();
            return songList.filter(function(song) {
                return song.title.toLowerCase().includes(filterString) || song.subtitle.toLowerCase().includes(filterString);
            });
        default:
            return songList;
    } 
}
const searchbar = (searchbar = '', action) => {
    return searchbar
}
const player = (player = {}, action) => {
    return player
}

export default combineReducers({
    songs, searchbar, player
});

