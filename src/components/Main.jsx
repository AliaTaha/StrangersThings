
import React from 'react'
import { Routes, Route, Link} from "react-router-dom"
import { NavBar, Home, Posts, NewPost, ModPost ,Login,Register,Profile, Logout } from './'



const Main = () => {
  return (
      <div className='container'>
        <NavBar />
        <div id='main-section'>
          <Routes>
            <Route path="/home" element={<Home />} />
                <Route path="/home/posts" element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/" element={<Login />} />
                <Route path="/login/register" element={<Register />} />
                <Route path="/login/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        
      </div>
      </div>
  )
}


export default Main;


//<Route path="/login" element={<Login/>} />

/**const App = () => {
//  const [messageFlag, setMessageFlag] = useState(false)
//  const [singlePost, setSinglePost] = useState({})

const [errorMessage, setErrorMessage] = useState({});
const []
    
return (

    <>    
          <BrowserRouter>  
            <NavBar /> 
            <Switch>       
              <Route path= '/' element= {<div>Landing Page</div>} >
                <Route path= '/login' element= {<Login/>} />                                                                         
                <Route path= '/posts' element= {<Posts/>} />                             
              </Route>
            </Switch>
          </BrowserRouter>
    </>

    )
}

export default App;

*/






















    //const [userList, setUserList] = useState([]);
    //const [currentUser, setCurrentUser] = useState(null);
    //const [userPosts, setUserPosts] = useState([]);

/**   useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-WEB-FT/posts');
            const result = await response.json();
            console.log('data:', data);
            setPosts(postData);

        }
        fetchPosts();
   
    return  <>
        <h1>
            Posts
        </h1>

        {
           posts.map(post => <div key={post.id}>
                <h3>{post.title}</h3>
                <di>{post.body}</di>
            </div>)
        }
    
    </>
}, [])

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
*/

