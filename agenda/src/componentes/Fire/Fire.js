import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAfadRsjferpKifMUdOE0BWlrMHEjrzwh0",
    authDomain: "testproyecto-2c518.firebaseapp.com",
    databaseURL: "https://testproyecto-2c518.firebaseio.com",
    projectId: "testproyecto-2c518",
    storageBucket: "testproyecto-2c518.appspot.com",
    messagingSenderId: "799815734692",
    appId: "1:799815734692:web:6ef93f95bf37e58f7a1d31",
    measurementId: "G-K1VZYQRLLY"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;