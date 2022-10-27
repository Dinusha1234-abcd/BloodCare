import React, { useState, useEffect } from "react";
import axios from 'axios';
import Calendar from 'react-calendar';
import SlideMenuMedicalOfficer from "../components/component.slidemenu.medicalOfficer";
import User from "../components/clusterAdmin/component.users.display";
import Camp from "../components/clusterAdmin/component.camp.display";
import Blood from "../components/clusterAdmin/component.blood.display";
import doctor from '../assests/images/doctor.png';
import headNurse from '../assests/images/headNurse2.png';
import nurse from '../assests/images/nurse.png';
import driver from '../assests/images/driver.png';
import pastCamp from '../assests/images/pastCamp.png';
import OngoingCamp from '../assests/images/ongoingCamp.png';
import futureCamp from '../assests/images/furtureCamp.png';
import PendingCamp from '../assests/images/camp.png';
import DoughnutChart from '../components/clusterAdmin/compoent.doughnutChart'
import PieChart from '../components/clusterAdmin/component.pieChart'
import BarChart from '../components/clusterAdmin/component.barChart'
import '../assests/css/page.clusterAdmin.dashboard.css'
import '../assests/css/component.calender.css';

export default function MedicalOfficerDashboard() {
  const [slidemenu, setSlideMenu] = useState(true);
  const [date, setDate] = useState([new Date() ])

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wait, setWait] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [unsuccessMessage, setUnsuccessMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [unsuccess, setUnSuccess] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [camps, setCamps] = useState([]);

  const [countDoctor, setCountDoctor] = useState("");
  const [countHeadNurse, setCountHeadNurse] = useState("");
  const [countNurse, setCountNurse] = useState("");
  const [countDriver, setCountDriver] = useState("");

  const [countPastCamp, setPastcamp] = useState("");
  const [countOngoingCamp, setOngoingcamp] = useState("");
  const [countUpcomingCamp, setUpcomingcamp] = useState("");
  const [countPendingCamp, setPendingcamp] = useState("");
  const [countAllCamp, setAllcamp] = useState(0);
  const [countClustercenterCamp, setClustercentercamp] = useState("");
  const [statusON, setStatus] = useState(false);

  const [Opositive, setOpositive] = useState(0);
  const [Onegative, setOnegative] = useState(0);
  const [Apositive, setApositive] = useState(0);
  const [Anegative, setAnegative] = useState(0);
  const [Bpositive, setBpositive] = useState(0);
  const [Bnegative, setBnegative] = useState(0);
  const [ABpositive, setABpositive] = useState(0);
  const [ABnegative, setABnegative] = useState(0);




  const passData = (data) => {
    setSlideMenu(data);
  };
  useEffect((() => { getCamp(); getDate(); getBlood() }), [])
  function getDate() {

    const medicalOfficerNic = localStorage.getItem('userNic');
    const medicalOfficer = {
      medicalOfficer
    }
    axios.post("http://localhost:8070/dashboard/medicalstaff", medicalOfficer).then(
      (res) => {



        setCountDoctor(res.data.users[0]['doctors'])
        setCountHeadNurse(res.data.users[0]['headNurses'])
        setCountNurse(res.data.users[0]['nurses'])
        setCountDriver(res.data.users[0]['drivers'])
        if (parseInt(res.data.users[0]['doctors']) < 10) {
          setCountDoctor('0' + res.data.users[0]['doctors'])
        }
        if (parseInt(res.data.users[0]['headNurses']) < 10) {
          setCountHeadNurse('0' + res.data.users[0]['headNurses'])
        }
        if (parseInt(res.data.users[0]['nurses']) < 10) {
          setCountNurse('0' + res.data.users[0]['nurses'])
        }
        if (parseInt(res.data.users[0]['drivers']) < 10) {
          setCountDriver('0' + res.data.users[0]['drivers'])
        }

        setLoading(!loading);
      }).catch((err) => {
        //sever error
        setLoading(!loading);
        setUnsuccessMessage("Network Connection Issue Please Try Again");
        setUnSuccess(true)
      })

  }
  function getBlood() {

    const medicalOfficerNic = localStorage.getItem('userNic');
    const medicalOfficer = {
      medicalOfficerNic
    }
    axios.post("http://localhost:8070/dashboard/blood", medicalOfficer).then(
      (res) => {


        setOpositive(Number(res.data.bloods[0]['Opositive']));
        setOnegative(Number(res.data.bloods[0]['Onegative']));
        setApositive(Number(res.data.bloods[0]['Apositive']));
        setAnegative(Number(res.data.bloods[0]['Anegative']));

        setBpositive(Number(res.data.bloods[0]['Bpositive']));
        setBnegative(Number(res.data.bloods[0]['Bnegative']));

        setABpositive(Number(res.data.bloods[0]['ABpositive']));
        setABnegative(Number(res.data.bloods[0]['ABnegative']));
        if (Number(res.data.bloods[0]['Opositive']) < 10) {
          setOpositive('0' + Number(res.data.bloods[0]['Opositive']))
        }
        if (Onegative < 10) {
          setOnegative('0' + Onegative)
        }
        if (Apositive < 10) {
          setApositive('0' + Apositive)
        }
        if (Anegative < 10) {
          setAnegative('0' + Anegative)
        }
        if (Bpositive < 10) {
          setBpositive('0' + Bpositive)
        }
        if (Bnegative < 10) {
          setBnegative('0' + Bnegative)
        } if (ABpositive < 10) {
          setABpositive('0' + ABpositive)
        }
        if (ABnegative < 10) {
          setABnegative('0' + ABnegative)
        }

        setLoading(!loading);
      }).catch((err) => {
        //sever error
        setLoading(!loading);
        setUnsuccessMessage("Network Connection Issue Please Try Again");
        setUnSuccess(true)
      })

  }

  function getCamp() {

    const medicalOfficerNic = localStorage.getItem('userNic');
    const medicalOfficer = {
      medicalOfficer
    }
    let a;
    axios.post("http://localhost:8070/dashboard/camp", medicalOfficer).then(
      (res) => {
        setAllcamp(Number(res.data.allCamp))
        setClustercentercamp(Number(res.data.clusterCamp))
        setData(res.data.camps);

        setPastcamp(res.data.pastCamp)
        setOngoingcamp(res.data.ongoingCamp)
        setUpcomingcamp(res.data.upcomingCamp)
        setPendingcamp(res.data.pendingCamp)

        setClustercentercamp(res.data.clusterCamp)
        // console.log(countAllCamp);

        if (parseInt(res.data.pastCamp) < 10) {
          setPastcamp('0' + res.data.pastCamp)
        }
        if (parseInt(res.data.ongoingCamp) < 10) {
          setOngoingcamp('0' + res.data.ongoingCamp)
        }
        if (parseInt(res.data.upcomingCamp) < 10) {
          setUpcomingcamp('0' + res.data.upcomingCamp)
        }
        if (parseInt(res.data.pendingCamp) < 10) {
          setPendingcamp('0' + res.data.pendingCamp)
        }


        wait(true);

        setLoading(!loading);
      }).catch((err) => {
        //sever error
        setLoading(!loading);
        setUnsuccessMessage("Network Connection Issue Please Try Again");
        setUnSuccess(true)
      })

  }

  const camp = []
  let jan = 0
  let feb = 0
  let march = 0
  let aprial = 0
  let may = 0
  let june = 0
  let jul = 0
  let aug = 0
  let sep = 0
  let oct = 0
  let nov = 0
  let dec = 0
  console.log()
  for (let i = 0; i < data.length; i++) {
    if (data[i]['date'].substr(0, 10) >= new Date().toISOString().slice(0, 10)) {
      camp.push(


        <div id="camp-events-list"> <p>{data[i]['date'].substr(0, 10)} Camp Number {data[i]['bloodCampNumber']}  <button id="view-button">View</button> </p></div>

      )
      oct = 2
      nov = 3
      if (data[i]['date'].substr(5, 12) == '01') {
        jan++
      }
      if (data[i]['date'].substr(5, 12) == '02') {
        feb++
      }
       
      if (data[i]['date'].substr(5, 12) == '03') {
        march++
      }
      if (data[i]['date'].substr(5, 12) == '04') {
        aprial++
      }
      if (data[i]['date'].substr(5, 12) == '05') {
        may++
      }
      if (data[i]['date'].substr(5, 12) == '06') {
        june++
      }
      if (data[i]['date'].substr(5, 12) == '07') {
        jul++
      }
      if (data[i]['date'].substr(5, 12) == '08') {
        aug++
      }
      if (data[i]['date'].substr(5, 12) == '09') {
        sep++
      }
      if (data[i]['date'].substr(5, 12) == '10') {
        oct = 2
      }
      if (data[i]['date'].substr(5, 12) == '11') {
        nov = 1
      }
      if (data[i]['date'].substr(5, 12) == '12') {
        dec++
      }
    }
  }

  let useData = {
    labels: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
    datasets: [{
      label: "Collect Blood Group",
      data: [Opositive, Onegative, Apositive, Anegative, Bpositive, Bpositive, ABpositive, ABnegative],
      backgroundColor: ['#ED0E02', '#6E2820', '#E61D12', '#E36D66', '#963732', '#F2B8B1', '#6E3B35', '#7A514C']
    }]
  }
  const useDataPieChart = {
    labels: ['Other Cluster Center', 'Cluster Center'],
    datasets: [{
      label: "Collect Blood Group",
      data: [countAllCamp - countClustercenterCamp, countClustercenterCamp],
      backgroundColor: ['#E0BFBA', '#DD2D50']
    }]
  }
  console.log(parseInt(countAllCamp));
  var d = new Date();
  d.setMonth(d.getMonth() - 3);
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const useDataBarChart= { 

    labels: [months[d.getMonth()], months[d.getMonth() + 1], months[d.getMonth() + 2], months[d.getMonth() + 3]],
    datasets: [{
      label: "Number of Camps",
      data: [may, june,oct , nov],
      backgroundColor: ['#ED0E02', '#6E2820', '#E61D12', '#E36D66', '#963732', '#F2B8B1', '#6E3B35', '#7A514C']
    }]
  } 

  return (
    <div>
      <SlideMenuMedicalOfficer headerName={"Dashboard"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <div id="row-1">
          <div id="medical-staff">
            <h3>Medical Staff Members</h3>
            <div id="users-count" display='inline'> <User id='user' image={doctor} name="Doctor" number={countDoctor} />  <User id='user' image={headNurse} name="Head Nurse" status={true} number={countHeadNurse} />  <User id='user' image={nurse} name="Nurse" number={countNurse} />  <User id='user' image={driver} name="Driver" number={countDriver} /> </div>
          </div>
          <div id="camp-clusterAdmin">
            <h3>Last Three Months  Blood Camps</h3>
            <div id="camp-count-clusterAdmin"  > <Camp image={pastCamp} name="Past Camp" number={countPastCamp} />  <Camp image={OngoingCamp} name="Ongoing Camp" status={true} number={countOngoingCamp} />  <Camp image={futureCamp} name="Future Camp" status={true} number={countUpcomingCamp} />  <Camp image={PendingCamp} name="Pending Camp" status={true} number={countPendingCamp} /></div>
          </div>
        </div>
        <div id="row-2">
          <div id="sub-row-1">
            <div id="sub-row-2">
              <h3>Last Three Months Blood Packets Details</h3>
              <div id="blood"><Blood name='O+' number={Opositive} /><Blood name='A+' number={Apositive} /><Blood name='B+' number={Bpositive} /><Blood name='AB+' number={ABpositive} /></div>
              <div id="blood"><Blood name='O-' number={Onegative} /><Blood name='A-' number={Anegative} /><Blood name='B-' number={Bnegative} /><Blood name='AB-' number={ABnegative} /></div>
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

          <div id="camp-events-clusterAdmin">
            <h3 id="camp-events-name">Upcoming Camp Events</h3>
            {camp}
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

