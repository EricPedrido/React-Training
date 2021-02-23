import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATRulPCAWUKa6Nyzy1YOSc-IC1mna_Ju8",
  authDomain: "react-training-b8ad1.firebaseapp.com",
  projectId: "react-training-b8ad1",
  storageBucket: "react-training-b8ad1.appspot.com",
  messagingSenderId: "123518006000",
  appId: "1:123518006000:web:6d355cb8e5891fa2c84835",
  measurementId: "G-XQH1TK7FF0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
