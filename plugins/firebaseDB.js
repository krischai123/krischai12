// const firebase = require("firebase");
import firebase from 'firebase/app'

// Required for side-effects
// require("firebase/firestore");
import 'firebase/firestore'
import 'firebase/storage'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        piKey: "AIzaSyC2BDRVESHE-TjFDPTtot2mXmbPA4ntKrY",
        authDomain: "about-product.firebaseapp.com",
        databaseURL: "https://about-product.firebaseio.com",
        projectId: "about-product",
        storageBucket: "about-product.appspot.com",
        messagingSenderId: "1033297474591"
        
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
// export const storage = firebase.storage();

// Points to the root reference
export const storageRef = firebase.storage().ref();

// Points to 'images'
export const  imagesRef = storageRef.child('images/');

// export const  productsRef = storageRef.child('products/');
