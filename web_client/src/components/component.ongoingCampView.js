import React from 'react';
import '../assests/css/component.pendingCampView.css' 
import { useParams } from 'react-router-dom';
import Blood from "./component.blood.display";

export default function PendingCampView() {
   const {id , name, mobile,place} = useParams()
    return (
        <div id='pending-camp-view'>
            <div id='pending-camp-view-container-clusterAdmin'>
                <div id='pending-camp-container-box1-clusterAdmin'>
                    <h3 id='pending-camp-header-clusterAdmin100'>Pending Blood Camp Details</h3>

                    <table id="past-camp-view-table">
                        <tr> 
                        <td>Organizer Name</td>
                        <td>{name}</td>
                        </tr>
                        <tr> 
                        <td>NIC Number</td>
                        <td>{id}</td>
                       </tr> 
                       <tr> 
                        <td>Place</td>
                        <td>{place}</td>
                        </tr>
                        <tr> 
                        <td>Mobile Number</td>
                        <td>{mobile}</td>
                        </tr>
                        <tr> 
                        <td>Email</td>
                        <td>namal@gmail.com</td>
                        </tr>
                    </table>
                    <div id='pending-camp-container-box2-clusterAdmin'>
                        <form>  
                            <input type='text' id='input-send-message-clusterAdmin' ></input><br/>
                            <button type="sumbit" id="sumbit-send-Email-clusterAdmin" >Send Email</button>  
                            <button type="sumbit" id="sumbit-send-SMS-clusterAdmin" >Send SMS</button>  
                        </form>
                    </div>
                </div>
                <div id='pending-camp-container-box3-clusterAdmin'>
                <h3 id='pending-camp-header-clusterAdmin100'>Assign Medical Staff</h3>
                <table id="past-camp-view-table">
                        <tr> 
                        <td>Head Nurse Name</td>
                        <td>Supuni Kalhari</td>
                        </tr>
                        <tr> 
                        <td>Other Medical Staff</td>
                        <td><div id='past-camp-medicalstaff-name'>Sandaya lakshani <i class="fa-solid fa-xmark close-button"></i></div> 
                            <div id='past-camp-medicalstaff-name'>Sahan Silva <i class="fa-solid fa-xmark close-button"></i></div>
                            <div id='past-camp-medicalstaff-name'>Savinda Gunarathna <i class="fa-solid fa-xmark close-button"></i></div> 
                            <div id='past-camp-medicalstaff-name'>Sahan Ranasinha <i class="fa-solid fa-xmark close-button"></i></div> 
                       </td>
                       </tr> 
                       <tr> 
                         <td>Driver Name</td>
                         <td>Colombo</td>
                        </tr>
                     </table>
                 
                </div>
            </div>
            <div id='medicalstaff-display-table-display'>
                 <h3 id='pending-camp-header-clusterAdmin100'>Available Medical Staff Members</h3>
                 <table id="medical-staff-view-table">
                        <tr> 
                        <td>Name</td>
                        <td>Type</td>
                        <td>Action</td>

                        </tr>
                        <tr> 
                        <td>Supuni Kalhari</td>
                        <td>Head Nurse</td>
                        <td><button id='add-button-staff'>View</button></td>


                       </tr> 
                       <tr> 
                        <td>Savinda Gunarathna</td>
                        <td>Nurse</td>
                        <td><button id='add-button-staff'>View</button></td>
                        
                        </tr>
                        <tr> 
                        <td>Sahan Ranasinha</td>
                        <td>Doctor</td>
                        <td><button id='add-button-staff'>View</button></td>


                        </tr>
                        <tr> 
                        <td>Damith Asanka</td>
                        <td>Nurse</td>
                        <td><button id='add-button-staff'>Add</button></td>


                        </tr>
                    </table>
                 <div id='medicalstaff-display-table-display-available'></div>
            </div>
        </div>
       
    )
}