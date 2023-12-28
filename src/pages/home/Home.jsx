import React, { useEffect, useState } from "react";
import { PostContainer, NewPost } from "../../components/home/style";

import user from "./img/user.png";
import AddPost from "../../components/home/post/add/AddPost";
import PostDiv from "../../components/home/post/PostDiv";
import { useAuth } from "../../context/Context";
import { getAllPosts } from "../../components/home/getAllPostsApi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);
  const { userDetails } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [processingMsg, setProcessingMsg] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts(setPosts);
  }, []);

  const handleAddPost = () => {
    userDetails.username ? setShow(true) : navigate("/login");
  };

  return (
    <PostContainer>
      <h1 className="heading">All Posts</h1>
      <NewPost onClick={handleAddPost}>New Post</NewPost>

      {posts.map((post, index) => (
        <PostDiv
          key={index}
          user={user}
          setSuccessMsg={setSuccessMsg}
          setProcessingMsg={setProcessingMsg}
          setError={setError}
          id={post._id}
          title={post.title}
          desc={post.description}
          time={post.createdAt}
          name={post.user}
          email={post.email}
        />
      ))}

      {show && <AddPost setShow={setShow} />}
    </PostContainer>
  );
};

export default Home;
