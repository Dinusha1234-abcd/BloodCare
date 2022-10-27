import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import SlideMenuAdmin from "../components/component.slidemenu.admin";
import mo from '../assests/images/mo.png';
import bcAdmin from '../assests/images/bcAdmin.png';
import doctor from '../assests/images/doctor.png';
import headNurse2 from '../assests/images/headNurse2.png';
import nurse from '../assests/images/nurse.png';
import driver from '../assests/images/driver.png';
import organizer from '../assests/images/organizer.png';
import donor from '../assests/images/donor.png';
import User from "../components/user.display.admin";
import cluster from '../assests/images/cluster.png';
import Cluster from "../components/component.cluster.display";
import DoughnutChart from '../components/compoent.doughnutChart'
import BarChart from '../components/component.barChart.admin'
import Blood from '../components/component.blood.display.admin';
import '../assests/css/admin/admin.dashboard.css';
import '../assests/css/admin/component.user.display.admin.css';
import '../assests/css/admin/component.calender.admin.css'; 

export default function AdminDashboard() {

    const [slidemenu, setSlideMenu] = useState(true);
    const [date, setDate] = useState(new Date())
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [unsuccess, setUnSuccess] = useState(false);

    const [countDoctor, setCountDoctor] = useState("");
    const [countHeadNurse, setCountHeadNurse] = useState("");
    const [countNurse, setCountNurse] = useState("");
    const [countDriver, setCountDriver] = useState("");
    const [countMedicalOfficer, setCountMedicalOfficer] = useState("");
    const [countClusterAdmin, setCountClusterAdmin] = useState("");
    const [countDonor, setCountDonor] = useState("");
    const [countOrganizer, setCountOrganizer] = useState("");
    const [countClusterCenter, setCountClusterCenter] = useState("");

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

    useEffect((() => { getDate(); getClusterCenters(); getBlood() }), [])

    function getDate(){

        axios.post("http://localhost:8070/dashboard/members").then(

            (res) => {
                setCountMedicalOfficer(res.data.users[0]['medicalOfficers'])
                setCountClusterAdmin(res.data.users[0]['clusterAdmins'])
                setCountDoctor(res.data.users[0]['doctors'])
                setCountHeadNurse(res.data.users[0]['headNurses'])
                setCountNurse(res.data.users[0]['nurses'])
                setCountDriver(res.data.users[0]['drivers'])
                setCountOrganizer(res.data.users[0]['organizers'])
                setCountDonor(res.data.users[0]['donors'])

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
                if (parseInt(res.data.users[0]['medicalOfficers']) < 10) {
                    setCountMedicalOfficer('0' + res.data.users[0]['medicalOfficers'])
                }
                if (parseInt(res.data.users[0]['clusterAdmins']) < 10) {
                    setCountClusterAdmin('0' + res.data.users[0]['clusterAdmins'])
                }
                if (parseInt(res.data.users[0]['organizers']) < 10) {
                    setCountOrganizer('0' + res.data.users[0]['organizers'])
                }
                if (parseInt(res.data.users[0]['donors']) < 10) {
                    setCountDonor('0' + res.data.users[0]['donors'])
                }
          
                setLoading(!loading);
            }).catch((err) => {
                //sever error
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true)
            })
    }

    function getClusterCenters() {
        axios.post("http://localhost:8070/dashboard/clusterCenters").then(
            (res) => {

                setCountClusterCenter( res.data.clusters[0]['clusterCenters'])

                if (parseInt(res.data.clusters[0]['clusterCenters']) < 10) {
                    setCountClusterCenter('0' + res.data.clusters[0]['clusterCenters'])
                }

                setLoading(!loading);
            }
        ).catch((err) => {
            //sever error
            setLoading(!loading);
            setUnsuccessMessage("Network Connection Issue Please Try Again");
            setUnSuccess(true)
        })

    }


    function getBlood() {
        axios.post("http://localhost:8070/dashboard/blooddata").then(
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
            }
        ).catch((err) => {
            //sever error
            setLoading(!loading);
            setUnsuccessMessage("Network Connection Issue Please Try Again");
            setUnSuccess(true)
        })
    }

    let useData = {
        labels: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
        datasets: [{
          label: "Collect Blood Group",
          data: [Opositive, Onegative, Apositive, Anegative, Bpositive, Bpositive, ABpositive, ABnegative],
          backgroundColor: ['#ED0E02', '#6E2820', '#E61D12', '#E36D66', '#963732', '#F2B8B1', '#6E3B35', '#7A514C']
        }]
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

    
  var d = new Date();
  d.setMonth(d.getMonth() - 3);
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    const useDataBarChart= { 

        labels: [months[d.getMonth()], months[d.getMonth() + 1], months[d.getMonth() + 2], months[d.getMonth() + 3]],
        datasets: [{
          label: "Number of Camps",
          data: [may, june,1 , 1],
          backgroundColor: ['#ED0E02', '#6E2820', '#E61D12', '#E36D66', '#963732', '#F2B8B1', '#6E3B35', '#7A514C']
        }]
      } 
    

    return(
      
        <div><SlideMenuAdmin headerName={"Dashboard"} passData={passData} />
        <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`}>

        <div className="box">
        <div id="member">
            <h1>Members</h1>
            <div id="users-count-admin" display='inline'> 
                <User id='user' image={mo} name="Medical Officers " number={countMedicalOfficer}/>
                <User id='user' image={bcAdmin} name="Cluster Center Administrators" number='03' />  
                <User id='user' image={doctor} name="Doctors" number={countDoctor}/>  
                <User id='user' image={headNurse2} name="Head Nurse" number={countHeadNurse}/> 
                <User id='user' image={nurse} name="Nurse" number={countNurse}/>
                <User id='user' image={organizer} name="Blood Camp Organizer" number='05'/>
                <User id='user' image={driver} name="Drivers" number={countDriver}/>
                <User id='user' image={donor} name="Registerd Donors" number='11'/>
            </div>
        </div>

            <div id="raw2">

                <div className="box1">
                
                    <Cluster id='cluster' image={cluster} name="Total Cluster Centers" number = '04'/>
                </div>

                <div className="box2">
                    <h3>Blood Percentage</h3>
                    <div id="percentage-card"><DoughnutChart chartData={useData} /></div>
                </div>

                <div className="box3">
                    <h3>Monthly Blood Camps</h3>
                    <BarChart chartData={useDataBarChart} />
                </div>

                <div className="box3">
                    <h3>Upcoming Events</h3>
                    <div id="camp-events-list-admin"> <p>2022-11-23 Camp Number 2   <button id="view-button-admin">View</button> </p></div>
                    <div id="camp-events-list-admin"> <p>2022-11-04 Camp Number 4   <button id="view-button-admin">View</button> </p></div>
                    <div id="camp-events-list-admin"> <p>2022-10-29 Camp Number 5  <button id="view-button-admin">View</button> </p></div>
                    <div id="camp-events-list-admin"> <p>2022/09/24 Camp Number 12  <button id="view-button-admin">View</button> </p></div>
                    
                </div>

            </div>

            <div id="raw3">

                <div id="box4">
                    <h3>Last 3 months Blood Packet Details</h3>
                    <div id="blood-admin">
                        <Blood name='O+' number={Opositive}/>
                        <Blood name='A+' number={Apositive}/>
                        <Blood name='B+' number={Bpositive}/>
                        <Blood name='AB+'number={ABpositive}/>
                        <Blood name='O-' number={Onegative}/>
                        <Blood name='A-' number={Anegative}/>
                        <Blood name='B-' number={Bnegative}/>
                        <Blood name='AB-'number={ABnegative}/>
                    </div>
                </div>

                <div /*id="box5"*/>
                    <Calendar onChange={setDate} readOnly={true} value={date} id="calender-admin" />
                    
                </div>
            </div>
            
          </div>
          </div>
          
        </div>
        
    );
}