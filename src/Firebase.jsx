import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSfpMkO1djcYjP4yeGUIqJgoMt4S_wXKw",
  authDomain: "netlfix-5259f.firebaseapp.com",
  projectId: "netlfix-5259f",
  storageBucket: "netlfix-5259f.appspot.com",
  messagingSenderId: "265294501588",
  appId: "1:265294501588:web:258af84515cbceb8a64d41",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth };
export default db;
export { provider };
