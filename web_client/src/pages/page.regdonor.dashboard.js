import React from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import '../assests/css/page.regdonor.dashboard.css';
import backgroundimg from '../assests/images/blood donation.jpg';

export default function RegDonorDashboard() {
   
    return(
        <div>
        <SlideMenuRegDonor headerName={"Home"}/>
        <div>
            <img id="backgroundimg" src={backgroundimg} />
            <div id="tableContainer">
            <div id="home-camp-details">
            <input type="text" id='input-camp-date' placeholder=" &#xf002; " className="colour"/> 
            <br></br>  
            <table id="d-camp-details-table">
                <tr>
                    <th id="camp-date">Date</th>
                    <th>Camp Name</th>
                    <th>Location</th>
                </tr>
                <tr>
                    <td>13-08-2022</td>
                    <td><a href="#"><span>YOU CAN HELP SAVE A LIFE!</span></a></td>
                    <td>Panadura</td>
                </tr>
                <tr>
                    <td>18-08-2022</td>
                    <td><a href="#"><span>Blood Donation Drive</span></a></td>
                    <td>Kalutara</td>
                </tr>
                <tr>
                    <td>29-08-2022</td>
                    <td><a href="#"><span>BE A HERO DONTAE BLOOD</span></a></td>
                    <td>Rathmalana</td>
                </tr>
                <tr>
                    <td>03-09-2022</td>
                    <td><a href="#"><span>Give Blood and Save a Life</span></a></td>
                    <td>Horana</td>
                </tr>
                <tr>
                    <td>11-09-2022</td>
                    <td><a href="#"><span>SAVE A LIFE, GIVE YOUR BLOOD.</span></a></td>
                    <td>Bandaragama</td>
                </tr>
            </table>

            </div>
            
            </div>
            <div id='d-camp-details-table-pageButton'>
                <a className='page-navigation'>{"<< "}  </a> 
                <a className='page-navigation'>{" Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next "}</a> 
                <a className='page-navigation'>{">>"}</a> 
            </div>
        </div>
        </div>
    );
}