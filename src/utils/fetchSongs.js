const firebase = require('firebase');

function fetchSongs() {
    var app = firebase.initializeApp({
        apiKey: "AIzaSyB7pv_uxH1W4KXA2a31Gzw7ZHeeSVrlSgs",
        authDomain: "music-player-c5407.firebaseapp.com",
        databaseURL: "https://music-player-c5407.firebaseio.com",
        projectId: "music-player-c5407",
        storageBucket: "music-player-c5407.appspot.com",
        messagingSenderId: "772178190113",
        appId: "1:772178190113:web:1b0120b46b831463c92860"
    })

    var database = firebase.database(app);
    var ref = database.ref();

    return ref.once('value').then(function (snap) {
        let songs = snap.val().songs;
        app.delete();
        return songs;
    });
}

export default fetchSongs