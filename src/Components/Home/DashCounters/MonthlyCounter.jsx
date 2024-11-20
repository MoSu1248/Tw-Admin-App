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
import "./dailyCounter.css";
import moment from "moment";
import { useCollectionData } from "react-firebase-hooks/firestore";

const MonthlyCounter = () => {
  let currentYear = new Date().getFullYear();
  const [counter, setcounter] = useState();
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };


  const q = query(collectionGroup(db, " " +currentYear), where("Month", "==", `${moment(dateState).format("MMMM")}`));
  useCollectionData(q);
 
   useEffect(() => {
     async function getrequests() {
     
       const snapshot = await getCountFromServer(q);
       setcounter(snapshot.data().count);
     }
     getrequests();
   });

  
  return (
    <div className="dash-nurse-counter-container dash-monthly-counter">
      <div className="dash-nurse-counter-content-container">
        <FaUserInjured className="dash-counter-icon" />
        <div className="dash-counter-details-container">
          <h5 className="dash-counter-header">Monthly Clients Assessed</h5>
          <p className="dash-counter-no">{counter}</p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyCounter;
