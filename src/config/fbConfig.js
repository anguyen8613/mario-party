import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAXtS2ajHjurMh_c03qAY3z49TQSAxwrUs",
    authDomain: "mario-party-baaf7.firebaseapp.com",
    databaseURL: "https://mario-party-baaf7.firebaseio.com",
    projectId: "mario-party-baaf7",
    storageBucket: "mario-party-baaf7.appspot.com",
    messagingSenderId: "722206921710",
    appId: "1:722206921710:web:14dca2097cd6caae9eb4ff"
  };

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
export default firebase;
 