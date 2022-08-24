import React from 'react';
import '../../assests/css/admin/component.bloodcamp.admin.css'; 

export default function OngoingCamp(){

    return (
        <div>
            <div id='camp-contanier-admin'> 
                <h7 id='header-camp-admin'>Ongoing Blood Camps</h7>
                <input type="text" id='input-ongoincamp-admin' placeholder=" &#xf002; Search"/>
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
                    <td>07</td>
                    <td>08-25-2022</td>
                    <td>Gold house, Matara</td>
                    <td>Sadun Gunawardhane</td>
                    <td>OneBlood</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr>
                <tr>
                    <td>08</td>
                    <td>08-25-2022</td>
                    <td>RH Hall, Galle</td>
                    <td>Purna Dewanjana</td>
                    <td>LittleHelp</td>
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