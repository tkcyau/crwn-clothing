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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
