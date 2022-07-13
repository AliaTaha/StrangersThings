import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Home, Posts, Register, Profile } from "./";

const Main = () => {
  const [token, setToken] = useState("");
  return (
    <div className="container">
      <NavBar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/posts" element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
          <Route
            exact
            path="/"
            element={<home token={token} setToken={setToken} />}
          />
          <Route
            path="/home/register"
            element={<Register token={token} setToken={setToken} />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
