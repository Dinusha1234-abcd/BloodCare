import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SlideMenuAdmin from "../components/component.slidemenu.admin";
import mo from '../assests/images/mo.png';
import bcAdmin from '../assests/images/bcAdmin.png';
import doctor from '../assests/images/doctor.png';
import headNurse2 from '../assests/images/headNurse2.png';
import nurse from '../assests/images/nurse.png';
import driver from '../assests/images/driver.png';
import organizer from '../assests/images/organizer.png';
import donor from '../assests/images/donor.png';
import User from "../components/component.users.display";
import cluster from '../assests/images/donor.png';
import '../assests/css/admin.dashboard.css';
import '../assests/css/component.user.display2.css';

export default function AdminDashboard() {
    return(
        
        <div><SlideMenuAdmin headerName={"Dashboard"}/>
        <div className="box">
        <div id="member">
            <h1>Members</h1>
            <div id="users-count" display='inline'> 
                <User id='user' image={mo} name="Medical Officers"/>  
                <User id='user' image={bcAdmin} name="Cluster Center Administrators"  />  
                <User id='user'  image={doctor} name="Doctors"/>  
                <User id='user' image={headNurse2} name="Head Nurse" /> 
                <User id='user' image={nurse} name="Nurse"/>
                <User id='user' image={organizer} name="Blood Camp Organizer"/>
                <User id='user' image={driver} name="Drivers"/>
                <User id='user' image={donor} name="Registerd Donors"/>
            </div>
          </div>
            <div id="raw2">
                <div className="box1">

                </div>
                <div className="box2">

                </div>
                <div className="box3">

                </div>
                <div className="box3">

                </div>

                
                {/* <div id="cluster-count">
                    <cluster image={cluster} name="Total Cluster Centers"/>
                </div>   */}
            </div>

            <div id="raw3">
                <div className="box4">

                </div>
                <div className="box5">

                </div>

                
                {/* <div id="cluster-count">
                    <cluster image={cluster} name="Total Cluster Centers"/>
                </div>   */}
            </div>
            
          </div>
          
        </div>
        
    );
}