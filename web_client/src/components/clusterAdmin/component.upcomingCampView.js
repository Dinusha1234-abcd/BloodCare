 
import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';  
import waitImage from '../../assests/images/wait.gif';
import successImage from '../../assests/images/sucess.png';
import unsuccessImage from '../../assests/images/wrong.png';
import '../../assests/css/component.pendingCampView.css' 

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
    const [registers , setRegisters] = useState([]);
    const [registerStatus,setRegisterStatus] = useState(false);


    useEffect((() => { getCampData() ;registerCampUsers();getMedicalStaffData() }), [])
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
    function registerCampUsers() {
        const campNumber = id;
        const camp = {
            campNumber
        }

        axios.post("http://localhost:8070/camp/registercampusers", camp).then(
            (res) => {

                setRegisters(res.data.camps);
                setLoading(!loading);
                setWait(true);
                setRegisterStatus(true)
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
    const list = [];
    for (let i = 0; i < data.length; i++) {
  
        list.push(
            <tr> 
            <td>{data[i]['firstName'] + " " + data[i]['lastName'] + " "}</td>
            <td><b>{data[i]['medicalType'] }</b></td>
           
           </tr>    )
     
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
                <div id={`${success || unsuccess  || staffAdd ?  'fade-clusterAdmin' : null}`} > </div>
         
            <div id='pending-camp-view-container-clusterAdmin'>
                <div id='pending-camp-container100-box1-clusterAdmin'>
                    <h3 id='pending-camp-header-display-clusterAdmin'>Upcomming Blood Camp Details</h3>

                    <table id="past-camp-view-table">
                    <tr> 
                        <td>Blood Camp Name</td>
                       <td> {wait ?  data[0]['name'] : null } </td></tr>
                        <tr> 
                        <td>Organizer Name</td>
                        <td>{wait ?  data[0]['organizerName'] : null } </td>
                        </tr>
                        <tr> 
                        <td>NIC Number</td>
                        <td>{wait ? data[0]['organizerNic'] : null}</td>
                       </tr> 
                       <tr> 
                        <td>Place</td>
                        <td> {wait ? data[0]['place'] : null}</td>
                        </tr>
                        <tr> 
                        <td>Mobile Number</td>
                        <td>{wait ? data[0]['phoneNumber']: null}</td>
                        </tr>
                        <tr> 
                        <td>Email</td>
                        <td>{wait ?data[0]['email'] : null}</td>
                        </tr>
                         
                        <tr> 
                        <td>Number of Pre-Registers</td>
                        <td><b>{registerStatus ?registers[0]['preReg'] : null}</b></td>
                        </tr>
                        <tr> 
                        <td>Number of New Registers</td>
                        <td><b>{registerStatus ?registers[0]['newReg'] : null}</b></td>
                        </tr>
                        <tr> 
                        <td>Number of  Vegitarian Registers</td>
                        <td><b>{registerStatus ?registers[0]['vegReg'] : null}</b></td>
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
              
              
            </div>
            <div id='medicalstaff-display-table-display-clusteradmin'>
                 <h3 id='pending-camp-header-display-clusterAdmin'>Assign Medical Staff Members</h3>
                 <table id="medical-staff-view-table">
                        <tr> 
                        <td>Name</td>
                        <td>Type</td>
                     

                        </tr>
                  {list}  </table>
                 
            </div>
        </div>
    )
}