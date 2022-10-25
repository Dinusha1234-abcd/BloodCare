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
    const  [donors, setDonors] = useState([]);

    useEffect((() => { getCampData() ; getDonors() }), [])


    function getCampData() {
        const campNumber = id;
        const camp = {
            campNumber
        }

        axios.post("http://localhost:8070/camp/pastcampview", camp).then(
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
    function getDonors() {
        const campNumber = id;
        const camp = {
            campNumber
        }

        axios.post("http://localhost:8070/camp/getpastcampdonors", camp).then(
            (res) => {

                setDonors(res.data.users);
                 setLoading(!loading);
                setWait(true);
               
            }).catch((err) => {
                //sever 
                    setLoading(!loading);
                    setUnsuccessMessage("Network Connection Issue Please Try Again");
                    setUnSuccess(true)
            })

    }
    const list = [];
    const headNurse = [];
    const driver = [];
    const otherMedicalStaff = []; 
    for (let i = 0; i < data.length; i++) {
        if(data[i]['type']=="4"){
            headNurse.push(
                <div id='past-camp-medicalstaff-name'>{data[i]['firstName'] + " " + data[i]['lastName'] + " "} </div>
            )
        }else { 
            otherMedicalStaff.push(<div id='past-camp-medicalstaff-name'>{data[i]['firstName'] + " " + data[i]['lastName'] + " "} </div>
        )}
    }
    for (let i = 0; i < donors.length; i++) {
  
        list.push(
            <tr>
                <td>{donors[i]['userNic'] }</td>
            <td>{donors[i]['bloodRHtype']}</td>
         </tr>
        )
     
}
  
    return (
        <div id='pending-camp-view'>
            <div id='pending-camp-view-container-clusterAdmin'>
                <div id='pending-camp-container200-box1-clusterAdmin'>
                    <h3 id='pending-camp-header-clusterAdmin100'>Pending Blood Camp Details</h3>

                    <table id="past-camp-view-table">
                    <tr> 
                        <td>Camp Name</td>
                        <td>{wait ?  data[0]['name'] : null } </td>
                        </tr>
                      
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
                        <td>{wait ? data[0]['place'] : null}</td>
                        </tr>
                        <tr> 
                        <td>Mobile Number</td>
                        <td>{wait ? data[0]['phoneNumber']: null}</td>
                        </tr>
                        <tr> 
                        <td>Email</td>
                        <td>{wait ?data[0]['email'] : null}</td>
                        </tr>
                    </table>
                  
                </div>
                <div id='pending-camp-container-box3-clusterAdmin'>
                <h3 id='pending-camp-header-clusterAdmin100'>Assign Medical Staff</h3>
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
                 
                </div>
            </div>
            <div id='medicalstaff-display-table-display-clusteradmin'>
                 <h3 id='pending-camp-header-display-clusterAdmin'>Donation Donor Details</h3>
                 <table id="medical-staff-view-table">
                        <tr>
                        <td>NIC Number</td> 
                        <td>Blood Type</td>
                   
                        </tr>
                        {list}
                                           
                    </table>
                
            </div>
      
        </div>
       
    )
}