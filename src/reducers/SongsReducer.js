import {FILTER, SONGS_FETCHED} from './../actions/actions'
import songList from '../data/songs'

const songs = (songs = [], action) => { //songReducer
    switch (action.type) {
        case FILTER:
            let { filterString } = action;
            filterString = filterString.toLowerCase().trim();
            return songList.filter(function (song) {
                return song.title.toLowerCase().includes(filterString) || song.artist.toLowerCase().includes(filterString);
            });
        case SONGS_FETCHED: 
            return action.songs;
        default:
            return songs;
    }
}

export default songs