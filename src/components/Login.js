import React, { useState } from "react";
import { userLogin } from "../api";

const Login = () => {
  // Initial State(s)
  // needing to be shared between immediate children
  //errorMessages: Store an object with an error message and the name of the field.
  //isSubmitted: boolean value to indicate if the form is successfully submitted or not.

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // offer a form to be able to login and button to logout
  // handleChange() function sets new state for input

  const renderErrorMessages = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await userLogin(username, password);
    localStorage.setItem("token", token);
    console.log(userLogin);
  };

  return (
    <div className="box" id="loginBox">
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit}>
        <label className="username">
          UserName
          <input
            name="username"
            type="text"
            value={username}
            onChange={(handleOnChange) => {
              setUsername(handleOnChange.target.value);
            }}
          />
        </label>

        <label className="password">
          Password
          <input
            name="password"
            type="text"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              console.log(password);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login
