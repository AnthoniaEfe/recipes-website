// import firebase from 'firebase/compat/app';
// import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq1_a7Qwh5tEOFu1Q7U2mwVLS_NDngtfU",
  authDomain: "vesta-cooking-site.firebaseapp.com",
  projectId: "vesta-cooking-site",
  storageBucket: "vesta-cooking-site.appspot.com",
  messagingSenderId: "578897934034",
  appId: "1:578897934034:web:4d3b1289ddee007fc5df0b",
};

//init firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = getFirestore(app);

export { projectFirestore };
