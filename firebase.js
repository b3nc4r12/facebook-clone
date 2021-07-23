import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB-S3d7pKurTY9_2UHOVKsAoDKTlSDUzqE",
    authDomain: "facebook-clone-6e198.firebaseapp.com",
    projectId: "facebook-clone-6e198",
    storageBucket: "facebook-clone-6e198.appspot.com",
    messagingSenderId: "527957866125",
    appId: "1:527957866125:web:9177a80b3f20576ce794c4"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage }

