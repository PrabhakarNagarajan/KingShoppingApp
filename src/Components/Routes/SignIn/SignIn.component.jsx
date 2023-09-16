import React from "react";
import {
  SignInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../../Utils/firebase/firebase.utils";

function SignIn() {
  const GoogleLog = async () => {
    const { user } = await SignInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      SignIn Page
      <button onClick={GoogleLog}>Sign In with Google</button>
    </div>
  );
}

export default SignIn;
