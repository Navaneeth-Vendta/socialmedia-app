import React from "react";
import "./rightBar.scss";
import LoginImg from "../../img/login-bg.jpg";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>suggestions for you</span>
          <div className="user">
            <div className="user-info">
              <img src={LoginImg} alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={LoginImg} alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities </span>
          <div className="user">
            <div className="user-info">
              <img src={LoginImg} alt="" />
              <p>
                <span>Jane Doe</span>
                Updated their profile pic
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={LoginImg} alt="" />
              <p>
                <span> Jane Doe </span>
                Updated their profile pic
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={LoginImg} alt="" />
              <p>
                <span>Jane Doe</span>
                Updated their profile pic
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online</span>
          <div className="user">
            <div className="user-info">
              <img src={LoginImg} alt="" />
              <div className="online">

              </div>

              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={LoginImg} alt="" />
              <div className="online">
                
              </div>

              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={LoginImg} alt="" />
              <div className="online">
                
              </div>

              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={LoginImg} alt="" />
              <div className="online">
                
              </div>

              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
