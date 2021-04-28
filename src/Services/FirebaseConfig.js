import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"
import "firebase/storage"
import "firebase/firestore"


var firebaseConfig = {
    apiKey: "AIzaSyBdpJGysnIanm0U8CXenIVH5Zm0q5e_S1o",
  	authDomain: "myappdonate.firebaseapp.com",
  	projectId: "myappdonate",
  	storageBucket: "myappdonate.appspot.com",
  	messagingSenderId: "197195621436",
  	appId: "1:197195621436:web:37f4a7f1374ddff3030f39",
  	measurementId: "G-09456FRDLP"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();
export const firestore = firebase.firestore();