

  

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDVgs_7mlD3nQ0IwC8h7VIgBPncins8YJM",
    authDomain: "qubehealth-cc71c.firebaseapp.com",
    projectId: "qubehealth-cc71c",
    storageBucket: "qubehealth-cc71c.appspot.com",
    messagingSenderId: "573983892035",
    appId: "1:573983892035:web:a981bcf7c555b5b4edaaf6"
};

firebase.initializeApp(config);

export default firebase