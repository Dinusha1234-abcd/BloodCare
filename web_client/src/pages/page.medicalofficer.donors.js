import React, { useState } from "react";
import SlideMenuMedicalOfficer from "../components/component.slidemenu.medicalOfficer";
import '../assests/css/page.clusterAdmin.donors.css'

export default function MedicalOfficerDonors() {
    const [slidemenu, setSlideMenu] = useState(true);
    const passData = (data) => {
        setSlideMenu(data);
    };


    return (
        <div>
            <SlideMenuMedicalOfficer headerName={"Donors"} passData={passData} />
            <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
            <div id='donors-contanier'> 
            <h3 id="header-clusterAdmin">Donors Details</h3>
            <input type="text" id='input-donors' placeholder=" &#xf002; Enter NIC Number"/> 
            <button id='add-donors'>+ Add New</button>
            <br/><br/>
            <table id="donors-table">
                <tr>
                    <th id='donors-number'>Id</th>
                    <th>NIC Number</th>
                    <th>Name</th>
                    <th>Blood Type</th>
                    <th>Last Donation Date</th>
                    <th id='donors-action'>Action</th>

                </tr>
                <tr>
                    <td>101</td>
                    <td>891234567V</td>
                    <td>Namal Perera</td>
                    <td id="blood-type"><b>O+</b> </td>
                    <td>2018/02/04</td>
                    <td>
                        <button id='view-button-donors-view'>View</button>
                        <button id='view-button-donors-remove'>Remove</button>
                    </td>

                </tr>
                <tr>
                    <td>102</td>
                    <td>901234567V</td>
                    <td>Sewandi Ranasingh</td>
                    <td id="blood-type"><b>AB+</b> </td>
                    <td>2019/09/04</td>
                   <td>
                        <button id='view-button-donors-view'>View</button>
                        <button id='view-button-donors-remove'>Remove</button>
                    </td>
          </tr>
                <tr>
                    <td>103</td>
                    <td>871234567V</td>
                    <td>Sathya Ranasingh</td>
                    <td id="blood-type"><b>A+</b> </td>
                    <td>2019/09/04</td>
                       <td>
                        <button id='view-button-donors-view'>View</button>
                        <button id='view-button-donors-remove'>Remove</button>
                    </td>
              </tr>
                <tr>
                    <td>104</td>
                    <td>891224567V</td>
                    <td>Kamal Silva</td>
                    <td id="blood-type"><b>B+</b> </td>
                    <td>2019/09/04</td>
                    <td>
                        <button id='view-button-donors-view'>View</button>
                        <button id='view-button-donors-remove'>Remove</button>
                    </td>
                     </tr>
                <tr>
                    <td>105</td>
                    <td>891334567V</td>
                    <td>Sathya Suriya</td>
                    <td id="blood-type"><b>AB+</b> </td>
                    <td>2019/09/04</td>
                     <td>
                        <button id='view-button-donors-view'>View</button>
                        <button id='view-button-donors-remove'>Remove</button>
                    </td>
                </tr>
             </table>
            <div id='donors-pageButton'>
                <a className='page-navigation'>{"<< Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next >>"}</a> 
            </div>
         </div>
        </div>
        </div>
    )

} 