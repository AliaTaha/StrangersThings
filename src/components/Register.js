import React, { useState } from 'react'
import {registerUser} from '../api'

const Register = () => {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await registerUser(username, password);
    localStorage.setItem("token", token);
    console.log(token, "this is the register component");

}

  return (
    <div className="box" id="loginBox">
      <h3>REGISTER</h3>
      <form onSubmit={handleSubmit}>
        <label className="username">
          UserName: {}
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
          Password: {}
          <input
            name="password"
            type="text"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;