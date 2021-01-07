import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvHlZ8PMthWjUw27ovFvY1j5P9vrmwyUU",
  authDomain: "clone-f0dfb.firebaseapp.com",
  projectId: "clone-f0dfb",
  storageBucket: "clone-f0dfb.appspot.com",
  messagingSenderId: "317050028406",
  appId: "1:317050028406:web:a94d668acf33ca9da9fa57",
  measurementId: "G-KRD8T5CE8W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
