import React, { useState, useEffect, useReducer, prevState } from "react";
import { db } from "../../firebaseConfig/firebase";
import { FaUserInjured } from "react-icons/fa";
import {
  collection,
  collectionGroup,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import moment from "moment";
import "./dailyCounter.css";
import { useCollectionData } from "react-firebase-hooks/firestore";

const DailyCounter = () => {
    let currentYear = new Date().getFullYear();
    const [counter, setcounter] = useState();
    const [dateState, setDateState] = useState(new Date());
    const changeDate = (e) => {
      setDateState(e);
    };

    const q = query(collectionGroup(db, " " +currentYear), where("Day", "==", `${moment(dateState).format("D")}`));
    useCollectionData(q);
   
     useEffect(() => {
       async function getrequests() {
       
         const snapshot = await getCountFromServer(q);
         setcounter(snapshot.data().count);
       }
       getrequests();
     });


  return (
    <div className="dash-nurse-counter-container counter-margins">
      <div className="dash-nurse-counter-content-container">
        <FaUserInjured className="dash-counter-icon" />
        <div className="dash-counter-details-container">
          <h5 className="dash-counter-header">Daily Clients Assessed </h5>
          <p className="dash-counter-no">{counter}</p>
        </div>
      </div>
    </div>
  );
};

export default DailyCounter;
