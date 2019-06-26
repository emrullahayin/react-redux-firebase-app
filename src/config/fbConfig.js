import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCbiah3bMaFOF3_EAczJk9bh--izv9bq50",
  authDomain: "react-firebase-app-3f405.firebaseapp.com",
  databaseURL: "https://react-firebase-app-3f405.firebaseio.com",
  projectId: "react-firebase-app-3f405",
  storageBucket: "",
  messagingSenderId: "770763721236",
  appId: "1:770763721236:web:c62840742ab1bfc1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase;
