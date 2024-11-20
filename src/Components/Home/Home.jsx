import React from "react";
import Banner from "../Banner/Banner";
import { FaUserCircle } from "react-icons/fa";
import "./Home.css";
import RecentPatients from "./Recent Patients/RecentPatients"
import RecentPatientsCont from "./Recent Patients/RecentPatientsContainer"
import RecentMessages from "./Recent Messages/RecentMessages"
import UserStatus from "./UserStatus/UserStatus"
import Test from "./Test/TestCharts"
import Graph from "./recentPatientsGraphs/graphs"
import MonthlyCounter from "./DashCounters/MonthlyCounter";
import DailyCounter from "./DashCounters/DailyCounter";
import DailyLogin from "./DashCounters/DailyLogin";

const Home = () => {  
  return (
    <div className="wrapper" >
        <Banner title="Home Dashboard" />
      <body className=" dashboard-container">
          <div className="graph-container">
            <div className="graph-inner-container">
              <div className="dash-counter-container">
                <MonthlyCounter />
                <DailyCounter />
                <DailyLogin />
              </div>
            <div className="flex-container">
            <Graph />
            <Test />
            </div>
            </div>
          <RecentMessages />
          </div>
          <div className="dash-bottom-container">
            <div className="dash-bottom-login-container">
              <RecentPatientsCont />
            </div>
            <UserStatus />
          </div>
      </body>
    </div>
  );
};


export default Home;
