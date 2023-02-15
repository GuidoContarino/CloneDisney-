import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7mM_I-aIdJ74n71ueOBtbl0xWzKxifBY",
  authDomain: "disneyplus-clone-aa649.firebaseapp.com",
  projectId: "disneyplus-clone-aa649",
  storageBucket: "disneyplus-clone-aa649.appspot.com",
  messagingSenderId: "457163131441",
  appId: "1:457163131441:web:82dd90e1019ac85a63a310",
  measurementId: "G-41D45CTLT0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
