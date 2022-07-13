import React, { useEffect, useState } from "react";
import { NewPost } from "./";
import { getAllPosts } from "../api";

const Posts = (props) => {
  const [newPostFlag, setNewPostFlag] = useState(false);
  const { setSinglePost, setMessageFlag } = props;
  const [allPosts, setAllPosts] = useState([]);

  const handleMessage = (event) => {
    event.preventDefault();
    const singledOutPost = allPosts.filter(
      (element) => element._id == event.target.id
    );
    setSinglePost(singledOutPost[0]);
    setMessageFlag(true);
  };

  useEffect(() => {
    async function fetchPosts() {
      if (!allPosts.length) {
        const retrievedPosts = await getAllPosts();
        setAllPosts(retrievedPosts);
      }
    }

    fetchPosts();
  }, []);

  const displayPosts = allPosts.length ? (
    <div className="boxAll">
      {allPosts.map((element) => {
        return (
          <div className="box" key={element._id}>
            <h2 className="postTitle">{element.title}</h2>
            <p className="postUsername">{element.author.username}</p>
            <p className="postsDescription">{element.description}</p>
            <p className="postsPrice">{element.price}</p>
            <p className="postWillDeliver">
              Will Deliver: {element.willDeliver ? "Yes" : "No"}
            </p>
            <button id={`${element._id}`} onClick={handleMessage}>
              {console.log(element, "this is the post")}
              Message Owner
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    <div>Loading Posts...</div>
  );

  return (
    <div className="boxAllPosts">
      {newPostFlag ? (
        <NewPost
          setNewPostFlag={setNewPostFlag}
          setAllPosts={setAllPosts}
          allPosts={allPosts}
        />
      ) : (
        <>
          <button
            onClick={() => {
              setNewPostFlag(true);
            }}
          >
            Create New Post
          </button>

          {displayPosts}
        </>
      )}
    </div>
  );
};

export default Posts;
