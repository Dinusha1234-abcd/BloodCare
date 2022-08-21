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
                    <th >Blood Center Id</th>
                    <th id='camp-action-admin'>Action</th>
                </tr>
                <tr>
                    <td>13</td>
                    <td>07-09-2022</td>
                    <td>Gold house, Matara</td>
                    <td>Sanduni Malsha</td>
                    <td>04</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>07-09-2022</td>
                    <td>Green palace, Galle</td>
                    <td>D.K.Hansika</td>
                    <td>06</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>07-09-2022</td>
                    <td>Gold house, Matara</td>
                    <td>Dinusha Gunawardhane</td>
                    <td>15</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>07-09-2022</td>
                    <td>UCSC</td>
                    <td>Kalshi Lakeesha</td>
                    <td>11</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>07-09-2022</td>
                    <td>UCSC</td>
                    <td>Dilhara Savinda</td>
                    <td>08</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>07-09-2022</td>
                    <td>NDDT, Kohuwala</td>
                    <td>Hiruni Danapala</td>
                    <td>10</td>
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