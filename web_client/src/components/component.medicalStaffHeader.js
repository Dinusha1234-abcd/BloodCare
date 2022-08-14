import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/css/component.campHeader.css';
import doctor from '../assests/images/doctor.png';
import headNurse from '../assests/images/headNurse2.png';
import nurse from '../assests/images/nurse.png';
import driver from '../assests/images/driver.png';
export default function ClusterAdminCampHeader(){

    return (
        <div id="container-1">
            <Link to='/medicalstaff/doctor' id={`${(window.location.pathname=='/medicalstaff/doctor' ? 'box-1-active' : 'box-1' )}`} > <img src={doctor} id='box-1-pastCamp'  /><h className='camp-status'>Doctors</h>   </Link>
            <Link to='/medicalstaff/headnurse' id={`${(window.location.pathname=='/medicalstaff/headnurse' ? 'box-2-active' : 'box-2' )}`} ><img src={headNurse} id='box-2-pastCamp' /><h className='camp-status'>Head Nurses</h></Link>
            <Link to='/medicalstaff/nurse' id={`${(window.location.pathname=='/medicalstaff/nurse' ? 'box-3-active' : 'box-3' )}`} ><img src={nurse} id='box-3-pastCamp' /><h className='camp-status'>Nurses</h></Link>
            <Link to='/medicalstaff/driver' id={`${(window.location.pathname=='/medicalstaff/driver' ? 'box-4-active' : 'box-4' )}`} ><img src={driver} id='box-4-pastCamp' /><h className='camp-status'>Drivers</h></Link>
        </div>
    )

} 