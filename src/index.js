import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import App from './App';
import * as serviceWorker from './serviceWorker';
import songList from './data/songs'

let firstSong = songList[0];
let initialState = {
	songs: [],
	searchbar: {
        filter: ''
    },
    player: {
        playing: false,
        songId: firstSong.id,
        songName: firstSong.title,
		artist: firstSong.artist,
		source: firstSong.src,
		volume: 1,
        currentTime: 0, //in secs
        duration: 0,//in secs
    }
}
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(handleChange);
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


function handleChange() {
	let audio = document.getElementById('audio');
	let state = store.getState();
	if (audio) {
		if (state.player.playing) {
			audio.play().then((r) => {
				console.log(r)
			}).catch(e => {
				console.log(e)
			});
		} else {
			audio.pause();
		}
		audio.volume = state.player.volume;
	}
}