import React from "react";
import { Link } from 'react-router-dom';
import '../../assests/css/admin/component.campHeader.admin.css';
import ongoingcamp from '../../assests/images/pastCamp.png';
import upcomingcamp from '../../assests/images/upcomming.png';
import completedcamp from '../../assests/images/past.png';

export default function AdminCampHeader() {

    return(
        <div id="container-camp-admin">

            <Link to='/bloodcamps/ongoingcamp' id={`${(window.location.pathname=='/bloodcamps/ongoingcamp' ? 'box-1-camp-admin-active' : 'box-1-camp-admin' )}`} > 
                <img src={ongoingcamp} id='camp-image-icon-admin'  />
                <h8 className='camp-status-admin'><br/>Ongoing Blood Camps</h8>
                {/* <h4 id='bloodcamp-count-admin'>33</h4>    */}
            </Link>

            <Link to='/bloodcamps/upcomingcamp' id={`${(window.location.pathname=='/bloodcamps/upcomingcamp' ? 'box-1-camp-admin-active' : 'box-1-camp-admin' )}`} > 
                <img src={upcomingcamp} id='camp-image-icon-admin'  />
                <h8 className='camp-status-admin'><br/>Upcoming Blood Camps</h8>
                {/* <h4 id='bloodcamp-count-admin'>33</h4>    */}
            </Link>

            <Link to='/bloodcamps/completedcamp' id={`${(window.location.pathname=='/bloodcamps/completedcamp' ? 'box-1-camp-admin-active' : 'box-1-camp-admin' )}`} > 
                <img src={completedcamp} id='camp-image-icon-admin'  />
                <h8 className='camp-status-admin'><br/>Completed Blood Camps</h8>
                {/* <h4 id='bloodcamp-count-admin'>33</h4>    */}
            </Link>

        </div>
    )
     
}