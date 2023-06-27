// import React from 'react'
import { Link } from "react-router-dom"
import "./login.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login=()=>{
    const {login} = useContext(AuthContext);
    const handleLogin=()=>{
        login();
     }
    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore maxime laboriosam laudantium eum quas pariatur animi dolor illo? Quaerat quod ullam fugit nihil voluptate cumque unde sint deleniti nisi?</p>
                    <span>Don't have an account?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                    

                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login