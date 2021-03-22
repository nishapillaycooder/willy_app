import * as firebase from 'firebase'
require('@firebase/firestore')

   var firebaseConfig = {
    apiKey: "AIzaSyA-HR-hACSKAqO4Y9QoGelaCUNMwvj6pAU",
    authDomain: "c-75-eae74.firebaseapp.com",
     databaseURL: "https://c-75-eae74.firebaseio.com",
    projectId: "c-75-eae74",
    storageBucket: "c-75-eae74.appspot.com",
    messagingSenderId: "633518212941",
    appId: "1:633518212941:web:1af030be52ceb7dbc79904"
  };

  // Initialize Firebase
 
 
 if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); } 
  export default firebase.firestore()