import React, {useState} from 'react'
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import { fetchPosts } from '../api';


function Main() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form onSubmit={(event)=>{
            event.preventDefault()
            console.log('i am submitting', username, password);   
            setPassword('');
            setUsername('');        
        }}
        >
            <label>User Name
                <input 
                name='username' 
                type='text' 
                value={username} 
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />
            </label>

            <label>
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
    );
}


export default Main;





//const Main = (props) => {
   // return (
   //   <BrowserRouter>
   //     <div id='container'>    
   //     </div>
  //    </BrowserRouter>
  //  )
 // }


  