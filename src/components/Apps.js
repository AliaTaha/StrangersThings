
import React from 'react'
import {fetchPosts}from '../api'

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
        
    })
}
export default App