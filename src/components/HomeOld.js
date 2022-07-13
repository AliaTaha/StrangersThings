import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <h2>Welcome to Strangers' Things!</h2>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ornare quam viverra
        orci sagittis eu volutpat odio. Dui sapien eget mi proin sed libero enim
        sed. Ipsum dolor sit amet consectetur adipiscing elit!
      </h3>

      <div>
        <Link to="/home/posts">View Listings</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default Home;
