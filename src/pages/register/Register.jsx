import { Link } from "react-router-dom"
import "./register.scss"

export default function Register() {
  return (
    <div className="register">
    <span className="registerTitle">register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter Username..." />
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Enter email..." />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter password..." />
        <button className="registerButton">register</button>
        <button className="registerLoginButton">
          <Link className="link" to="/login">Login</Link>
        </button>
      </form>
    </div>
  )
}
