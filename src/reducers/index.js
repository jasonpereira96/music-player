import { combineReducers } from 'redux'
import songs from './SongsReducer'
import player from './PlayerReducer'
import searchbar from './SearchbarReducer'


//export the root reducer
export default combineReducers({
    songs, searchbar, player
});

