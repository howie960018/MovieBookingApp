 import firebase from 'firebase';
 
 var firebaseConfig = {
  apiKey: "AIzaSyDhGUJe1vlpWgQMHNsJrmBuD9FluA-4L6c",
  authDomain: "movie-booking-app-fd15c.firebaseapp.com",
  projectId: "movie-booking-app-fd15c",
  storageBucket: "movie-booking-app-fd15c.appspot.com",
  messagingSenderId: "34944368503",
  appId: "1:34944368503:web:b9abe0e259c6f912aa2b72",
  measurementId: "G-TZJL2GRH0P"
  };
  // Initialize Firebase
   var fire = firebase.initializeApp(firebaseConfig);

   export default fire;