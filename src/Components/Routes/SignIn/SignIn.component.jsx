import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  SignInWithGooglePopUp,
  createUserDocumentFromAuth,
  SignInwithGoogleRedirect,
} from "../../../Utils/firebase/firebase.utils";

import SignUpForm from "../../SignUp/SignUp.components";

const SignIn = () => {
  const fetchUserData = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
    console.log(response);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const GoogleLog = async () => {
    const { user } = await SignInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      SignIn Page
      <div>
        <button onClick={GoogleLog}>Sign In with Google Pop Up</button>
        <button onClick={SignInwithGoogleRedirect}>
          Sign In with Google Redirect
        </button>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
