import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../assests/css/admin/component.bloodcamp.admin.css';
import loadingImage from '../../assests/images/loading.gif'; 

export default function OngoingCamp(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [wait, setWait] = useState(false);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");

    useEffect((() => { getOngoingCampData() }), [])

    function getOngoingCampData() {

        axios.post("http://localhost:8070/camp/selectOngoingCamp").then(
            (res) => {
                setData(res.data.camps);
                console.log(res.data);
                setLoading(!loading);
            }).catch((err) => {
                //sever 
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true);
            })

    }

    function sucessbutton() {
        window.location = "/bloodcamp/ongoingcamp";
    }
    function unsucessbutton() {
        window.location = "/bloodcamp/ongoingcamp";
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
                    <td>{data[i]['name']  }</td>
                    <td>< button id='view-button-pastcamp'>View</button></td>
                </tr>
                </>)
            }
        }
    }

    return (
        <div>
            <div id='camp-contanier-admin'> 
                <h7 id='header-camp-admin'>Ongoing Blood Camps</h7>
                <input type="text" id='input-ongoincamp-admin' placeholder=" &#xf002; Search"/>
                <br/><br/>

                <table id="camp-table-admin">
                <tr>
                    <th id='Camp-id'>Blood Camp No</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Organizer Name</th>
                    <th >Blood Center Name</th>
                    <th id='camp-action-admin'>Action</th>
                </tr>

                {list}
                {/* <tr>
                    <td>07</td>
                    <td>08-25-2022</td>
                    <td>Gold house, Matara</td>
                    <td>Sadun Gunawardhane</td>
                    <td>OneBlood</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                </tr> */}
                
                
                
            </table>

            <div id={`${loading ? 'loading-cluterAdmin-active' : 'loading-cluterAdmin'}`}> <img src={loadingImage} /> </div>
            
         </div>
        </div>
    )
}