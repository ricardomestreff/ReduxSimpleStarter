import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDuVNfsUdqUwu0hCSc_uhCUBbWiQdO2WXg",
    authDomain: "superheroes-6df97.firebaseapp.com",
    databaseURL: "https://superheroes-6df97.firebaseio.com",
}

const app = firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

export const database = app.database();

export const heroes = database.ref('/heroes');

export const presence = database.ref('/presence');

export const connected = database.ref('/.info/connected');
