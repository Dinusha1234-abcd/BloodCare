import React from 'react';
import '../assests/css/component.headNurse.css';
export default function HeadNurse() {

    return (
        <div>
            <div id='headNurse-contanier'> 
            <h3 id='header-clusterAdmin'>Head Nurse Details</h3>
            <input type="text" id='input-headNurse' placeholder=" &#xf002; Enter NIC Number"/> 
            <button id='add-headNurse'>+ Add New</button>
            <br/><br/>
            <table id="headNurse-table">
                <tr>
                    <th id='headNurse-number'>Id</th>
                    <th>NIC Number</th>
                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    <th id='headNurse-action'>Action</th>
                    
                </tr>
                <tr>
                    <td>110</td>
                    <td>88234567V</td>
                    <td>Samanthi Perera</td>
                    <td>0777123456</td>
                    <td>samnthikaperera@gmail.com</td>
                    <td>
                        <button id='view-button-headNurse-view'>View</button>
                        <button id='view-button-headNurse-remove'>Remove</button>
                    </td>
                   
                </tr>
                <tr>
                    <td>111</td>
                    <td>901234567V</td>
                    <td>Sewandi Wathsala</td>
                    <td>0761234567</td>
                    <td>sewandiwathsala@gmail.com</td>
                    <td>
                        <button id='view-button-headNurse-view'>View</button>
                        <button id='view-button-headNurse-remove'>Remove</button>
                    </td>
          </tr>
                <tr>
                    <td>112</td>
                    <td>871235567V</td>
                    <td>Gimhani Senanayake</td>
                    <td>0782345678</td>
                    <td>gimhanisenanayake@gmail.com</td>
                    <td>
                        <button id='view-button-headNurse-view'>View</button>
                        <button id='view-button-headNurse-remove'>Remove</button>
                    </td>
              </tr>
                <tr>
                    <td>113</td>
                    <td>8512345678V</td>
                    <td>Kamala Silva</td>
                    <td>0782347778</td>
                    <td>kamalasilva@gmail.com</td>
                    <td>
                        <button id='view-button-headNurse-view'>View</button>
                        <button id='view-button-headNurse-remove'>Remove</button>
                    </td>
                     </tr>
                <tr>
                    <td>114</td>
                    <td>891334567V</td>
                    <td>Sathya Suriya</td>
                    <td>0782347678</td>
                    <td>sathyasurya@gmail.com</td>
                    <td>
                        <button id='view-button-headNurse-view'>View</button>
                        <button id='view-button-headNurse-remove'>Remove</button>
                    </td>
                </tr>
             </table>
            <div id='headNurse-pageButton'>
                <a className='page-navigation'>{"<< Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next >>"}</a> 
            </div>
         </div>
        </div>
    )
}