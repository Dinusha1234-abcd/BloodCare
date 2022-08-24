import React from 'react';
import '../../assests/css/admin/component.user.search.admin.css';


export default function Nurse(){

    return (
        <div>
            <div id='user-contanier-admin'> 
                <h7 id='header-user-admin'>NURSE</h7>
                <input type="text" id='input-nurse-admin' placeholder=" &#xf002; Search"/>
               
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
                    <td>918438430V</td>
                    <td>Nirmani Hewage</td>
                    <td>Nirmani2@gmail.com</td>
                    <td>071-0987654</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>905434567V</td>
                    <td>Piyumi Senarath </td>
                    <td>piyumik@gmail.com</td>
                    <td>076-675436</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>89765678V</td>
                    <td>Arun Gamage</td>
                    <td>dinusha88@gmail.com</td>
                    <td>077-8976549</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>901234567V</td>
                    <td>Sandun Lakeesha</td>
                    <td>sanduni98@gmail.com</td>
                    <td>078-7890876</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>894567890V</td>
                    <td>W.H.J.Dilshan </td>
                    <td>dilshan672@gmail.com</td>
                    <td>077-5467789</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>885643897V</td>
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
