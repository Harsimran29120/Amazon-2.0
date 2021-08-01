var firebaseConfig = {
    apiKey: "AIzaSyALjqPcG4K_CM7c-vv8D3rbd09o1wep4uM",
    authDomain: "clone-two-2f3e2.firebaseapp.com",
    projectId: "clone-two-2f3e2",
    storageBucket: "clone-two-2f3e2.appspot.com",
    messagingSenderId: "610521507873",
    appId: "1:610521507873:web:61ff1b03b4d0edbf335b60",
    measurementId: "G-P9DBR4BYEW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();