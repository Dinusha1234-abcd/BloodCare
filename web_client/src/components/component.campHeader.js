import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/css/component.campHeader.css';
import pastCamp from '../assests/images/pastCamp.png';
import OngoingCamp from '../assests/images/ongoingCamp.png';
import futureCamp from '../assests/images/furtureCamp.png';
import PendingCamp from '../assests/images/camp.png';
export default function ClusterAdminCampHeader(){

    return (
        <div id="container-1">
            <Link to='/bloodcamp/pastcamp' id={`${(window.location.pathname=='/bloodcamp/pastcamp' ||window.location.pathname=== '/bloodcamp/pastcampView/:name/:id/:place/:mobile/:email'  ? 'box-1-active' : 'box-1' )}`} > <img src={pastCamp} id='box-1-pastCamp'  /><h className='camp-status'>Past Camps</h>   </Link>
            <Link to='/bloodcamp/ongoingcamp' id={`${(window.location.pathname=='/bloodcamp/ongoingcamp' ? 'box-2-active' : 'box-2' )}`} ><img src={OngoingCamp} id='box-2-pastCamp' /><h className='camp-status'>Ongoing Camps</h></Link>
            <Link to='/bloodcamp/futurecamp' id={`${(window.location.pathname=='/bloodcamp/futurecamp' ? 'box-3-active' : 'box-3' )}`} ><img src={futureCamp} id='box-3-pastCamp' /><h className='camp-status'>Upcomming Camps</h></Link>
            <Link to='/bloodcamp/pendingcamp' id={`${(window.location.pathname=='/bloodcamp/pendingcamp' ||window.location.pathname=== '/bloodcamp/pastcampView/' ? 'box-4-active' : 'box-4' )}`} ><img src={PendingCamp} id='box-4-pastCamp' /><h className='camp-status'>Pending Camps</h></Link>
        </div>
    )

} 