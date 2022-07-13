import React, { useState, useEffect } from "react";
import { userLogin } from "../api";
import { Link,useNavigate } from "react-router-dom";
import handleLogout from "./LogOut"
import {Profile} from "./Profile"



const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [user, setUser] = useState("");




  <button onClick={navigateProfile}>Home</button>
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const token = await userLogin(username, password);
      localStorage.setItem("token", token);
      
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {localStorage.getItem("token") ? 
        <div>{`${username}`} is logged in 
        
        <button onClick={handleLogout}>Log Out</button>
        </div>
       : (
        <form onSubmit={handleSubmit}>
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
            <Link to="/home/register">Create Account</Link>
          </div>
        </form>
      )}
    </>
  );
};
export default Home;
