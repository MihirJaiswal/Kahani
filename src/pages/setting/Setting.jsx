import Sidebar from "../../components/sidebar/Sidebar"
import "./setting.scss"

export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle"><i class="fa-solid fa-gear"></i> Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src="./assets/img1.jpeg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Mihir" />
          <label>Email</label>
          <input type="email" placeholder="8NfZp@example.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
      
    </div>
  )
}
