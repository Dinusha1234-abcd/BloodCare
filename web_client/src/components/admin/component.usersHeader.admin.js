import React from "react";
import { Link } from 'react-router-dom';
import mo from '../../assests/images/mo.png';
import bcAdmin from '../../assests/images/bcAdmin.png';
import doctor from '../../assests/images/doctor.png';
import headNurse2 from '../../assests/images/headNurse2.png';
import nurse from '../../assests/images/nurse.png';
import driver from '../../assests/images/driver.png';
import organizer from '../../assests/images/organizer.png';
import donor from '../../assests/images/donor.png';
import '../../assests/css/admin/component.usersHeader.admin.css';

export default function AdminUserHeader(){
    return(
        <div id="container-users-admin">

            <Link to='/users/medicalofficer' id={`${(window.location.pathname=='/users/medicalofficer' ? 'box-1-admin-active' : 'box-1-admin' )}`} > 
                <img src={mo} id='image-icon-admin'  />
                <h className='camp-status'>Medical Officers</h>   
            </Link>

            <Link to='/users/clusteradmin' id={`${(window.location.pathname=='/users/clusteradmin' ? '-box-1-admin-active' : 'box-1-admin' )}`} > 
                <img src={bcAdmin} id='image-icon-admin'  />
                <h className='camp-status'>Cluster Center Administrators</h>   
            </Link>

            <Link to='/users/doctor' id={`${(window.location.pathname=='/users/doctor' ? 'box-1-admin-active' : 'box-1-admin' )}`} > 
                <img src={doctor} id='image-icon-admin'  />
                <h className='camp-status'>Doctors</h>   
            </Link>

            <Link to='/users/headnurse' id={`${(window.location.pathname=='/users/headnurse' ? 'box-1-admin-active' : 'box-1-admin' )}`} > 
                <img src={headNurse2} id='image-icon-admin'  />
                <h className='camp-status'>Head Nurse</h>   
            </Link>

            <Link to='/users/nurse' id={`${(window.location.pathname=='/users/nurse' ? 'box-1-admin-active' : 'box-1-admin' )}`} > 
                <img src={nurse} id='image-icon-admin'  />
                <h className='camp-status'>Nurse</h>   
            </Link>

            <Link to='/users/driver' id={`${(window.location.pathname=='/users/driver' ? 'box-1-admin-active' : 'box-1-admin' )}`} > 
                <img src={driver} id='image-icon-admin'  />
                <h className='camp-status'>Blood Camp Organizer</h>   
            </Link>

            <Link to='/users/organizer' id={`${(window.location.pathname=='/users/organizer' ? 'box-1-admin-active' : 'box-1-admin' )}`} > 
                <img src={organizer} id='image-icon-admin'  />
                <h className='camp-status'>Drivers</h>   
            </Link>

            <Link to='/users/donor' id={`${(window.location.pathname=='/users/donor' ? 'box-1-admin-active' : 'box-1-admin' )}`} > 
                <img src={donor} id='image-icon-admin'  />
                <h className='camp-status'>Registerd Donors</h>   
            </Link>

        </div>
    )
}