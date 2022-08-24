import React from 'react';
import '../../assests/css/admin/component.bloodcamp.admin.css'; 

export default function UpcomingCamp(){

    return (
        <div>
            <div id='camp-contanier-admin'> 
                <h7 id='header-camp-admin'>Upcoming Blood Camps</h7>
                <input type="text" id='input-upcomingcamp-admin' placeholder=" &#xf002; Search"/>
                <br/><br/>
                <table id="camp-table-admin">
                <tr>
                    <th id='Camp-id'>Blood Camp No</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Organizer Name</th>
                    <th >Blood Center Name</th>
                    <th id='camp-action-admin'>Action</th>
                </tr>
                <tr>
                    <td>09</td>
                    <td>08-29-2022</td>
                    <td>Gold house, Matara</td>
                    <td>Sanduni Malsha</td>
                    <td>HeartWings</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>09-11-2022</td>
                    <td>Green palace, Galle</td>
                    <td>D.K.Hansika</td>
                    <td>BloodSource</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>09-18-2022</td>
                    <td>Gold house, Matara</td>
                    <td>Dinusha Gunawardhane</td>
                    <td>SK Community Blood Center</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>09-24-2022</td>
                    <td>Sarasi Hall, Kottawa</td>
                    <td>Kalshi Lakeesha</td>
                    <td>Heartland</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>09-30-2022</td>
                    <td>Dekma, Matara</td>
                    <td>Dilhara Savinda</td>
                    <td>Lifeline Blood Bank</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>10-02-2022</td>
                    <td>NDDT, Kohuwala</td>
                    <td>Hiruni Danapala</td>
                    <td>Central care</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                
                
            </table>
            {/* <div id='pastCamp-pageButton'>
                <a className='page-navigation'>{"<< Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next >>"}</a> 
            </div> */}
         </div>
        </div>
    )
}