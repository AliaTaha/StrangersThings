
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';


import './bootstrap.css';
import './sytle.css';

const App = () => {
    const [posts, setPosts] = useState([]);
    console.log('posts:', posts);

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-WEB-FT/posts');
            const data = await resp.json();
            console.log('data:', data);
            setPosts(data);

        }
        fetchPosts();
    }, [])


    return <>
        <h1>
            Posts
        </h1>
        {
            posts.map(post => <div key={post.id}>
                {post.title}
            </div>)
        }
    
    </>
}

ReactDOM.render(
    <App/>,
    document.getElementById['app']
);

export default App