import React from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import '../assests/css/page.regdonor.camp.css';
import futureCamp from '../assests/images/furtureCamp.png';
import OngoingCamp from '../assests/images/ongoingCamp.png';
import pastCamp from '../assests/images/pastCamp.png';
import PendingCamp from '../assests/images/camp.png';
import map from '../assests/images/map.PNG';
import { Link } from "react-router-dom";
export default function RegDonorCamp() {
    return (
        <div>
            <SlideMenuRegDonor headerName={"Upcoming Camp Details"}/>
            <input type="text" id='input-date' placeholder=" &#xf002;"/> 
            <div id="camp-container1"> 
                <div id="camp-details">
                    <img id="campimg" src={futureCamp} />
                    <h3 id="camp-name">YOU CAN HELP SAVE A LIFE!</h3>
                    <br></br>
                    <table id="regD-camp-details-table">
                        <tr>
                            <td>Date </td>
                            <td>: August 13, 2022</td>
                            <td><i class="fa-solid fa-calendar-day"></i></td>
                        </tr>
                        <tr>
                            <td>Location  </td>
                            <td>: Panadura</td>
                        </tr>
                        <tr>
                            <td>Place :</td>
                            <td>: MOH Hall</td>
                        </tr>
                        <tr>
                            <td>Time :</td>
                            <td>: 8.00 a.m. - 3.00 p.m.</td>
                        </tr>
                    </table>
                    <Link to='/blood_camps/register' id="register"  >Register Now</Link>
                    <img id="mapimg" src={map} />
                </div>     
            </div>
            <div id="camp-container2">
            <div id="camp-details">
                    <img id="campimg" src={OngoingCamp} />
                    <h3 id="camp-name">Blood Donation Drive</h3>
                    <br></br>
                    <table id="regD-camp-details-table">
                        <tr>
                            <td>Date </td>
                            <td>: August 18, 2022</td>
                            <td><i class="fa-solid fa-calendar-day"></i></td>
                        </tr>
                        <tr>
                            <td>Location  </td>
                            <td>: Kalutara</td>
                        </tr>
                        <tr>
                            <td>Place :</td>
                            <td>: MOH Hall</td>
                        </tr>
                        <tr>
                            <td>Time :</td>
                            <td>: 8.00 a.m. - 3.00 p.m.</td>
                        </tr>
                    </table>
                    <Link to='/blood_camps/register' id="register"  >Register Now</Link>
                    <img id="mapimg" src={map} />
                </div>     
            </div>
            <div id="camp-container3">
            <div id="camp-details">
                    <img id="campimg2" src={pastCamp} />
                    <h3 id="camp-name">BE A HERO DONTAE BLOOD</h3>
                    <br></br>
                    <table id="regD-camp-details-table">
                        <tr>
                            <td>Date </td>
                            <td>: August 29, 2022</td>
                            <td><i class="fa-solid fa-calendar-day"></i></td>
                        </tr>
                        <tr>
                            <td>Location  </td>
                            <td>: Rathmalana</td>
                        </tr>
                        <tr>
                            <td>Place :</td>
                            <td>: YMCA</td>
                        </tr>
                        <tr>
                            <td>Time :</td>
                            <td>: 8.00 a.m. - 3.00 p.m.</td>
                        </tr>
                    </table>
                    <Link to='/blood_camps/register' id="register"  >Register Now</Link>
                    <img id="mapimg" src={map} />
                </div>     
            </div>
            <div id="camp-container4">
            <div id="camp-details">
                    <img id="campimg" src={PendingCamp} />
                    <h3 id="camp-name">Give Blood and Save a Life</h3>
                    <br></br>
                    <table id="regD-camp-details-table">
                        <tr>
                            <td>Date </td>
                            <td>: September 13, 2022</td>
                            <td><i class="fa-solid fa-calendar-day"></i></td>
                        </tr>
                        <tr>
                            <td>Location  </td>
                            <td>: Horana</td>
                        </tr>
                        <tr>
                            <td>Place :</td>
                            <td>: MOH Hall</td>
                        </tr>
                        <tr>
                            <td>Time :</td>
                            <td>: 8.00 a.m. - 3.00 p.m.</td>
                        </tr>
                    </table>
                    <Link to='/blood_camps/register' id="register"  >Register Now</Link>
                    <img id="mapimg" src={map} />
                </div>     
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