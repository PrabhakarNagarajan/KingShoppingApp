import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../SignUp/SignUp.components";
import SignInForm from "../../SignIn/SignIn.components";
import "./Authenication.style.scss";

const Authenication = () => {
  return (
    <div className="authenication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authenication;
