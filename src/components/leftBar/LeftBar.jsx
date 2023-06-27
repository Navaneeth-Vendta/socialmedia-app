import React, { useContext } from "react";
import "./leftBar.scss";
import LoginImg from "../../img/login-bg.jpg";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import Groups2Icon from "@mui/icons-material/Groups2";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import { EventAvailableOutlined} from "@mui/icons-material";
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import CollectionsIcon from '@mui/icons-material/Collections';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MessageIcon from '@mui/icons-material/Message';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SupportIcon from '@mui/icons-material/Support';
import SchoolIcon from '@mui/icons-material/School';
import { AuthContext } from "../../context/authContext";
const LeftBar = () => {

  const {currentUser}= useContext(AuthContext)
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={LoginImg} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <PeopleAltSharpIcon />
            <span>Friends</span>
          </div>
          <div className="item">
            <Groups2Icon />
            <span>Groups</span>
          </div>
          <div className="item">
            <AddBusinessOutlinedIcon />
            <span>Market</span>
          </div>
          <div className="item">
            <WatchLaterOutlinedIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <MemoryOutlinedIcon />
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <EventAvailableOutlined />
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsportsOutlinedIcon/>
            <span>Gaming</span>
          </div>
          <div className="item">
            <CollectionsIcon/>
            <span>Gallery</span>
          </div>
          <div className="item">
            <OndemandVideoIcon/>
            <span>Videos</span>
          </div>
          <div className="item">
            <MessageIcon />
            <span>Messages</span>
          </div>

        </div>
        <hr/>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <LocalMallIcon/>
            <span>Fundraisers</span>
          </div>
          <div className="item">
            <SupportIcon/>
            <span>Tutorials</span>
          </div>
          <div className="item">
            <SchoolIcon />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
