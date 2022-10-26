import React,{useEffect, useState} from 'react';
import axios from 'axios';
import loadingImage from '../../assests/images/loading.gif';
import alert from '../../assests/images/alert.png';
import waitImage from '../../assests/images/wait.gif';
import '../../assests/css/admin/component.user.search.admin.css';


export default function Organizer(){

    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);
    const [wait, setWait] = useState(false);
    const [removeAlert, setRemoveAlert] = useState(false);
    const [organizerName, setOrganizerName] = useState("");
    const [organizerNic, setOrganizerNic] = useState("");
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect((() => {getOrganizerData() }), [])
    function getOrganizerData() {

        axios.post("http://localhost:8070/users/selectOrganizer").then(
            (res) => {
                setData(res.data.organizers);
                console.log(res.data);

                setLoading(!loading);
            }
        ).catch((err) => {
            //server error
            setLoading(!loading);
            setUnsuccessMessage("Network Connection Issue Please Try Again");
            setUnSuccess(true);
        })
    }

    function showRemoveMessage(organizerName, organizerNIC){
        setOrganizerName(organizerName);
        setOrganizerNic(organizerNIC);
        setRemoveAlert(true);
    }

    function removeOrganizerAdmin() {
        setRemoveAlert(false);
        setWait(true);
        const organizer = { organizerNic };
        axios.post("http://localhost:8070/users/removeOrganizer", organizer).then(
            (res) => {
                //check password and username  
                if (res['data']['message'] == "success") {
                    setWait(false);
                    setSuccessMessage("Organizer Update Sucessfully")
                    setSuccess(true);

                } else {
                    setWait(false);
                    setUnsuccessMessage("Organizer Update UnSucessfully");
                    setUnSuccess(true);

                }

            }
        ).catch((err) => {
            //sever error
            console.log(err.message);
            setWait(false);
            setUnsuccessMessage("Network Connection Issue Please Try Again");
            setUnSuccess(true);
        })

    }

    const list = [];
    if(searchData == "") {
        for (let i = 0; i < data.length; i++){
            list.push(
                <> <tr>
                    <td>{data[i]['nic']}</td>
                    <td>{data[i]['organizerName'] }</td>
                    <td>{data[i]['email']}</td>
                    <td>{data[i]['phoneNumber']}</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin' onClick={() => { showRemoveMessage(
                                data[i]['organizerName'] , 
                                data[i]['nic']) }} >Deactivate</button></td>

                </tr>
                </>
            )
        }
    }

    return (
        <div>
            <div id='user-contanier-admin'>

                {/* remove alert */}
                <div id={`${removeAlert ? 'remove-alert-clusteradmin-active' : 'sucess-message'}`}>
                    <br /> <h1 id='remove-alert-clusteradmin-name'> <img id='alert' src={alert} /> <br />Are you removing {organizerName}</h1>
                    <button id="remove-button" onClick={() => { removeOrganizerAdmin() }}> Okay </button>
                    <button id="remove-button" onClick={() => { setRemoveAlert(false) }}> Cancel </button>
                </div>

                <div id={`${wait ? 'wait-cluterAdmin-active' : 'wait-cluterAdmin'}`}> <img id='wait-cluterAdmin-image' src={waitImage} /> </div>
                 
                <h7 id='header-user-admin'>BLOOD CAMP ORGANIZER</h7>
                <input type="text" id='input-organizer-admin' placeholder=" &#xf002; Search"/>
                
                <br/><br/>
                <table id="user-table-admin">
                <tr>
                    <th id='user-nic'>NIC</th>
                    <th>Name</th>
                    <th>Email Address</th>
                    <th>Contact No</th>
                    <th id='user-action-admin'>Action</th>
                    <th id='user-action-admin'>Action</th>
                </tr>
                
                {list}
                
            </table>
            <div id={`${loading ? 'loading-cluterAdmin-active' : 'loading-cluterAdmin'}`}> <img src={loadingImage} /> </div>
            
         </div>
        </div>
    )

}
