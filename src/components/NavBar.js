import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBox" id="navBar">
      <div className="site-title">
        <h1 id="siteTitle">Stranger's Things</h1>
      </div>
      <div className="page-titles" id="pageTitles">
        <Link to="/home">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/">Login</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default NavBar;

//<Link to="/posts">Posts</Link>
//<Link to="/profile">Profile</Link>
