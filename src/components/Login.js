import React, { useState, useEffect } from "react";
import { userLogin } from "../api";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [user, setUser] = useState();
    const [loggedInUser, setLoggedInUser] = useState("");
    {/*const [token, setToken] = [token,setToken];*/}

const handleSubmit = async() =>
{
  const token = userLogin(username, password)
  localStorage.setItem('token', token)
}
       return ( user ? <div>{user.name} is logged in</div> : <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          placeholder="enter a username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            placeholder="enter a password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <div>
          <Link to="/login/register">Create Account</Link>
        </div>
      </form>
       
      );
    };
    export default Login;