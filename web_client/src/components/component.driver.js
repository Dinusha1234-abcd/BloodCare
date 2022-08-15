import React from 'react';
import '../assests/css/component.drivers.css';
export default function Drivers() {

    return (
        <div>
            <div id='driver-contanier'> 
            <h3 id='header-clusterAdmin'>Drivers Details</h3>
            <input type="text" id='input-driver' placeholder=" &#xf002; Enter NIC Number"/> 
            <button id='add-driver'>+ Add New</button>
            <br/><br/>
            <table id="driver-table">
                <tr>
                    <th id='driver-number'>Id</th>
                    <th>NIC Number</th>
                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    <th id='driver-action'>Action</th>
                    
                </tr>
                <tr>
                    <td>101</td>
                    <td>891234567V</td>
                    <td>Namal Perera</td>
                    <td>0777123456</td>
                    <td>namalperera@gmail.com</td>
                    <td>
                        <button id='view-button-driver-view'>View</button>
                        <button id='view-button-driver-remove'>Remove</button>
                    </td>
                   
                </tr>
                <tr>
                    <td>102</td>
                    <td>901234567V</td>
                    <td>Sewandi Ranasingh</td>
                    <td>0761234567</td>
                    <td>sewandiranasingh@gmail.com</td>
                    <td>
                        <button id='view-button-driver-view'>View</button>
                        <button id='view-button-driver-remove'>Remove</button>
                    </td>
          </tr>
                <tr>
                    <td>103</td>
                    <td>871234567V</td>
                    <td>Sathya Ranasingh</td>
                    <td>0782345678</td>
                    <td>sathyaransingh@gmail.com</td>
                    <td>
                        <button id='view-button-driver-view'>View</button>
                        <button id='view-button-driver-remove'>Remove</button>
                    </td>
              </tr>
                <tr>
                    <td>104</td>
                    <td>891224567V</td>
                    <td>Kamal Silva</td>
                    <td>0782347778</td>
                    <td>kamalsilva@gmail.com</td>
                    <td>
                        <button id='view-button-driver-view'>View</button>
                        <button id='view-button-driver-remove'>Remove</button>
                    </td>
                     </tr>
                <tr>
                    <td>105</td>
                    <td>891334567V</td>
                    <td>Sathya Suriya</td>
                    <td>0782347678</td>
                    <td>sathyasurya@gmail.com</td>
                    <td>
                        <button id='view-button-driver-view'>View</button>
                        <button id='view-button-driver-remove'>Remove</button>
                    </td>
                </tr>
             </table>
            <div id='driver-pageButton'>
                <a className='page-navigation'>{"<< Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next >>"}</a> 
            </div>
         </div>
        </div>
    )
}