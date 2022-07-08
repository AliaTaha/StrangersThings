import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="box" id="navBar">
      <Link to="/homePage">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
};

export default NavBar;

//<Link to="/posts">Posts</Link>
//<Link to="/profile">Profile</Link>
