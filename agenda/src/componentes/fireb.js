import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCC3L1tjlMWR2rtpr-OVjeutpyO-5or_oQ",
    authDomain: "agrendaproyect.firebaseapp.com",
    databaseURL: "https://agrendaproyect.firebaseio.com",
    projectId: "agrendaproyect",
    storageBucket: "agrendaproyect.appspot.com",
    messagingSenderId: "90801576170",
    appId: "1:90801576170:web:76b845d68b27d7ba449f93",
    measurementId: "G-17DR61525J"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const auth = firebase.auth();
  export default fire;