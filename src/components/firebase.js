import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDB1tfOlNn-dAQaNLUEsEBA2GXxMNA7-vg",
    authDomain: "goat-sneakers-63e52.firebaseapp.com",
    projectId: "goat-sneakers-63e52",
    storageBucket: "goat-sneakers-63e52.appspot.com",
    messagingSenderId: "415817553636",
    appId: "1:415817553636:web:a700a3abd586769f833ef1",
    measurementId: "G-D2C2YRZ101"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

