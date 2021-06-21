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


export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return; //if user not signed in

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
    }
    catch(error){
      console.error('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
