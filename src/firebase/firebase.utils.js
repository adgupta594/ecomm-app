import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCSZ5OwgzspCPMhorUv_pdg9g5BH6DlPdE",
  authDomain: "ecomm-app-a5c70.firebaseapp.com",
  projectId: "ecomm-app-a5c70",
  storageBucket: "ecomm-app-a5c70.appspot.com",
  messagingSenderId: "1053038105664",
  appId: "1:1053038105664:web:2d7ad6879118d0c313fba5",
  measurementId: "G-3DQ073W0BM",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
