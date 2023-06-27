import React, { useContext } from 'react'
import './comments.scss'
import Login from "../../img/login-bg.jpg";
import Register from "../../img/register-bg.jpg";
import { AuthContext } from '../../context/authContext';

const Comments = () => {
    const {currentUser}=useContext(AuthContext)
    const comments = [
        {
          id: 1,
          name: "Yash",
          userId: 1,
          profilePicture: Login,
          desc: "wow it's fire",
         
        },
        {
          id: 2,
          name: "Ram",
          userId: 2,
          profilePicture: Login,
          desc: "It sjnsdljsj;dflksldjf",
        
        },
        {
          id: 3,
          name: "Marko",
          userId: 3,
          profilePicture: Login,
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempore deserunt non quo pariatur ipsam, consequatur mollitia cumque odit facilis sunt ipsum animi ducimus aliquid repellendus eos quae, ullam sint.",
        
        },
      ];

  return (
    <div className='comments'>
        <div className="write">
        <img src={currentUser.pic} alt="" />
        <input type="text" placeholder='write a comment' />
        <button>Send</button>

        </div>
        {comments.map((comment)=>{
            return (
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            )
        })}
    </div>
  )
}

export default Comments