import { React, useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../src/Utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.components";

import "./SignUp.style.scss";

import Button from "../Button/Button.components";

const defaultInputValue = {
  displayName: "",
  email: "",
  createPassword: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setformFields] = useState(defaultInputValue);
  const { displayName, email, createPassword, confirmPassword } = formFields;
  console.log(formFields);

  const resetForFields = () => {
    setformFields(defaultInputValue);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (createPassword !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        createPassword
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetForFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already exist");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't you have account</h2>
      <span>Sign up with a Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="displayName"
          type="text "
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Create Password"
          type="password"
          onChange={handleChange}
          name="createPassword"
          value={createPassword}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
