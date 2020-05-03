const firebase = require('firebase');

function fetchSongs() {
    var app = firebase.initializeApp({
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
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