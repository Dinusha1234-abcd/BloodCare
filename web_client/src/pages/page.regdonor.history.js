import React from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import '../assests/css/page.regdonor.history.css';
import backgroundimg from '../assests/images/blood donation.jpg';
export default function RegDonorHistory() {
    return(
        <div>
            <SlideMenuRegDonor headerName={"History Records"}/>
            <div>
            <img id="backgroundimg" src={backgroundimg} />
            <div id="tableContainer">
            <div id="history-records">
            <input type="text" id='input-donate-date' placeholder=" &#xf002;"/> 
            <br></br>  
            <table id="history-records-table">
                <tr>
                    <th id="donate-date">Date</th>
                    <th>Donation Packet No</th>
                    <th>Location</th>
                </tr>
                <tr>
                    <td>04-07-2022</td>
                    <td>D 000 8574 555</td>
                    <td>Panadura</td>
                </tr>
                <tr>
                    <td>18-05-2019</td>
                    <td>D 000 5675 273</td>
                    <td>Colombo</td>
                </tr>
                <tr>
                    <td>25-09-2017</td>
                    <td>D 00 98 2634 59</td>
                    <td>Rathmalana</td>
                </tr>
                <tr>
                    <td>30-11-2016</td>
                    <td>D 00 16 2054 17</td>
                    <td>Horana</td>
                </tr>
                <tr>
                    <td>07-09-2015</td>
                    <td>D 00 58 4057 83</td>
                    <td>Kalutara</td>
                </tr>
            </table>

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
            </div>

        
    );

}