import React from 'react';
import '../assests/css/component.nurse.css';
export default function Nurse() {

    return (
        <div>
            <div id='nurse-contanier'> 
            <h3 id='header-clusterAdmin'>Nurse Details</h3>
            <input type="text" id='input-nurse' placeholder=" &#xf002; Enter NIC Number"/> 
            <button id='add-nurse'>+ Add New</button>
            <br/><br/>
            <table id="nurse-table">
                <tr>
                    <th id='nurse-number'>Id</th>
                    <th>NIC Number</th>
                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    <th id='nurse-action'>Action</th>

                </tr>
                <tr>
                    <td>120</td>
                    <td>92234567V</td>
                    <td>Samanthi Karnanayaka</td>
                    <td>0766123456</td>
                    <td>samanthikarunanayaka@gmail.com</td>
                    <td>
                        <button id='view-button-nurse-view'>View</button>
                        <button id='view-button-nurse-remove'>Remove</button>
                    </td>

                </tr>
                <tr>
                    <td>130</td>
                    <td>911234599V</td>
                    <td>Sewandi Wathsala</td>
                    <td>0761234567</td>
                    <td>sewandiwathsala@gmail.com</td>
                    <td>
                        <button id='view-button-nurse-view'>View</button>
                        <button id='view-button-nurse-remove'>Remove</button>
                    </td>
          </tr>
                <tr>
                    <td>140</td>
                    <td>88234567V</td>
                    <td>Gimhani Shamila</td>
                    <td>0782345678</td>
                    <td>gimhanishamila@gmail.com</td>
                    <td>
                        <button id='view-button-nurse-view'>View</button>
                        <button id='view-button-nurse-remove'>Remove</button>
                    </td>
              </tr>
                <tr>
                    <td>142</td>
                    <td>8512345678V</td>
                    <td>Kamala Silva</td>
                    <td>0782347778</td>
                    <td>kamalasilva@gmail.com</td>
                    <td>
                        <button id='view-button-nurse-view'>View</button>
                        <button id='view-button-nurse-remove'>Remove</button>
                    </td>
                     </tr>
                <tr>
                    <td>160</td>
                    <td>891334567V</td>
                    <td>Sathya Suriya</td>
                    <td>0782347678</td>
                    <td>sathyasurya@gmail.com</td>
                    <td>
                        <button id='view-button-nurse-view'>View</button>
                        <button id='view-button-nurse-remove'>Remove</button>
                    </td>
                </tr>
             </table>
            <div id='nurse-pageButton'>
                <a className='page-navigation'>{"<< Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next >>"}</a> 
            </div>
         </div>
        </div>
    )
} 