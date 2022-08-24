import React from 'react';
import '../../assests/css/admin/component.user.search.admin.css';


export default function HeadNurse(){

    return (
        <div>
            <div id='user-contanier-admin'> 
                <h7 id='header-user-admin'>HEAD NURSE</h7>
                <input type="text" id='input-headnurse-admin' placeholder=" &#xf002; Search"/>
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
                    <td>888438430V</td>
                    <td>Prasad Lakshan</td>
                    <td>kpdplakshan2@gmail.com</td>
                    <td>071-0987654</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>875434567V</td>
                    <td>K.L.J. Gihan </td>
                    <td>gihan@gmail.com</td>
                    <td>076-675436</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>86765678V</td>
                    <td>J.Y.H.Samarasekare</td>
                    <td>samarasekare88@gmail.com</td>
                    <td>077-8976549</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>751234567V</td>
                    <td>Saman Kumara</td>
                    <td>saman98@gmail.com</td>
                    <td>078-7890876</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>764567890V</td>
                    <td>Namal Rakapakse</td>
                    <td>namal672@gmail.com</td>
                    <td>077-5467789</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr>
                <tr>
                    <td>675643897V</td>
                    <td>Oshana Kamalanath</td>
                    <td>oshan@gmail.com</td>
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
