// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBoEo44ni9glQ4HgdDEey4L11guFWNjXIU",
  authDomain: "clone-3848c.firebaseapp.com",
  projectId: "clone-3848c",
  storageBucket: "clone-3848c.appspot.com",
  messagingSenderId: "705206596290",
  appId: "1:705206596290:web:c6ef9b9729d370ff5cc15b",
  measurementId: "G-XJFB8WQS7J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
