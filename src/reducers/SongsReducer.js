import {FILTER} from './../actions/actions'
import songList from '../data/songs'

const songs = (songs = [], action) => { //songReducer
    switch (action.type) {
        case FILTER:
            let { filterString } = action;
            filterString = filterString.toLowerCase().trim();
            return songList.filter(function (song) {
                return song.title.toLowerCase().includes(filterString) || song.artist.toLowerCase().includes(filterString);
            });
        default:
            return songs;
    }
}

export default songs