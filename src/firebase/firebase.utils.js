import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB68X_Ka3EMRZEIFt5DrfR_Fh4O6yVuF6E",
  authDomain: "local-market-db-6b01d.firebaseapp.com",
  projectId: "local-market-db-6b01d",
  storageBucket: "local-market-db-6b01d.appspot.com",
  messagingSenderId: "472255463842",
  appId: "1:472255463842:web:27129063a4e3dbeba3b2fb",
  measurementId: "G-E8B1XS5T3W",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
