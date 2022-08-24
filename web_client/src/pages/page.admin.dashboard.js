import React, { useState } from "react";
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
    

    return(
        <div><SlideMenuAdmin headerName={"Dashboard"} passData={passData} />
        <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`}>
        <div className="box">
        <div id="member">
            <h1>Members</h1>

            {/* <div id="users-count" display='inline'> 
                <User id='user' image={doctor} name="Doctor" number='11' />  
                <User id='user' image={headNurse2} name="Head Nurse" status={true} number='15' />  
                <User id='user' image={nurse} name="Nurse" number='14'/>  
                <User id='user' image={driver} name="Driver" number='11' /> </div> */}
            <div id="users-count-admin" display='inline'> 
                <User id='user' image={mo} name="Medical Officers " number='12'/>
                <User id='user' image={bcAdmin} name="Cluster Center Administrators" number='12' />  
                <User id='user' image={doctor} name="Doctors" number='32'/>  
                <User id='user' image={headNurse2} name="Head Nurse" number='12'/> 
                <User id='user' image={nurse} name="Nurse" number='42'/>
                <User id='user' image={organizer} name="Blood Camp Organizer" number='15'/>
                <User id='user' image={driver} name="Drivers" number='26'/>
                <User id='user' image={donor} name="Registerd Donors" number='234'/>
            </div>
        </div>

            <div id="raw2">

                <div className="box1">
                    <Cluster id='cluster' image={cluster} name="Total Cluster Centers"/>
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