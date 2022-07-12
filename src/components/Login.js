import React, { useState, useEffect } from "react";
import { userLogin } from "../api";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import Userfront from "@userfront/core";

const Login = (props) => {
  //  Userfront.init(token);

  // Initial State(s)
  // needing to be shared between immediate children
  //errorMessages: Store an object with an error message and the name of the field.
  //isSubmitted: boolean value to indicate if the form is successfully submitted or not.
  const [token, setToken] = [props.token, props.setToken];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState();
  const [loggedInUser, setLoggedInUser] = useState("");

  return handleLogout();
  // offer a form to be able to login and button to logout
  // handleChange() function sets new state for input
  //  const navigation = useNavigate();

  /** const renderErrorMessages = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await userLogin(username, password);
    localStorage.setItem("token", token);
    console.log(userLogin);
    //    navigation("./Posts", { replace: true });
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
        <button type="submit">Login</button>
        <div>
          <Link to="/login/register">Create Account</Link>
        </div>
        <Outlet />
      </form>
    </div>
  );
};
*/

  const handleSubmit = async (username, password) => {
    const user = await userLogin(username, password);
    setUser(response.data.token);
    localStorage.setItem("user", response.data.token);
    console.log(user);
  };

  // if there's a user show the message below
  if (user) {
    return <div>{user.name} is loggged in</div>;
  }

  // if there's no user, show the login form
  return (
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
        <Link to="/login/register">Create Account</Link>
      </div>
    </form>
  );
};

// useEffect(() => {

//   }
// }, []);

function handleLogout() {
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        Logout
      </button>
    </div>
  );
}
//   setUser();
//   setUsername("");
//   setPassword("");
//   localStorage.clear();
// };

//<button onChange={Userfront.logout()} type="submit">
//          LogOut
//        </button>

//<div className="logout" id="logoutBox">
//<h3>You are logged in</h3>
//<button onClick={logout}>Logout</button>
//</div>

export default Login;
