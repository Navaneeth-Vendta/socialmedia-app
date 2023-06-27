import React, { useContext } from "react";
import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Login from '../../img/login-bg.jpg'
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { AuthContext } from "../../context/authContext";
const NavBar = () => {
  const {toggle,darkMode}= useContext(DarkModeContext)
  const {currentUser}= useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode?<WbSunnyIcon onClick={toggle}/>:<DarkModeOutlinedIcon onClick={toggle} />}
        <AppsOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" name="" id="" placeholder="search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img src={Login} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
