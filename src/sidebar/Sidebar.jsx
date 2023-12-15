import "./sidebar.scss"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img src="" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga aperiam voluptate rerum debitis exercitationem.
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">Genre</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Horror</li>
          <li className="sidebarListItem">Romance</li>
          <li className="sidebarListItem">Adventure</li>
          <li className="sidebarListItem">Action</li>
          <li className="sidebarListItem">Drama</li>
          <li className="sidebarListItem">Comedy</li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOWERS</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        </div>
      </div>
    </div>
  )
}
