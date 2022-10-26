import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assests/css/component.blood.css';

export default function OPostive(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [wait, setWait] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [camps, setCamps] = useState([]);
    const [campStatus, setCampStatus] = useState(false)
    useEffect((() => { getBloodCount();getBloodCamp() }), [])
    function getBloodCount() {
        const clusterAdminNic = localStorage.getItem('userNic');
        const clusterAdmin = {
            clusterAdminNic
        }

        axios.post("http://localhost:8070/blood/opostivecount", clusterAdmin).then(
            (res) => {
              
                setData(res.data.bloods);
                 setLoading(!loading);
                setWait(true);
            }).catch((err) => {
                //sever 
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true);
            })

    }  
    function getBloodCamp() {
       
        const clusterAdminNic = localStorage.getItem('userNic');
        const clusterAdmin = {
            clusterAdminNic
        }

        axios.post("http://localhost:8070/blood/opositivecamp", clusterAdmin).then(
            (res) => {
              
                setCamps(res.data.camps);
                 setLoading(!loading);
               
                setCampStatus(true)
            }).catch((err) => {
                //sever 
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true);
            })

    }
    const camp = []
    for (let i = 0; i < camps.length; i++) {
  
        camp.push(
            <tr>
                <td>{camps[i]['bloodCampNumber'] }</td>
            <td>{camps[i]['name']}</td>
            <td>{camps[i]['Total']}</td>

         </tr>
        )
     
}
  
    return(
        <div id='blood-display-container'>
            <div id='blood-display-subcontainer'>
            <h1 id='header-clusterAdmin-blood'>O Positive Blood Packets</h1>
            <div id='blood-display-container-box-1'>
               
                 <div id='blood-display-container-subbox-1'>Cluster Center <br/> <h id='blood-display-container-subbox-1-count'>{wait ?  data[0]['Opositive'] : null }</h> <br/>Packets</div>
                 <div id='blood-display-container-subbox-1'>All Cluster Center<br/><h id='blood-display-container-subbox-1-count'>{wait ?  data[0]['OpositiveAll'] : null }</h> <br/>Packets </div>
                 <div id='blood-display-container-subbox-1'>O Positive<br/><h id='blood-display-container-subbox-1-count'>{wait ?  (parseInt(data[0]['Opositive'])/ parseInt(data[0]['OpositiveAll']))*100 + '%': null }</h><br/>Percentage</div>
                 <div id='blood-display-container-subbox-2-1'>
                    <div id='blood-display-container-subbox-2-1-1' >Last Update Date 2022/07/28</div>
                    <div id='blood-display-container-subbox-2-1-1' >Last Update Time 12:00 PM</div>
               </div>
          
             
                <div id='blood-display-container-subbox-2-1'></div>
           </div>
           <div id='blood-display-container-box-2'>
                 <h1>Last 3 Months Camp Saving O+ Blood Packets</h1>
                 <table id="driver-table">
                <tr>
                    <th id='driver-number'>Date</th>
                    <th>Camp Number</th>
                    <th id='driver-action'>Number Of Blood Packets</th>
                     
                </tr>
                {campStatus ? camp : null}
             </table>
         
           </div>
           </div>
        </div>
    );
}