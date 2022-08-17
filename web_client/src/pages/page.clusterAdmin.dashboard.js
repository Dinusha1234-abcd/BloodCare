import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import SlideMenuClusterAdmin from "../components/component.slidemenu.clusterAdmin";
import User from "../components/component.users.display";
import Camp from "../components/component.camp.display";
import Blood from "../components/component.blood.display";
import CampEvents from "../components/component.campEvents";
import doctor from '../assests/images/doctor.png';
import headNurse from '../assests/images/headNurse2.png';
import nurse from '../assests/images/nurse.png';
import driver from '../assests/images/driver.png';
import pastCamp from '../assests/images/pastCamp.png';
import OngoingCamp from '../assests/images/ongoingCamp.png';
import futureCamp from '../assests/images/furtureCamp.png';
import PendingCamp from '../assests/images/camp.png';
import DoughnutChart from '../components/compoent.doughnutChart'
import PieChart from '../components/component.pieChart'
import BarChart from '../components/component.barChart'
import '../assests/css/page.clusterAdmin.dashboard.css'
import '../assests/css/component.calender.css';
export default function ClusterAdminDashboard() {
  const [slidemenu, setSlideMenu] = useState(true);
  const [date, setDate] = useState(new Date())
  const passData = (data) => {
    setSlideMenu(data);
  };
  const [useData, setUseData] = useState({
    labels: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
    datasets: [{
      label: "Collect Blood Group",
      data: [90, 92, 22, 80, 21, 180, 90, 90],
      backgroundColor: ['#ED0E02', '#6E2820', '#E61D12', '#E36D66', '#963732', '#F2B8B1', '#6E3B35', '#7A514C']
    }]
  })
  const [useDataPieChart, setUseDataPreChart] = useState({
    labels: ['Other Cluster Center', 'Cluster Center'],
    datasets: [{
      label: "Collect Blood Group",
      data: [102, 20],
      backgroundColor: ['#E0BFBA', '#DD2D50']
    }]
  })
    var d = new Date();
    d.setMonth(d.getMonth() - 3);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [useDataBarChart, setUseDataBarchart] = useState({

    labels: [months[d.getMonth()  ],months[d.getMonth() +1],months[d.getMonth() +2],months[d.getMonth()+3]],
    datasets: [{
      label: "Number of Camps",
      data: [90, 92, 22, 80, 21, 180, 90, 90],
      backgroundColor: ['#ED0E02', '#6E2820', '#E61D12', '#E36D66', '#963732', '#F2B8B1', '#6E3B35', '#7A514C']
    }]
  })

  return (
    <div>
      <SlideMenuClusterAdmin headerName={"Dashboard"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <div id="row-1">
          <div id="medical-staff">
            <h3>Medical Staff Members</h3>
            <div id="users-count" display='inline'> <User id='user' image={doctor} name="Doctor" />  <User id='user' image={headNurse} name="Head Nurse" status={true} />  <User id='user' image={nurse} name="Nurse" />  <User id='user' image={driver} name="Driver" /> </div>
          </div>
          <div id="camp-clusterAdmin">
            <h3>Blood Camps</h3>
            <div id="camp-count-clusterAdmin"  > <Camp image={pastCamp} name="Past Camp" />  <Camp image={OngoingCamp} name="Ongoing Camp" status={true} />  <Camp image={futureCamp} name="Future Camp" status={true} />  <Camp image={PendingCamp} name="Pending Camp" status={true} /></div>
          </div>
        </div>
        <div id="row-2">
          <div id="sub-row-1">
            <div id="sub-row-2">
              <h3>Blood Counter Details</h3>
              <div id="blood"><Blood name='O+' /><Blood name='A+' /><Blood name='B+' /><Blood name='AB+' /></div>
              <div id="blood"><Blood name='O-' /><Blood name='A-' /><Blood name='B-' /><Blood name='AB-' /></div>
            </div>
            <div id="sub-row-3">
              <div id="blood-month-dashboard-clusterAdmin">
                <h3>Blood Collection</h3><br />
                <PieChart chartData={useDataPieChart} />
                <div id="chart-dashboard-clusterAdmin">
                  <h3>Blood Percentage</h3><br />
                  <DoughnutChart chartData={useData} />
                </div>
              </div>
            </div>
          </div>
          <Calendar onChange={setDate} readOnly={true} value={date} id="calender" />

          <div id="camp-events">
            <h3 id="camp-events-name">Upcoming Camp Events</h3>
            <div id="camp-events-list"> <p>2022/08/01 Camp Number 100  <button id="view-button">View</button> </p></div>
            <div id="camp-events-list"> <p>2022/08/01 Camp Number 101  <button id="view-button">View</button> </p></div>
            <div id="camp-events-list"> <p>2022/08/01 Camp Number 102  <button id="view-button">View</button> </p></div>
            <div id="camp-events-list"> <p>2022/08/01 Camp Number 103  <button id="view-button">View</button> </p></div>
            <div id="camp-events-list"> <p>2022/08/01 Camp Number 104  <button id="view-button">View</button> </p></div>
          </div>
        </div>
        <div id="row-3">
          <div id="sub-row-5">
            <h3>Blood Camps</h3><br />
            <PieChart chartData={useDataPieChart} />
          </div>
          <div id="sub-row-6">
            <h3>Camp Organization</h3><br />
            <BarChart chartData={useDataBarChart} />
          </div>
        </div>
      </div>
    </div>
  );
}