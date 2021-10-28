import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user = false;
  return (
    <div className="top">

      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-linkedin"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-google"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link to="/" className="link">HOME</Link></li>
          <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
          <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
          <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
          <li className="topListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className="topImage" src="https://i.guim.co.uk/img/media/03b248a38342922414013d948ea68909b83daa14/0_100_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c5b9bfe743f52324231b0f976d9c3a6f" alt="Elmo in a suit" />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )
        }
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
