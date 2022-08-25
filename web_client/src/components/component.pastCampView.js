import React from 'react';
import '../assests/css/component.pendingCampView.css' 
import { useParams } from 'react-router-dom';
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
                        

<<<<<<< HEAD
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
=======
          <table id="medicalOfficer-past-camp-view-table">
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
          <div id="pending-camp-container-box2-medicalOfficer">
            <form>
              <input type="text" id="input-send-message-clusterAdmin"></input>
              <br />
              <button type="sumbit" id="sumbit-send-Email-clusterAdmin">
                Send Email
              </button>
              <button type="sumbit" id="sumbit-send-SMS-clusterAdmin">
                Send SMS
              </button>
            </form>
          </div>
          <div id ="exporttopdf-Btn">
          <h3 id = "exporttopdf-Btn-text">Export To PDF</h3>
          </div>
          <div id="pastCamp-DonorsCount">
          <h3 id="pastCamp-DonorsCount-text">Donors Count</h3>
          <h3 pastCamp-DonorsCount-text>47</h3>
          </div>

          <div id="pastCamp-BloodCount">
          <h3 id="pastCamp-BloodCount-text">Blood Count</h3>
          <h3 pastCamp-DonorsCount-text>160</h3>
          </div>

          <div id="pastCamp-StaffCount">
          <h3 id="pastCamp-StaffCount-text">Staff Members</h3>
          <h3 pastCamp-DonorsCount-text>5</h3>
          </div>
  
       
        <div id="pending-camp-container-box3-clusterAdmin">
          <div id="medicalOfficer-summary-bloodcounts">
            <h3>Blood Counter Details</h3>
            <div id="blood">
              <Blood name="O+" />
              <Blood name="A+" />
              <Blood name="B+" />
              <Blood name="AB+" />
            </div>
            <div id="blood">
              <Blood name="O-" />
              <Blood name="A-" />
              <Blood name="B-" />
              <Blood name="AB-" />
>>>>>>> 7ad938bf52df83b899930d0362c810bf5b87db85
            </div>
        </div>
    )
}