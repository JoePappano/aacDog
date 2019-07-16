import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBAZFVNACvmavYfIcN8HNWEz-7ITRBB-vc",
    authDomain: "aacdogdatabase.firebaseapp.com",
    databaseURL: "https://aacdogdatabase.firebaseio.com",
    projectId: "aacdogdatabase",
    storageBucket: "",
    messagingSenderId: "22312249783",
    appId: "1:22312249783:web:c0fd0991dfc5d784"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({})

  export default firebase;