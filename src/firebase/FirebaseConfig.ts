// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhlZPOmEwegMPhByKjCmANTrGP9rZQP3M",
    authDomain: "da-nang-travel-812a5.firebaseapp.com",
    projectId: "da-nang-travel-812a5",
    storageBucket: "da-nang-travel-812a5.appspot.com",
    messagingSenderId: "147303857675",
    appId: "1:147303857675:web:cc572a11a10da4fe27d10e",
    measurementId: "G-GK8L2YS0D5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
