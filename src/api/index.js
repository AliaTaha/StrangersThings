// Feature and export all calls to API

const BASE_URL = "https://strangers-things.herokuapp.com/api/";
const COHORT_NAME = "2206-FTB-ET-WEB-FT";
const API_URL = BASE_URL + COHORT_NAME;

// GET request via fetch call to /api/posts

export const getAllPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  const result = await response.json();
  const data = result.data.posts;
  return data;
};

export const newPost = async (token, post) => {
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: post,
    }),
  });
  const result = await response.json();
  const newPost = result.data.post;
  return newPost;
};

// POST request via fetch using async/await
// request parameters: user(object, required)
// return parameters: token (string)
// json web token authenticates user future calls

export const userLogin = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    const token = result.data.token;
    console.log(token, "THIS IS YOUR TOKEN");
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = async (token) => {
  const response = await fetch(`${API_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  const data = result.data;
  return data;
};

export const registerUser = async (username, password) => {
  const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });
  const result = await response.json();
  const token = result.data.token;
  console.log(token, "THIS IS YOUR TOKEN");
  return token;
};

/**export const postMessage = async (token, postID, payload) => {
  const response = await fetch(
    `${API_URL + COHORT}/posts/${postID}/messages`,

    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        message: {
          content: `${payload}`,
        },
      }),
    }
  );

  const result = await response.json();

  console.log(result, "posted message after API");

  return result;
};*/
