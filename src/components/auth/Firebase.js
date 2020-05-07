import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEdTNYKiX24gAxD4aIKZLOPTxnb5BBY3I",
  authDomain: "novus-56c61.firebaseapp.com",
  databaseURL: "https://novus-56c61.firebaseio.com",
  projectId: "novus-56c61",
  storageBucket: "novus-56c61.appspot.com",
  messagingSenderId: "625199449910",
  appId: "1:625199449910:web:31b25087381e217e1bd597",
  measurementId: "G-PHC49WP5L4"
};
firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
