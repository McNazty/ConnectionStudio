import * as firebase from 'firebase';
import '@firebase/firestore';

// need to run: npm install --save firebase
// We will use the JS SDK with React Native


const firebaseConfig = {
  apiKey: "AIzaSyAntS4bXM7qOrOwdFmvw2azxq0EUrjj8P0",
  authDomain: "project-30c3c.firebaseapp.com",
  projectId: "project-30c3c",
  storageBucket: "project-30c3c.appspot.com",
  messagingSenderId: "1066235173678",
  appId: "1:1066235173678:web:a6b644f8d937a80d41b8bf",
  measurementId: "G-EQ11BDXN23"
};

let app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
export const firestore = firebase.firestore(app);
export const auth = app.auth();