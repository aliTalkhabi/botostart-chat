import firebase from "firebase";
import "firebase/auth";
//using saving data it`s database (create-account & ...)
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCsIthqrBLNvaA29bZkdF6P5UXvwkU6uSw",
    authDomain: "botogram-6c94c.firebaseapp.com",
    projectId: "botogram-6c94c",
    storageBucket: "botogram-6c94c.appspot.com",
    messagingSenderId: "926936923289",
    appId: "1:926936923289:web:357ed46bd7e395950bcc08",
  })
  .auth();
