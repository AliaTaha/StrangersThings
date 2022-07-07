


export const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
export const COHORT_NAME = '2206-FTB-WEB-FT';
export const API_URL = BASE_URL + COHORT_NAME;


//GET request using fetch with async/await

export const fetchPosts = async () => {
    const respond = await fetch(`${API_URL}/posts`);
    const data = await respond.json();
    console.log('data:', data);
    setPosts(postData);

    useEffect(() => {
        fetchPosts()
      }, []);
}





//fetchPosts();


