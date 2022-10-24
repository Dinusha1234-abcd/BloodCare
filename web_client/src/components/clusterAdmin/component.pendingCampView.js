import React, { useState, useCallback, useEffect } from 'react';
import '../../assests/css/component.pendingCampView.css' 
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
    const [staffName, setStaffName] = useState("");

    useEffect((() => { getDoctorData() ;getMedicalStaffData() }), [])
    function getDoctorData() {
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
        window.location = '/bloodcamp/pendingcamp' 
    }
    function unsucessbutton() {
        window.location =  '/bloodcamp/pendingcamp' 
    }
    function getMedicalStaffData() {
        const clusterAdminNic = localStorage.getItem('userNic');
        const campNumber = id;
        const camp = {
            clusterAdminNic,
            date,
            campNumber
        }


        axios.post("http://localhost:8070/camp/staffmembers", camp).then(
            (res) => {

                setMedicalStaff(res.data.medicalStaff);
                setLoading(!loading);
                setWait(true);
            }).catch((err) => {
                //sever 
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true)
            })

    }

     function confirmationCamp(e){
        e.preventDefault();
        setLoading(loading);
        setWait(false);
        const status = 'accept';
        const campNumber = id;
        const camp = {
            status,
            campNumber
        }
          axios.post("http://localhost:8070/camp/confirmationcamp", camp).then(
              (res) => {

                 setSuccessMessage('Camp Confirmation Sucessfully')
                 setLoading(!loading);
                 setWait(true);
                 setSuccess(true);
             }).catch((err) => {
                //sever 
                 setLoading(!loading);
                // setUnsuccessMessage("Network Connection Issue Please Try Again");
                 setUnSuccess(true)
                setWait(true);
            })
     } 

     function assignStaff(){

     }
    
    const headNurse = [];
    const driver = [];
    const otherMedicalStaff = []; 
    
    const list = [];

    for (let i = 0; i < data.length; i++) {
        if(data[i]['type']=="4"){
            headNurse.push(
                <div id='past-camp-medicalstaff-name'>{data[i]['firstName'] + " " + data[i]['lastName'] + " "}<i class="fa-solid fa-xmark close-button"></i></div>
            )
        }else { 
            otherMedicalStaff.push(<div id='past-camp-medicalstaff-name'>{data[i]['firstName'] + " " + data[i]['lastName'] + " "}<i class="fa-solid fa-xmark close-button"></i></div>
        )}
    }
    for (let i = 0; i < medicalStaff.length; i++) {
  
            list.push(
                <tr>
                    <td>{medicalStaff[i]['firstName'] + " " + medicalStaff[i]['lastName'] }</td>
                <td>{medicalStaff[i]['medicalType']}</td>
                <td><button id='view-button-pastcamp'>Add</button></td></tr>
            )
         
    }

    return (
        
        <div id='pending-camp-view'>
             {/* Success message/ */}
             <div id={`${success ? 'sucess-message-active' : 'sucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='successImage' src={successImage} /> <br /> Success !</h1>  <br />
                    <p id='sucess-message-box'>{successMessage}</p> <br></br>
                    <button id="okay-button" onClick={() => { setSuccess(sucessbutton) }}> Okay </button>
                </div>
            {/* message */}
                <div id={`${wait ? 'wait-cluterAdmin' : 'wait-cluterAdmin-active'}`}> <img id='wait-cluterAdmin-image' src={waitImage} /> </div>
                
                <div id={`${unsuccess ? 'unsucess-message-active' : 'unsucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='unsuccessImage' src={unsuccessImage} /> <br /> Wrong !</h1>  <br />
                    <p id='unsucess-message-box'> {unsuccessMessage}</p> <br />
                    <button id="okay-button-unsucess" onClick={() => { setSuccess(unsucessbutton) }}> Okay </button>
                </div>
                <div id={`${wait ? null : 'fade-clusterAdmin'}`} ></div>
                <div id={`${success || unsuccess   ?  'fade-clusterAdmin' : null}`} > </div>
            <div id='pending-camp-view-container-clusterAdmin'>
                <div id='pending-camp-container-box1-clusterAdmin'>
                    <h3 id='pending-camp-header-display-clusterAdmin'>Pending Blood Camp Details</h3>

                    <table id="past-camp-view-table">
                        <tr> 
                        <td>Blood Camp Name</td>
                       <td> {wait ?  data[0]['name'] : null }  </td></tr>
                     <tr>
                        <td>Organizer Name</td>
                       <td> {wait ?  data[0]['organizerName'] : null }  </td>
                        </tr>
                        <tr> 
                        <td>NIC Number</td>
                         <td> {wait ? data[0]['organizerNic'] : null}</td> 
                       </tr> 
                       <tr> 
                        <td>Place</td>
                         <td> {wait ? data[0]['place'] : null}</td>  
                        </tr>
                        <tr> 
                        <td>Mobile Number</td>
                           <td> {wait ? data[0]['phoneNumber']: null}</td>  
                        </tr>
                        <tr> 
                        <td>Email</td>
                             <td> {wait ?data[0]['email'] : null}</td>  
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
                        <td> {wait ?  headNurse : null }</td>  
                        </tr>
                        <tr> 
                        <td>Other Medical Staff</td>
                        <td>{wait ? otherMedicalStaff : null } 
                       </td>
                       </tr> 
                     
                        
                     </table>
                     <div id='pendingCamp-confirmation-clusterAdmin'> 
                      <form onSubmit={confirmationCamp} > 
                     <button id="medicalstaff-display-table-display-available-confirm" type="sumbit" >Confirm</button> {"  "}
                    
                    {/* <button id="medicalstaff-display-table-display-available-unconfirm"  type="sumbit"  >UnConfirm</button> {"   "} */}
                     
                    <button id="medicalstaff-display-table-display-available-cancle" type="">Cancel</button>
                    </form>
                   </div>
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
                        {list}
                                           
                    </table>
                
            </div>
        </div>
    )
}