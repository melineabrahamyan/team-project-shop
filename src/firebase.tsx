import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnK1oGIaV9swwUToQeeT12g7mitcYaJRg",
  authDomain: "e-commerce-website-37995.firebaseapp.com",
  projectId: "e-commerce-website-37995",
  storageBucket: "e-commerce-website-37995.appspot.com",
  messagingSenderId: "713057165925",
  appId: "1:713057165925:web:056082df2436f80d231c8c",
};

firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFireStore, projectAuth };