import React, { useEffect, useState } from "react";
import { NewPost } from "./";
import { getAllPosts } from "../api";

const Posts = (props) => {
  const [newPostFlag, setNewPostFlag] = useState(false);
  const [modPostFlag, setModFlag] = useState(false);
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
    <ol className="boxAll">
      {allPosts.map((post) => {
        return (
          <li className="box" key={`boxAllPosts-${post._id}`}>
            {post.title}

            <button id={`${post._id}`} onClick={handleMessage}>
              Message Owner
            </button>
          </li>
        );
      })}
    </ol>
  ) : (
    <div>Loading Posts...</div>
  );

  return (
    <div className="boxAllPosts">
      {`This is our Posts Component`}

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
