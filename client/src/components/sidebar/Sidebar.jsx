import "./sidebar.css"

export default function Sidebar() {
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
          <li className="sidebarListItem">Recent Pickups</li>
          <li className="sidebarListItem">Pursuits</li>
          <li className="sidebarListItem">Legends of the Game</li>
          <li className="sidebarListItem">Rookies in the Pros</li>
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
