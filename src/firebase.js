import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDEqff9Rib9OcoaJdnp5qAIBf90uvkpHfg",
    authDomain: "search-engine-2020.firebaseapp.com",
    databaseURL: "https://search-engine-2020.firebaseio.com",
    projectId: "search-engine-2020",
    storageBucket: "search-engine-2020.appspot.com",
    messagingSenderId: "972335682788",
    appId: "1:972335682788:web:e7569d3f47706cc43948f1",
    measurementId: "G-PPX6HJGRDG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };