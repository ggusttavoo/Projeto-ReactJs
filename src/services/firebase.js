import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBcBh3tkxnwtLb3FP28odb4OPr_g2KgBVE",
  authDomain: "react-devlinks.firebaseapp.com",
  projectId: "react-devlinks",
  storageBucket: "react-devlinks.appspot.com",
  messagingSenderId: "176817377753",
  appId: "1:176817377753:web:ef0667bef53f8050f6c9c8",
  measurementId: "G-PW040B12BJ"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export { db, auth };
