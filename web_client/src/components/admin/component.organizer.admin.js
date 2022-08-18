import React from 'react';
import '../../assests/css/admin/component.user.search.admin.css';


export default function Organizer(){

    return (
        <div>
            <div id='user-contanier-admin'> 
                <h7 id='header-user-admin'>BLOOD CAMP ORGANIZER</h7>
                <input type="text" id='input-organizer-admin' placeholder=" &#xf002; Search"/>
                <button id='add-user-button-admin'>Add</button> 
                <br/><br/>
                <table id="user-table-admin">
                <tr>
                    <th id='user-nic'>NIC</th>
                    <th>Name</th>
                    <th>Email Address</th>
                    <th>Contact No</th>
                    <th id='user-action-admin'>Action</th>
                    <th id='user-action-admin'>Action</th>
                </tr>
                <tr>
                    <td>988438430V</td>
                    <td>Sanduni Malsha</td>
                    <td>malsha2@gmail.com</td>
                    <td>071-0987654</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>985434567V</td>
                    <td>D.K.Hansika </td>
                    <td>hansidk@gmail.com</td>
                    <td>076-675436</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>98765678V</td>
                    <td>Dinusha Gunawardhane</td>
                    <td>dinusha88@gmail.com</td>
                    <td>077-8976549</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>981234567V</td>
                    <td>Kalshi Lakeesha</td>
                    <td>kalshi98@gmail.com</td>
                    <td>078-7890876</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>984567890V</td>
                    <td>Dilhara Savinda</td>
                    <td>dilhara672@gmail.com</td>
                    <td>077-5467789</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>975643897V</td>
                    <td>Hiruni Danapala</td>
                    <td>danapala@gmail.com</td>
                    <td>078-123456</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
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
