import "./navbar.css";

import { menu_icon, logo, search_icon, upload_icon, more_icon, notification_icon, profile_icon } from "../../assets";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" onClick={()=>setSidebar(prev=>!prev)} src={menu_icon} alt="" />
        <Link to='/'><img className="logo" src={logo} alt="" /></Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img className="user-icon" src={profile_icon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
