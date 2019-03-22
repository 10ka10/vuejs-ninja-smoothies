import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDK8QayNJ7eEG6iGOJybs5dEBqi17XgGZA",
    authDomain: "udemy-ninja-smoothies-144e9.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-144e9.firebaseio.com",
    projectId: "udemy-ninja-smoothies-144e9",
    storageBucket: "udemy-ninja-smoothies-144e9.appspot.com",
    messagingSenderId: "395598031921"
  };
  const firebaseApp = firebase.initializeApp(config);

  // export firestore database
  export default firebaseApp.firestore()