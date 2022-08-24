import React from 'react';
import '../../assests/css/admin/component.user.search.admin.css';


export default function Doctor(){

    return (
        <div>
            <div id='user-contanier-admin'> 
                <h7 id='header-user-admin'>DOCTORS</h7>
                <input type="text" id='input-doctor-admin' placeholder=" &#xf002; Search"/>
                
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
                    <td>858438430V</td>
                    <td>Dr. Padmini Gunatunge</td>
                    <td>pgunatunge2@gmail.com</td>
                    <td>071-0987654</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>785434567V</td>
                    <td>Dr. K.G.Lakshika </td>
                    <td>kglakshika@gmail.com</td>
                    <td>076-675436</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>89765678V</td>
                    <td>Dr. G.H.Gunawardhane</td>
                    <td>gihan88@gmail.com</td>
                    <td>077-8976549</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>761234567V</td>
                    <td>Dr. Hiran Jayamanna</td>
                    <td>hiranjaya@gmail.com</td>
                    <td>078-7890876</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>874567890V</td>
                    <td>Dr. Kamal Sudusinghe</td>
                    <td>kamal672@gmail.com</td>
                    <td>077-5467789</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>775643897V</td>
                    <td>Dr. Hiruthma Bandara</td>
                    <td>hbandara@gmail.com</td>
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
