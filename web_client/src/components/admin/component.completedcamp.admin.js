import React, { useState, useEffect } from 'react';
import axios from 'axios';
import loadingImage from '../../assests/images/loading.gif';
import unsuccessImage from '../../assests/images/wrong.png';
import '../../assests/css/admin/component.bloodcamp.admin.css'; 

export default function CompletedCamp(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [wait, setWait] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");

    // useEffect((() => { getCompletedCampData() }), [])

    // function getCompletedCampData() {
    //     axios.post("http://localhost:8070/camp/selectCompletedCamp").then(
    //         (res) => {
    //             setData(res.data.camps);
    //             console.log(res.data);
    //             setLoading(!loading);
    //         }).catch((err) => {
    //             //sever 
    //             setLoading(!loading);
    //             setUnsuccessMessage("Network Connection Issue Please Try Again");
    //             setUnSuccess(true);
    //         }
    //     )
    // }

    function sucessbutton() {
        window.location = "/bloodcamps/completedcamp";
    }
    function unsucessbutton() {
        window.location = "/bloodcamps/completedcamp";
    }

    const list = [];
    if (searchData == "") {
        for (let i = 0; i < data.length; i++) {
            if( data[0]['bloodCampNumber'] != null){ 
            list.push(
                <> <tr>
                    <td>{data[i]['bloodCampNumber']}</td>
                    <td>{data[i]['date'].substring(0, 10)}</td>
                    <td>{data[i]['place']}</td>
                    <td>{data[i]['organizerName']}</td>
                    <td>{data[i]['name']}</td>
                    <td>{data[i]['numberofregisters']}</td>
                    <td><button id='view-button-pastcamp'>View</button></td>
                </tr>
                </>)
            }
        }
    }

    return (
        <div>
            <div id='camp-contanier-admin'>
                <div id={`${success || unsuccess || wait ?   'fade-clusterAdmin' : null }`} ></div>

                <div id={`${unsuccess ? 'unsucess-message-active' : 'unsucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='unsuccessImage' src={unsuccessImage} /> <br /> Wrong !</h1>  <br />
                    <p id='unsucess-message-box'> {unsuccessMessage}</p> <br />
                    <button id="okay-button-unsucess" onClick={() => { setSuccess(unsucessbutton) }}> Okay </button>
                </div>

                <h7 id='header-camp-admin'>Completed Blood Camps</h7>
                <input type="text" id='input-completedcamp-admin' placeholder=" &#xf002; Search"/>
                <br/><br/>
                <table id="camp-table-admin">
                <tr>
                    <th id='Camp-id'>Blood Camp No</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Organizer Name</th>
                    <th >Blood Center Name</th>
                    <th >Number of Donors</th>
                    <th id='camp-action-admin'>Action</th>
                </tr>
                {list}
                
                
            </table>
            <div id={`${loading ? 'loading-cluterAdmin-active' : 'loading-cluterAdmin'}`}> <img src={loadingImage} /> </div>
         </div>
        </div>
    )
}