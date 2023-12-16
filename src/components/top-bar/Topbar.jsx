import "./Top-bar.scss"

export default function Topbar() {
  return (
    <div className="top">
      <div className="top-left">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-x-twitter"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">HOME</li>
          <li className="top-list-item">ABOUT</li>
          <li className="top-list-item">CONTACT</li>
          <li className="top-list-item">WRITE</li>
          <li className="top-list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="top-right">
        <img
          className="top-img"
          src="./assets/img1.jpeg"/>
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
