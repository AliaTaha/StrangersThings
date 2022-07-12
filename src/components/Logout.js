import React, { useState } from "react";
import { userLogout } from "../api";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";






const Logout = () => {



   localStorage.removeItem('token');
    window.location.href = "/login";
  }
 
  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    )
  }
}
//export default Logout;
