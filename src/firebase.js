// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyAPArxIjGG_B-9jBrIbQoQZzdLLtcwj5gQ",
//   authDomain: "todo-1d8d4.firebaseapp.com",
//   projectId: "todo-1d8d4",
//   storageBucket: "todo-1d8d4.appspot.com",
//   messagingSenderId: "428603092370",
//   appId: "1:428603092370:web:bbaf315453cb46a12e654b",
//   measurementId: "G-HSVHHEKWVN"
// };

import firebase from 'firebase'

const fb = firebase.initializeApp({
  apiKey: "AIzaSyAPArxIjGG_B-9jBrIbQoQZzdLLtcwj5gQ",
  authDomain: "todo-1d8d4.firebaseapp.com",
  projectId: "todo-1d8d4",
  storageBucket: "todo-1d8d4.appspot.com",
  messagingSenderId: "428603092370",
  appId: "1:428603092370:web:bbaf315453cb46a12e654b",
  measurementId: "G-HSVHHEKWVN"
});

const db = fb.firestore();
export default db;


// const auth = firebase.auth();
// const storage = firebase.storage();

// export default {db, auth, storage};

// To install all dependencies of firebase { npm i firebase }