
import React from 'react'


const Register = (props) => {

    return (
        
        <div className='box'>{`This is your Register Component`} 
        </div>

)}

//export default Register;


const handleSubmit = async (event) => {
    event.preventDefault();
    const token = userLogin(username, password);
    localStorage.setItem("token", token);
    console.log(userLogin);
  };

  return (
    <div className="box" id="loginBox">
      <h3>LOGIN</h3>
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
      </form>
    </div>
  );
};