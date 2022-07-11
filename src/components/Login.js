import React, { useState } from "react";
import { userLogin } from "../api";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Userfront from "@userfront/core";


const Login = () => {
  Userfront.init(token);
  
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
  const navigation = useNavigate();

  const renderErrorMessages = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await userLogin(username, password);
    localStorage.setItem("token", token);
    console.log(userLogin);
    navigation("./Posts", { replace: true });
  };

  return (
    <div className="box" id="loginBox">
      <h3>LOGIN</h3>
      <outlet />
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
        <button onChange={Userfront.logout()} type="submit">LogOut</button> 
        <div>
          <Link to="/login/register">Don't have an account? Sign Up</Link>
        </div>
        <Outlet />
      </form>
    </div>
  );
};

export default Login;
