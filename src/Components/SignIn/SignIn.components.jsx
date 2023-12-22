import { React, useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.components";
import "./SignIn.style.scss";
import Button from "../Button/Button.components";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultInputValue = {
  email: "",
  Password: "",
};

function SignInForm() {
  const dispatch = useDispatch();
  const [formFields, setformFields] = useState(defaultInputValue);
  const { email, Password } = formFields;
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
    try {
      dispatch(emailSignInStart(email, Password));

      resetForFields();
    } catch (err) {
      if (err.code === "auth/invalid-login-credentials") {
        alert("incorrect password or email");
      }
      console.log(err);
    }
  };
  const SignWithGoogle = async () => {
    dispatch(googleSignInStart());
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
