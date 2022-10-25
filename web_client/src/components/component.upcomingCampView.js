import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../assests/css/component.pendingCampView.css' 
import waitImage from '../../assests/images/wait.gif';
import successImage from '../../assests/images/sucess.png';
import unsuccessImage from '../../assests/images/wrong.png';
export default function PendingCampView() {

    const {id, date} = useParams()

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [wait, setWait] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [medicalStaff, setMedicalStaff] = useState([]);
    const [status, setStatus] = useState("");
    const [staffAdd, setStaffAdd] = useState(false); 
    const [staffNic, setStaffNic] = useState("");
    const [staffId, setStaffId] = useState("");
    const [bloodCenterNumber, setBloodCenterNumber] = useState("");
    const [staffTyoe, setStaffType] = useState("");
    useEffect((() => { getCampData() ;getMedicalStaffData() }), [])
    function getCampData() {
        const campNumber = id;
        const camp = {
            campNumber
        }

        axios.post("http://localhost:8070/camp/pendingcampview", camp).then(
            (res) => {

                setData(res.data.camps);
                
                setLoading(!loading);
                setWait(true);
               
            }).catch((err) => {
                //sever 
                    setLoading(!loading);
                    setUnsuccessMessage("Network Connection Issue Please Try Again");
                    setUnSuccess(true)
            })

    }
    function sucessbutton() {
        // window.location = '/bloodcamp/pendingcampView/' + id + '/' + date; 
    }
    function unsucessbutton() {
        // window.location =  '/bloodcamp/pendingcampView/' + id + '/' + date; 
    }

    function getMedicalStaffData(){

    }
    return (
        <div id='pending-camp-view'>
            <div id='pending-camp-view-container-clusterAdmin'>
                <div id='pending-camp-container-box1-clusterAdmin'>
                    <h3 id='pending-camp-header-display-clusterAdmin'>Pending Blood Camp Details</h3>

                    <table id="past-camp-view-table">
                        <tr> 
                        <td>Organizer Name</td>
                        <td>Namal Kumara</td>
                        </tr>
                        <tr> 
                        <td>NIC Number</td>
                        <td>701234567V</td>
                       </tr> 
                       <tr> 
                        <td>Place</td>
                        <td>Colombo</td>
                        </tr>
                        <tr> 
                        <td>Mobile Number</td>
                        <td>0771234567</td>
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
                <h3 id='pending-camp-header-display-clusterAdmin'>Assign Medical Staff</h3>
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
            <div id='medicalstaff-display-table-display-clusteradmin'>
                 <h3 id='pending-camp-header-display-clusterAdmin'>Available Medical Staff Members</h3>
                 <table id="medical-staff-view-table">
                        <tr> 
                        <td>Name</td>
                        <td>Type</td>
                        <td>Action</td>

                        </tr>
                        <tr> 
                        <td>Supuni Kalhari</td>
                        <td>Head Nurse</td>
                        <td><button id='view-button-pastcamp'>Add</button></td>


                       </tr> 
                       <tr> 
                        <td>Savinda Gunarathna</td>
                        <td>Nurse</td>
                        <td><button id='view-button-pastcamp'>Add</button></td>
                        

                        </tr>
                        <tr> 
                        <td>Sahan Ranasinha</td>
                        <td>Doctor</td>
                        <td><button id='view-button-pastcamp'>Add</button></td>


                        </tr>
                        <tr> 
                        <td>Damith Asanka</td>
                        <td>Nurse</td>
                        <td><button id='view-button-pastcamp'>Add</button></td>


                        </tr>
                    </table>
                 <div id='medicalstaff-display-table-display-available'>
                 <h3 id='pending-camp-header-display-name-clusterAdmin'>Please Check Details are True or Not </h3>
                    <button id="medicalstaff-display-table-display-available-confirm" type="">Confirm</button> {"  "}
                    <button id="medicalstaff-display-table-display-available-unconfirm" type="">UnConfirm</button> {"   "}
                    <button id="medicalstaff-display-table-display-available-cancle" type="">Cancel</button>

                 </div>
            </div>
        </div>
    )
}