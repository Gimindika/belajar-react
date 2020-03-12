import React from "react";

import TextInput from "../TextInput";
import Button from "../Button";

import "./style.css";

const LoginForm = () => {
  return (
    <div className="form-container">
      <h1>Sign-In Information</h1>

      <div className="title-underline" />

      <TextInput title="Email" required />
      <TextInput
        title="Password"
        required
        error="Password Strength : No Password"
        password
      />
      <TextInput title="Confirm Password" required password />

      <Button label="Submit" />
    </div>
  );
};

export default LoginForm;
