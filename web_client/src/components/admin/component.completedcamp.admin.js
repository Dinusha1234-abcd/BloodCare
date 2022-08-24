import React from 'react';
import '../../assests/css/admin/component.bloodcamp.admin.css'; 

export default function CompletedCamp(){

    return (
        <div>
            <div id='camp-contanier-admin'> 
                <h7 id='header-camp-admin'>Completed Blood Camps</h7>
                <input type="text" id='input-completedcamp-admin' placeholder=" &#xf002; Search"/>
                <br/><br/>
                <table id="camp-table-admin">
                <tr>
                    <th id='Camp-id'>Blood Camp No</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Organizer Name</th>
                    <th >Blood Center Name</th>
                    <th >Number of Donors</th>
                    <th id='camp-action-admin'>Action</th>
                </tr>
                <tr>
                    <td>13</td>
                    <td>06-12-2022</td>
                    <td>Gold house, Matara</td>
                    <td>K.L.M.Sandaruwan</td>
                    <td>Heartland</td>
                    <td>98</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>06-18-2022</td>
                    <td>Green palace, Galle</td>
                    <td>D.D.Kumud</td>
                    <td>Central care</td>
                    <td>101</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>07-07-2022</td>
                    <td>Gold house, Matara</td>
                    <td>M.K. Gunawardhane</td>
                    <td>Red Bucket</td>
                    <td>103</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>07-23-2022</td>
                    <td>Sakya Institute, Nugegoda </td>
                    <td>Sanath Gunapala</td>
                    <td>LifeSupport</td>
                    <td>124</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>07-29-2022</td>
                    <td>Gurukula, Matara</td>
                    <td>Harith Induwara</td>
                    <td>Little Help</td>
                    <td>101</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>08-09-2022</td>
                    <td>NDDT, Kohuwala</td>
                    <td>Sarith Ridhmika</td>
                    <td>Redonest</td>
                    <td>94</td>
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