import { Link } from "react-router-dom";
import "./Top-bar.scss"

export default function Topbar() {
  const user = false;
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
          <li className="top-list-item">
          <Link className="link" to="/">
          HOME
          </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/">
            ABOUT
            </Link>
          </li>
          <li className="top-list-item">
          <Link className="link" to="/">
          CONTACT
          </Link>
          </li>
          <li className="top-list-item">
          <Link className="link" to="/write">
          WRITE
          </Link>
          </li>
          <li className="top-list-item">
          {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="top-right">
      {
        user ? (
          <img
            className="top-img"
            src="./assets/img1.jpeg"
            alt=""
            />
        ) : (

          <ul style={{ display: "flex", justifyContent: "center", alignItems: "center", listStyle: "none"}}>
            <li style={{marginRight: "20px", fontSize: "18px", fontWeight: 100, cursor: "pointer"}}>
            <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li style={{marginRight: "20px", fontSize: "18px", fontWeight: 100, cursor: "pointer"}}>
            <Link className="link" to="/register">REGISTER</Link>
            </li>
          </ul>
        )
      }
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
