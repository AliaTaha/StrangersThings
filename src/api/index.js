


export const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
export const COHORT_NAME = '2206-FTB-WEB-FT';
export const API_URL = BASE_URL + COHORT_NAME;


export const fetchPosts = async () => {
    const respond = await fetch(`${API_URL}/posts`);
    const data = await respond.json();
    console.log('data')

}