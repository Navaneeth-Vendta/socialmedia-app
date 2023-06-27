import React from "react";
import "./posts.scss";
import Login from "../../img/login-bg.jpg";
import Register from "../../img/register-bg.jpg";
import Post from "../post/Post";
const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Yash",
      userId: 1,
      profilePic: Login,
      desc: "It sjnsdljsj;dflksldjf",
      img: Register,
    },
    {
      id: 2,
      name: "Ram",
      userId: 2,
      profilePic: Login,
      desc: "It sjnsdljsj;dflksldjf",
      img: Register,
    },
    {
      id: 3,
      name: "Marko",
      userId: 3,
      profilePic: Login,
      desc: "It sjnsdljsj;dflksldjf",
      img: Register,
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
