import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import Calendar from 'react-calendar';
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import User from "../components/headnurse/component.users.display.headnurse";
import Camp from "../components/headnurse/component.camp.display.headnurse";
import Blood from "../components/headnurse/component.blood.display.headnurse";
import CampEvents from "../components/component.campEvents";
import doctor from '../assests/images/doctor.png';
import headNurse from '../assests/images/headNurse.png';
import nurse from '../assests/images/nurse.png';
import driver from '../assests/images/driver.png';
import pastCamp from '../assests/images/pastCamp.png';
import OngoingCamp from '../assests/images/ongoingCamp.png';
import futureCamp from '../assests/images/furtureCamp.png';
import PendingCamp from '../assests/images/camp.png';
import '../assests/css/headnurse/headnurse.dashboard.css'
import '../assests/css/component.calender.css';
import DoughnutChart from '../components/compoent.doughnutChart';
import PieChart from '../components/component.pieChart';
import BarChart from '../components/component.barChart';
// import { getDashboard } from "../../../server/services/headnurse/dashboard";


export default function HeadNurseDashboard() {
  const [slidemenu, setSlideMenu] = useState(true);
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [success, setSuccess] = useState(false); 
  const [date, setDate] = useState(new Date())

  const passData = (data) => {
    setSlideMenu(data);
  };

  useEffect((() => { getPastCamp() }), [])
  

    function getPastCamp() {
      axios.get("http://localhost:8070/headnurse/pastcamp").then(
          (res) => {
              setData(res.data.pastcamp);
              console.log(res.data);
  
              setLoading(!loading);
          }).catch((err) => {
              //sever error
              setLoading(!loading);
              setUnsuccessMessage("Network Connection Issue Please Try Again");
              setUnSuccess(true)
          })
    }

    function unsucessbutton(){
      window.location = "/assigncamps";
    }
  
    const list = [];
   

  

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
      <SlideMenuHeadNurse headerName={"Dashboard"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <div id="row1-headnurse">
          <div id="medical-staff-headnurse">
            <h3>Medical Staff Members</h3>
            <div id="users-count-headnurse" display='inline'> <User id='user' image={doctor} name="Doctor" count='2'/>   <User id='user' image={nurse} name="Nurse" count='3'/>  <User id='user' image={driver} name="Driver" count='01'/> </div>
          </div>
          <div id="camp-headnurse">
            <h3>Blood Camps</h3>
            <div id="camp-count-headnurse" display='inline'> <Camp image={pastCamp} name="Past Camp" count='1' />  <Camp image={futureCamp} name="Future Camp" count='5'status={true} /> </div>
          </div>
        </div>
        <div id="row2-headnurse">
          <div id="sub-row1-headnurse">
            <div id="sub-row2-headnurse">
              <h3>Blood Counter Details</h3>
              <div id="blood-headnurse"><Blood name='O+' count='2' /><Blood name='A+' count='1'/><Blood name='B+' count='1' /><Blood name='AB+' count='0' /></div>
              <div id="blood-headnurse"><Blood name='O-' count='0'/><Blood name='A-' count='1'/><Blood name='B-' count='0' /><Blood name='AB-' count='2'/></div>
            </div>
            <div id="sub-row3-headnurse">
              <div id="blood-month-dashboard-headnurse">
              <h3>Collection Blood</h3><br />
              <DoughnutChart chartData={useData} />
                
              </div>
            </div>
          </div>
          <Calendar onChange={setDate} readOnly={true} value={date} id="calender" />

          <div id="camp-events-headnurse">
            <h3 id="camp-events-name-headnurse">Upcoming Camp Events</h3>
            <div id="camp-events-list-headnurse"> <p>2022/10/30 Camp Number 3  <button id="view-button-headnurse">View</button> </p></div>
            <div id="camp-events-list-headnurse"> <p>2022/10/30 Camp Number 5  <button id="view-button-headnurse">View</button> </p></div>
            <div id="camp-events-list-headnurse"> <p>2022-11-04 Camp Number 4  <button id="view-button-headnurse">View</button> </p></div>
            <div id="camp-events-list-headnurse"> <p>2022-11-05 Camp Number 11  <button id="view-button-headnurse">View</button> </p></div>
            <div id="camp-events-list-headnurse"> <p>2022/11/24 Camp Number 2  <button id="view-button-headnurse">View</button> </p></div>
          </div>
        </div>
        <div id="row3-headnurse">
          
          <div id="sub-row6-headnurse">
            <h3>Monthly Blood</h3><br />
            <BarChart chartData={useDataBarChart} />
          </div>
        </div>
      </div>
    </div>
  ); 
}
