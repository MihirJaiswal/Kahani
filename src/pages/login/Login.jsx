import "./login.scss"

export default function Login() {
  return (
    <div className="login">
    <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter email..." />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter password..." />
        <button className="loginButton">Login</button>
        <span className="loginForgot">Forgot Password?</span>
        <button className="loginRegisterButton">
          Create a New Account
        </button>
      </form>
    </div>
  )
}
