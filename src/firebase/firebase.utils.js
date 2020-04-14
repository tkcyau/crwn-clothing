import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCtO2kesV0eS6RjatytSL08RfyfgmBENr4",
  authDomain: "crwn-db-163e9.firebaseapp.com",
  databaseURL: "https://crwn-db-163e9.firebaseio.com",
  projectId: "crwn-db-163e9",
  storageBucket: "crwn-db-163e9.appspot.com",
  messagingSenderId: "664565103057",
  appId: "1:664565103057:web:6e574e03a36e3cdd7848f0",
  measurementId: "G-838NQGF6SD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
