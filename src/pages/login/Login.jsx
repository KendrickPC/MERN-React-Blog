import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="Enter yoru email..." className="loginInput" ></input>
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." className="loginInput" ></input>
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
          
        </button>
    </div>
  )
}
