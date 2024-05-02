import { initializeApp } from "@firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// import { getFirestore } from 'firebase/firestore';
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDSGm3Nb8VzD6VQz4HJ9qBCMNtp156O_iI",
  authDomain: "challenge-84381.firebaseapp.com",
  projectId: "challenge-84381",
  storageBucket: "challenge-84381.appspot.com",
  messagingSenderId: "737910499397",
  appId: "1:737910499397:web:1579750b8d4cb6b8d21b2c",
  measurementId: "G-S239JJ51P0",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, auth };

export const loginRequest = async (email, password) => {
  let value = await signInWithEmailAndPassword(auth, email, password);
  console.log(value.email);
  return value;
};

export const registerAccount = async (email, password) => {
  let value = await createUserWithEmailAndPassword(auth, email, password);
  console.log(value.email);
  return value.user;
};
