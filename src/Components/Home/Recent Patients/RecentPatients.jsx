import { useCollectionData ,  } from "react-firebase-hooks/firestore";
import { setDoc, updateDoc, doc, deleteDoc,  orderBy } from "firebase/firestore";
import { collection, limit } from "firebase/firestore";
import { collectionGroup, query, where, getDocs } from "firebase/firestore";  
import React, { useState, useEffect } from "react";
import AppointFilter from "./PatientsOptions";
import { db  } from "../../firebaseConfig/firebase";
import "./recentPatients.css";
import Folder from "../../Resources/folder.png"
import { FaUserAlt } from "react-icons/fa";

export default function ChildrenList({ path, id }) {

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const cdate = new Date().getDate();
  const currentDate = new Date();
  const currentYears = currentDate.getFullYear();

console.log(currentYears);

  let q = query(collectionGroup(db, " "+ currentYears),  where("Appointment_Date", "==" ,  `${day}, ${month} ${cdate}, ${currentYears}`), orderBy("Appointment_Date", `desc`), limit(10));
  
  const [docs, loading, error] = useCollectionData(q);
  
  return (
      <>        
              <div class=" border-styling dash-recent-container-styling">
              <thead className="nurse-recent-patients-header dash-recent-patients">
                                  <h6 className="header_5 header_styling">Name & ID</h6>
                                  <h6 className="header_5 header_styling">Appointment Date</h6>
                                  <h6 className="header_5 header_styling">Location</h6>                                     
                                  <h6 className="header_5 header_styling">Nurse ID</h6>                                     
                          </thead>
            <div class="dash-scrolling">                     
                          <div class="css-0">
                              <table className="nurese-recent-patients-table">
                                  
                              {docs?.map((doc) => (
                              <tbody className="nurse-recent-patients-info" >
                                          <p className="data-styling">{doc.clientID}</p>
                                      <p className=" data-styling">{doc.Appointment_Date}</p>
                                  <p className=" data-styling">{doc.Appointment_Location}</p>
                                  <p className="data-styling">{doc.Nurse_Id}</p>

                                  <AppointFilter appID={doc.Appointment_ID} appointmentPath={`/patients/appointment/${doc.clientID}` } clientPath={`/patients/Personal/${doc.clientID}`}/>
                                    </tbody>
                                    ))}
                          </table>                      
              </div>    
            </div>                                             
          </div>
    </>
  );
}
