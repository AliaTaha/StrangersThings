import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
//import { fetchPosts } from '../api';    


//import './bootstrap.css';
//import './sytle.css';

//GET (Read) request via Fetch
//Create a new piece of State
const App = () => {
    const [posts, setPosts] = useState([]);
    const [userList, setUserList] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-WEB-FT/posts');
            const data = await resp.json();
            console.log('data:', data);
            setPosts(postData);

        }
        fetchPosts();
    }, [])


    return <>
        <h1>
            Posts
        </h1>

        {
//Render posts on page
//map over posts
            posts.map(post => <div key={post.id}>
                <h3>{post.title}</h3>
                <di>{post.body}</di>
            </div>)
        }
    
    </>
//UserPosts
useEffect(() => {
    getUsers()
      .then(users => {
        setUserList(users)
      })
      .catch(error => {
        // something something errors
      });
  }, []);

  useEffect(() => {
    if (!currentUser) {
      setUserPosts([]);
      return;
    }

    getPostsByUser(currentUser.id)
      .then(posts => {
        setUserPosts(posts);
      })
      .catch(error => {
        // something something errors
      });
  }, [currentUser]);

  return (
    <div id="App">
      <Header
        userList={ userList }
        currentUser={ currentUser }
        setCurrentUser={ setCurrentUser } />
      {
        currentUser
        ? <userPosts
            userPosts={ userPosts }
            currentUser={ currentUser } />
        : null
      }

    </div>
  );

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );


export default App;