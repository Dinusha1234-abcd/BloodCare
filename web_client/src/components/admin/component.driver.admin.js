import React from 'react';
import '../../assests/css/admin/component.user.search.admin.css';

export default function Driver(){

    return (
        <div>
            <div id='user-contanier-admin'> 
                <h7 id='header-user-admin'>DRIVERS</h7>
                <input type="text" id='input-driver-admin' placeholder=" &#xf002; Search"/>
                
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
                    <td>888438430V</td>
                    <td>Nimal Perera</td>
                    <td>nimal2@gmail.com</td>
                    <td>071-0987654</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>875434567V</td>
                    <td>Rajitha Rathnayake </td>
                    <td>rajitha@gmail.com</td>
                    <td>076-675436</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>88765678V</td>
                    <td>Harin Samaranayaka</td>
                    <td>harin88@gmail.com</td>
                    <td>077-8976549</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>851234567V</td>
                    <td>Kamish Fernando</td>
                    <td>kamish98@gmail.com</td>
                    <td>078-7890876</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>874567890V</td>
                    <td>Danushka Senarathne</td>
                    <td>dsenaratne672@gmail.com</td>
                    <td>077-5467789</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>875643897V</td>
                    <td>H.K.Pushpakumara</td>
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
