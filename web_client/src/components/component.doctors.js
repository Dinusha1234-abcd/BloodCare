import React from 'react';
import '../assests/css/component.doctors.css';
export default function Doctors() {

    return (
        <div>
            <div id='doctor-contanier'> 
            <h3 id='header-clusterAdmin'>Doctors Details</h3>
            <input type="text" id='input-doctor' placeholder=" &#xf002; Enter NIC Number"/> 
            <button id='add-doctor'>+ Add New</button>
            <br/><br/>
            <table id="doctor-table">
                <tr>
                    <th id='doctor-number'>Id</th>
                    <th>NIC Number</th>
                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    <th id='doctor-action'>Action</th>
                    
                </tr>
                <tr>
                    <td>101</td>
                    <td>891234567V</td>
                    <td>Dr Namal Perera</td>
                    <td>0777123456</td>
                    <td>namalperera@gmail.com</td>
                    <td>
                        <button id='view-button-doctor-view'>View</button>
                        <button id='view-button-doctor-remove'>Remove</button>
                    </td>
                   
                </tr>
                <tr>
                    <td>102</td>
                    <td>901234567V</td>
                    <td>Dr Sewandi Ranasingh</td>
                    <td>0761234567</td>
                    <td>sewandiranasingh@gmail.com</td>
                    <td>
                        <button id='view-button-doctor-view'>View</button>
                        <button id='view-button-doctor-remove'>Remove</button>
                    </td>
          </tr>
                <tr>
                    <td>103</td>
                    <td>871234567V</td>
                    <td>Dr Sathya Ranasingh</td>
                    <td>0782345678</td>
                    <td>sathyaransingh@gmail.com</td>
                    <td>
                        <button id='view-button-doctor-view'>View</button>
                        <button id='view-button-doctor-remove'>Remove</button>
                    </td>
              </tr>
                <tr>
                    <td>104</td>
                    <td>891224567V</td>
                    <td>Dr Kamal Silva</td>
                    <td>0782347778</td>
                    <td>kamalsilva@gmail.com</td>
                    <td>
                        <button id='view-button-doctor-view'>View</button>
                        <button id='view-button-doctor-remove'>Remove</button>
                    </td>
                     </tr>
                <tr>
                    <td>105</td>
                    <td>891334567V</td>
                    <td>Dr Sathya Suriya</td>
                    <td>0782347678</td>
                    <td>sathyasurya@gmail.com</td>
                    <td>
                        <button id='view-button-doctor-view'>View</button>
                        <button id='view-button-doctor-remove'>Remove</button>
                    </td>
                </tr>
             </table>
            <div id='doctor-pageButton'>
                <a className='page-navigation'>{"<< Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next >>"}</a> 
            </div>
         </div>
        </div>
    )
}