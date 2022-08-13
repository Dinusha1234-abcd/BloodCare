import React from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import '../assests/css/page.regdonor.camp.css';
import futureCamp from '../assests/images/furtureCamp.png';
import OngoingCamp from '../assests/images/ongoingCamp.png';
export default function RegDonorCamp() {
    return (
        <div>
            <SlideMenuRegDonor headerName={"Upcoming Camp Details"}/>
            <input type="text" id='input-date' placeholder=" &#xf002;"/> 
            <div id="camp-container1"> 
                <div id="camp-details">
                    <img id="campimg" src={futureCamp} />
                    <h3>YOU CAN HELP SAVE A LIFE!</h3>
                    <br></br>
                    <table>
                        <tr>
                            <th>Date : </th>
                            <th>August 13, 2022</th>
                            <th><i class="fa-solid fa-calendar-day"></i></th>
                        </tr>
                        <tr>
                            <th>Location : </th>
                            <th>Panadura</th>
                        </tr>
                        <tr>
                            <th>Place :</th>
                            <th>MOH Hall</th>
                        </tr>
                        <tr>
                            <th>Time :</th>
                            <th>8.00 a.m. - 3.00 p.m.</th>
                        </tr>
                    </table>
                    
                </div>     
            </div>
            <div id="camp-container2">
            </div>
            <div id="camp-container3">
            </div>
            <div id="camp-container4">
            </div>
            <div id='d-history-records-table-pageButton'>
                <a className='page-navigation'>{"<< "}  </a> 
                <a className='page-navigation'>{" Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next "}</a> 
                <a className='page-navigation'>{">>"}</a> 
            </div>
        </div>
    );
}