import { Link } from "react-router-dom"
import "./register.scss"

const Register=()=> {
  return (
    <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Social Life</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore maxime laboriosam laudantium eum quas pariatur animi dolor illo? Quaerat quod ullam fugit nihil voluptate cumque unde sint deleniti nisi?</p>
                    <span>Already have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>

                </div>
                <div className="right">
                    <h1>Sign Up</h1>
                    <form action="">
                        <input type="text" placeholder="username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="password" />
                        <button>Register</button>
                    </form>

                </div>
            </div>
        </div>
  )
}

export default Register