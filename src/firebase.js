import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";



// this is firebase v10
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSnYpbxpItfuO4kWAxLWgr47Ze_aiWN2M",
  authDomain: "podcast-paltform.firebaseapp.com",
  projectId: "podcast-paltform",
  storageBucket: "podcast-paltform.appspot.com",
  messagingSenderId: "1004448302695",
  appId: "1:1004448302695:web:c662fb068f8dd5bac176c2",
  measurementId: "G-LRWEWE3GBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {db, storage, auth}
