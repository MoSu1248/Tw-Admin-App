import { useState } from "react";
import "./Banner.css";
// import { TbMathGreater } from "react-icons/tb";
// import { MdSunny } from "react-icons/md";
// import { HiOutlineMoon } from "react-icons/hi";
// import { IoMdNotifications } from "react-icons/io";
import female from "../images/woman.png"
// import { motion } from "framer-motion";
// import PopUpBtn from "../Popups/PopUpBtn";
// import { Link } from "react-router-dom";
// import SearchableDropdown from "./Search/SearchapleDropdown";
// import {animals} from "./data"
import "./Search/searchBanner.css"
import { auth } from "../firebaseConfig/firebase";
import { signOut } from "firebase/auth";
import Dark from "../DarkMode/Dark";
import { RiLogoutBoxRFill } from "react-icons/ri";

export default function Home(props , sendDataToParent ) {
  const sign = () => {
    signOut(auth).then(() => {
      console.log("signedOut");
    });
  };

  
  const currentDate = new Date();
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  
  const [openProfile3, setOpenProfile3] = useState(false);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("Select option...");

  const variants = {
    closed: {  y: "-100%" , display: "none",  opacity: 0 },
    open: {  y: 0, display:"block" , opacity: 1},
  }

  return (
    <div className="home-banner">
      <div className="b-heading">
        <h className = "pages-heading">
        Pages / {props.title}
        </h>
        <h1 className="banner-title">{props.title}</h1>
      </div>
      <div className="banner-tools">
        <div className="date-container">
          <h5 className="date"> {currentDate.toDateString()}</h5>
        </div>
        {openProfile3 &&(
          <div className=" dash-dropDown_notification" onMouseLeave={() => setOpenProfile3((prev) => (!prev))}>
          <div className="banner-dropwdown-btn-container" onClick={sign}>
            <p className="banner-signout-styling ">Signout</p>
            <RiLogoutBoxRFill className="hover-icon" />

        </div>
           </div>
        )}
         <div className="banner-btn-container">
            <div>
            <Dark/>
          </div>
        </div>
        <div className="profile-container">
         <img src= {female} alt="test" className="user-icon" onClick={()=> setOpenProfile3((prev)=>(!prev))}/>
        </div>
      </div>
    </div>
  );
}
