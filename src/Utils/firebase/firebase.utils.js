import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConifg = {
  apiKey: "AIzaSyAbtwG5SVVeC0Zd2sE2FyJuvfsWznEsxH0",
  authDomain: "crown-king-clothing.firebaseapp.com",
  projectId: "crown-king-clothing",
  storageBucket: "crown-king-clothing.appspot.com",
  messagingSenderId: "52788228414",
  appId: "1:52788228414:web:e22003e9fd6747f13abc6f",
};

const firebaseApp = initializeApp(firebaseConifg);

const googleprovider = new GoogleAuthProvider();

googleprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const SignInWithGooglePopUp = () =>
  signInWithPopup(auth, googleprovider);

export const SignInwithGoogleRedirect = () =>
  signInWithRedirect(auth, googleprovider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  AuthUser,
  additionalInformation = {}
) => {
  // if (!AuthUser || !AuthUser.uid) {
  //   throw new Error("Invalid user object");
  // }

  const userDocRef = doc(db, "users", AuthUser.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = AuthUser;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }

    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const SignInAuthUserWithEmailandpassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
