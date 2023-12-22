import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConifg = {
  apiKey: "AIzaSyAbtwG5SVVeC0Zd2sE2FyJuvfsWznEsxH0",
  authDomain: "crown-king-clothing.firebaseapp.com",
  projectId: "crown-king-clothing",
  storageBucket: "crown-king-clothing.appspot.com",
  messagingSenderId: "52788228414",
  appId: "1:52788228414:web:e22003e9fd6747f13abc6f",
};

const firebaseApp = initializeApp(firebaseConifg);
console.log(firebaseApp);
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

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapShots = await getDocs(q);

  return querySnapShots.docs.map((docSnapShot) => docSnapShot.data());

  // return categoryMap;
};

export const createUserDocumentFromAuth = async (
  AuthUser,
  additionalInformation = {}
) => {
  // if (!AuthUser || !AuthUser.uid) {
  //   throw new Error("Invalid user object");
  // }

  const userDocRef = doc(db, "users", AuthUser.uid);

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
  return userSnapShot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const SignInAuthUserWithEmailandpassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedLister = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
