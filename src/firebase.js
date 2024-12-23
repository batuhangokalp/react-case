import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2X7PPOOt7HpoHtLYhCeDvsDugVNzX-4Q", 
  authDomain: "react-case-bc1d4.firebaseapp.com",
  projectId: "react-case-bc1d4",
  storageBucket: "react-case-bc1d4.appspot.com",
  messagingSenderId: "597203293195",
  appId: "1:597203293195:web:0e11123a6955e8fdd28c8b",
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);

// Firebase Auth servisini alın
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
