import React, { useState, useEffect, useReducer, prevState } from "react";
import { db } from "../../firebaseConfig/firebase";
import { FaUserInjured } from "react-icons/fa";
import {
  collection,
  collectionGroup,
  getCountFromServer,
  query,
  where
} from "firebase/firestore";
import "./dailyCounter.css";
import { IoLogInSharp } from "react-icons/io5";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { useCollectionData } from "react-firebase-hooks/firestore";

const DailyLogin = ({month, test }) => {
  let currentYear = new Date().getFullYear();
    const [counter, setcounter] = useState();
    
  const q = query(collection(db, "Nurses"), where("Status", "==", `Online`));
 useCollectionData(q);

  useEffect(() => {
    async function getrequests() {
    
      const snapshot = await getCountFromServer(q);
      setcounter(snapshot.data().count);
    }
    getrequests();
  });
  return (
    <div className="dash-nurse-counter-container counter-margins Daily-logins-margins">
      <div className="dash-nurse-counter-content-container">
        < HiOutlineStatusOnline  className="dash-counter-icon" />
        <div className="dash-counter-details-container">
          <h5 className="dash-counter-header">Active Users</h5>
          <p className="dash-counter-no">{counter}</p>
        </div>
      </div>
    </div>
  );
};

export default DailyLogin;
