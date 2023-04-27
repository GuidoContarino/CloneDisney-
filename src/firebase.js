import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAfamBM8tmoM3DSjEVdVhx2hYvWfGfj8ak",
  authDomain: "clonedisneyplus1.firebaseapp.com",
  projectId: "clonedisneyplus1",
  storageBucket: "clonedisneyplus1.appspot.com",
  messagingSenderId: "804203821932",
  appId: "1:804203821932:web:8912a54ab6f44bcd9bd149",
  measurementId: "G-YMYYLL1TYK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
