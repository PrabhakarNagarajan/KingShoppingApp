import { React, useState, useContext } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  SignInWithGooglePopUp,
  SignInAuthUserWithEmailandpassword,
} from "../../Utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.components";
import "./SignIn.style.scss";
import Button from "../Button/Button.components";

import { UserContext } from "../../Context/user.context";

const defaultInputValue = {
  email: "",
  Password: "",
};

function SignInForm() {
  const [formFields, setformFields] = useState(defaultInputValue);
  const { email, Password } = formFields;
  console.log(formFields);

  const { setCurrentUser } = useContext(UserContext);

  const resetForFields = () => {
    setformFields(defaultInputValue);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await SignInAuthUserWithEmailandpassword(
        email,
        Password
      );
      setCurrentUser(user);
      resetForFields();
    } catch (err) {
      if (err.code === "auth/invalid-login-credentials") {
        alert("incorrect password or email");
      }
      console.log(err);
    }
  };
  const SignWithGoogle = async () => {
    const { user } = await SignInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign up with a Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="Password"
          value={Password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={SignWithGoogle} buttontype="google">
            Google Sign IN
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
