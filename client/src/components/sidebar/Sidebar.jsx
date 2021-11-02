import axios from "axios";
import { useEffect, useState } from "react"
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect( () => {
    const getCategories = async () => {
      const res = await axios.get("/categories")
      setCategories(res.data)
    }
    getCategories();
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">
          ABOUT ME
        </span>
        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F04%2F07%2Felmo.jpg" alt="" height="300px" width="400px"/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, porro sit necessitatibus nostrum tempora perspiciatis impedit ab, est, optio ut pariatur sapiente corrupti fugiat eligendi. Provident consectetur praesentium minus eligendi!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES </span>
        <ul className="sidebarList">
          {categories.map( (c) => (
            <Link to={`/?categories=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
            
          ))}
          

        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-linkedin"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-google"></i>
        </div>
      </div>
    </div>
  )
}
