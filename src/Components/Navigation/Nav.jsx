import React, { useState, useEffect , useReducer , prevState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./twlogo.svg";
import smallLogo from "./small-logo-tw2.svg";
import { auth } from "../firebaseConfig/firebase";
import { signOut } from "firebase/auth";
import Logout from "../Logout/Logout";
import "./nav-sub.css"
import "./nav.css"
import {
  collection,
   getCountFromServer,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { FaUserInjured } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { RiHome6Fill } from "react-icons/ri";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { ChevronFirst } from "lucide-react"
import { IoChevronForward } from "react-icons/io5";
import { AiFillDatabase } from "react-icons/ai";
import { TiWarning } from "react-icons/ti";
import RequestCounter from "./RequestCounter"


const Nav = () => {
 

  const sign = () => {
    signOut(auth).then(() => {
      console.log("signedOut");
    });
  };
  
  const [RequestCount, setRequestCount] = useState(0);
  const [nav, setnav] = useState(true);
  const [logoUsed , setLogoused] = useState(smallLogo)


  useEffect(() => {
    async function getrequests() {       
      const coll =  collection(db, "Requests");
      const snapshot = await getCountFromServer(coll);
      setRequestCount(snapshot.data().count)
    };
    getrequests();
    
  },);

  const changeName = () => {
      let value = nav;

      if (value === false) {
        setLogoused(smallLogo);
      } else {
        setLogoused(logo);
      }
  };
 
  const checkCount= () => {
    let value = nav;

    if (value === false) {
      setLogoused(smallLogo);
    } else {
      setLogoused(logo);
    }
};

  return (
    <div className={`navigation ${nav && "uncollapsed"}`}>
      <header>
        <img className="profile-img inner" src={logoUsed} alt="user-img" />
        
        <button  className="expand-btn" onClick={() => {
          setnav((prevState) => !prevState) 
          changeName();
        }} ><ChevronFirst /></button>
      </header>
      <div className="nav-content">
        <div className="css-1xn168n"></div>
        <NavLink
          to={"/" || "/Personal"}
          className={({ isActive }) => {
            return isActive ? "active" : "non-active";
          }}
        >
          <div className="test-title">
            <RiHome6Fill className="hover-icon" />{" "}
            <p className="title">Home</p>
          </div>
          <div className="css-j3id07"></div>
        </NavLink>

        <div className="testd">
        <NavLink
          to="/patients"
          className={({ isActive }) => {
            return isActive ? "active" : "non-active";
          }}
        >
            <div className="testdiv">
              <div className="test-title">
                <FaUserInjured className="hover-icon" />
                <p className="title">Clients</p>
              </div>
            </div>
            
              <div className="css-j3id07"></div>
          </NavLink>

          <div className="hide">
          <NavLink
              to="/patients/Personal"
              is
              className={({ isActive }) => {
                return isActive ? "active-sub" : "non-active-sub";
              }}
          >
              <div className="testdiv">
                <div className="test-title">
                  <p className="title"><IoChevronForward className="nav-sub-icon"/>Personal</p>
          
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/patients/Medication"
              is
            className={({ isActive }) => {
              return isActive ? "active-sub" : "non-active-sub";
            }}
          >
              <div className="testdiv">
                <div className="test-title">
                  <p className="title"><IoChevronForward className="nav-sub-icon"/>Medication</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/patients/appointment"
              is
            className={({ isActive }) => {
              return isActive ? "active-sub" : "non-active-sub";
            }}
          >
              <div className="testdiv">
                <div className="test-title">
                  <p className="title"><IoChevronForward className="nav-sub-icon"/>Appointment History</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/patients/Referrals"
              is
            className={({ isActive }) => {
              return isActive ? "active-sub" : "non-active-sub";
            }}
          >
              <div className="testdiv">
                <div className="test-title">
                  <p className="title"><IoChevronForward className="nav-sub-icon"/>Referrals</p>
                </div>
              </div>
          </NavLink>
        </div>

          <NavLink
          to="/AlertedPatients"
          className={({ isActive }) => {
            return isActive ? "active" : "non-active";
          }}
        >
            <div className="testdiv">
              <div className="test-title">
                <TiWarning className="hover-icon" />
                <p className="title">Alerted Clients</p>
              </div>
            </div>
            
              <div className="css-j3id07"></div>
        </NavLink>


        
        </div>
    
<div className="testd">
<NavLink 
          to="/requests/inbox"
          className={({ isActive }) => {
            return isActive ? "active" : "non-active";
          }}
        >
          <div className="test-title">
            <IoMail className="hover-icon" />{" "}
            <p className="title">Mailbox</p>
              <RequestCounter/>
          </div>
          <div className="css-j3id07"></div>
        </NavLink>
        <div className="hide">
            <NavLink
              to="/requests/Inbox"            
            className={({ isActive }) => {
              return isActive ? "active-sub" : "non-active-sub";
            }}
          >
              <div className="testdiv">
                <div className="test-title">
                  <p className="title"><IoChevronForward className="nav-sub-icon"/>
                  Inbox</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/requests/deleted"          
            className={({ isActive }) => {
              return isActive ? "active-sub" : "non-active-sub";
            }}
          >
              <div className="testdiv">
                <div className="test-title">
                  <p className="title"><IoChevronForward className="nav-sub-icon"/>
                  Deleted</p>
                </div>
              </div>
            </NavLink>
        </div>
        </div>
        <div className="testd">
        <NavLink
          to="/Nurses"
          className={({ isActive }) => {
            return isActive ? "active" : "non-active";
          }}
        >
            <div className="testdiv">
            <div className="test-title">
            <HiUsers className="hover-icon" />{" "}
            <p className="title">Users</p>
          </div>
            </div>
              <div className="css-j3id07"></div>
        </NavLink>
        <div className="hide">
          <NavLink
              to="/Nurses/nurse"
              is
            className={({ isActive }) => {
              return isActive ? "active-sub" : "non-active-sub";
            }}
          >
              <div className="testdiv">
                <div className="test-title">
                  <p className="title"><IoChevronForward className="nav-sub-icon"/>
                  Nurse Profile</p>
                </div>
              </div>
            </NavLink>
        </div>
        </div>
        <NavLink
          to="/NewNurses"
          className={({ isActive }) => {
            return isActive ? "active" : "non-active";
          }}
        >
          <div className="test-title">
            <MdGroupAdd className="hover-icon" />{" "}
            <p className="title">Register</p>
          </div>
          <div className="css-j3id07"></div>
          
        </NavLink>
        <NavLink
          target="_blank" rel="noopener noreferrer"
          to="https://console.firebase.google.com/u/0/project/truckingwellness-714f3/firestore/databases/-default-/data"
          className={({ isActive }) => {
            return isActive ? "active" : "non-active";
          }}
        >
          <div className="test-title">
            <AiFillDatabase className="hover-icon" />{" "}
            <p className="title">Database</p>
          </div>
          <div className="css-j3id07"></div>
          
        </NavLink>
        <div className="css-1xn168n-bottom"></div>

        <div className="logout-container logout-active" onClick={sign}>
          <div className="test-title">
            <RiLogoutBoxRFill className="hover-icon" />{" "}
            <p className="title">Signout</p>
          </div>
          <div className="css-j3id07"></div>

        </div>
      </div>
    </div>
  );
};

export default Nav;
