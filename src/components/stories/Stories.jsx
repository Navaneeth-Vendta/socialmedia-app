import React, { useContext } from "react";
import "./stories.scss";
import Login from "../../img/login-bg.jpg";
import { AuthContext } from "../../context/authContext";
export const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "Aryan",
      pic: Login,
    },
    {
      id: 2,
      name: "Kane",
      pic: Login,
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.pic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>

      {stories.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.pic} alt="" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};
