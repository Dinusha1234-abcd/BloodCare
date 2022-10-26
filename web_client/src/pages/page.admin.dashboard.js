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

    const passData = (data) => {
        setSlideMenu(data);
    };

    useEffect((() => { getDate(); getClusterCenters() }), [])

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

    // const [useData, setUseData] = useState({
    //     labels: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
    //     datasets: [{
    //         label: "Collect Blood Group",
    //       data: [90, 92, 22, 80, 21, 180, 90, 90],
    //       backgroundColor: ['#ED0E02', '#6E2820', '#E61D12', '#E36D66', '#963732', '#F2B8B1', '#6E3B35', '#7A514C']
    //     }]
    //   })

    // var d = new Date();
    // d.setMonth(d.getMonth() - 3);
    // var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // const [useDataBarChart, setUseDataBarchart] = useState({

    //     labels: [months[d.getMonth()  ],months[d.getMonth() +1],months[d.getMonth() +2],months[d.getMonth()+3]],
    //     datasets: [{
    //       label: "Number of Camps",
    //       data: [90, 92, 22, 80, 21, 180, 90, 90],
    //       backgroundColor: ['#ED0E02', '#6E2820', '#E61D12', '#E36D66', '#963732', '#F2B8B1', '#6E3B35', '#7A514C']
    //     }]
    //   })
    

    return(
        <div><SlideMenuAdmin headerName={"Dashboard"} passData={passData} />
        <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`}>

        <div className="box">
        <div id="member">
            <h1>Members</h1>
            <div id="users-count-admin" display='inline'> 
                <User id='user' image={mo} name="Medical Officers " number={countMedicalOfficer}/>
                <User id='user' image={bcAdmin} name="Cluster Center Administrators" number={countClusterAdmin} />  
                <User id='user' image={doctor} name="Doctors" number={countDoctor}/>  
                <User id='user' image={headNurse2} name="Head Nurse" number={countHeadNurse}/> 
                <User id='user' image={nurse} name="Nurse" number={countNurse}/>
                <User id='user' image={organizer} name="Blood Camp Organizer" number={countOrganizer}/>
                <User id='user' image={driver} name="Drivers" number={countDriver}/>
                <User id='user' image={donor} name="Registerd Donors" number={countDonor}/>
            </div>
        </div>

            <div id="raw2">

                <div className="box1">
                    <Cluster id='cluster' image={cluster} name="Total Cluster Centers" number = {countClusterCenter}/>
                </div>

                <div className="box2">
                    <h3>Blood Percentage</h3>
                    {/* <div id="percentage-card"><DoughnutChart chartData={useData} /></div> */}
                </div>

                <div className="box3">
                    <h3>Monthly Blood Camps</h3>
                    {/* <BarChart chartData={useDataBarChart} /> */}
                </div>

                <div className="box3">
                    <h3>Upcoming Events</h3>
                    <div id="camp-events-list-admin"> <p>2022/08/29 Camp Number 09  <button id="view-button-admin">View</button> </p></div>
                    <div id="camp-events-list-admin"> <p>2022/09/11 Camp Number 10  <button id="view-button-admin">View</button> </p></div>
                    <div id="camp-events-list-admin"> <p>2022/09/18 Camp Number 11  <button id="view-button-admin">View</button> </p></div>
                    <div id="camp-events-list-admin"> <p>2022/09/24 Camp Number 12  <button id="view-button-admin">View</button> </p></div>
                    <div id="camp-events-list-admin"> <p>2022/09/30 Camp Number 13  <button id="view-button-admin">View</button> </p></div>
                </div>

            </div>

            <div id="raw3">

                <div id="box4">
                    <h3>Blood Packet Details</h3>
                    <div id="blood-admin">
                        <Blood name='O+' number='21'/>
                        <Blood name='A+' number='11'/>
                        <Blood name='B+' number='13'/>
                        <Blood name='AB+'number='10'/>
                        <Blood name='O-' number='05'/>
                        <Blood name='A-' number='14'/>
                        <Blood name='B-' number='12'/>
                        <Blood name='AB-'number='15'/>
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