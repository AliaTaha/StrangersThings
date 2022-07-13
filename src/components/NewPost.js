import React, { useState } from "react";
import { newPost } from "../api";

const NewPost = (props) => {
  const { setNewPostFlag, allPosts, setAllPosts } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("free");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const token = localStorage.getItem("token", token);

      console.log(token, "in new post");

      const newPost = {
        title: title,

        description: description,

        price: price,
      };

      console.log(newPost, "new post in new post");

      const freshPost = await newPost(token, newPost);

      setAllPosts([...allPosts, freshPost]);

      setNewPostFlag(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="box">
      {`New Post Details`}

      <form onSubmit={handleSubmit} className="box form">
        <label>Title</label>

        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>

        <label>Description</label>

        <input
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></input>

        <label>Price</label>

        <input
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        ></input>

        <button type="submit">Send</button>
      </form>

      <button
        onClick={() => {
          setNewPostFlag(false);
        }}
      >
        Cancel New Post
      </button>
    </div>
  );
};

export default NewPost;
