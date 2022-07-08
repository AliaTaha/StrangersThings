
import React, {useState } from 'react'
import {userLogin} from '../api'


const Login = () => {

// Initial State(s)
// needing to be shared between immediate children

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

// offer a form to be able to login and button to logout
// handleChange() function sets new state for input

    return (
        <div className='box' id='loginBox'>
            <h3>LOGIN</h3>
            <form onSubmit={(event)=>{
              event.preventDefault()  
              setPassword('');
              setUsername('');        
            }}
        >
                <label className='username'>
                    UserName
                    <input 
                    name='username' 
                    type='text' 
                    value={username} 
                    onChange={(event) => {
                      setUsername(event.target.value)
                }}
            />
                </label>

                <label className='password'>
                    Password
                    <input 
                    name='password' 
                    type='text' 
                    value={password} 
                    onChange={(event) => {
                      setPassword(event.target.value);
                }}
            />
                </label>            
                <button type='submit'>Submit</button>                   
            </form>
        </div>
      );
  }


export default Login;