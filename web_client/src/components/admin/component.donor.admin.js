import React,{useEffect, useState} from 'react';
import axios from 'axios';
import loadingImage from '../../assests/images/loading.gif';
import alert from '../../assests/images/alert.png';
import '../../assests/css/admin/component.user.search.admin.css';

export default function Donor(){

    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);

    useEffect((() => {getDonorData() }), [])
    function getDonorData() {

        axios.post("http://localhost:8070/users/selectDonor").then(
            (res) => {
                setData(res.data.donors);
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

    const list = [];
    if(searchData == "") {
        for (let i = 0; i < data.length; i++){
            list.push(
                <> <tr>
                    <td>{data[i]['userNic']}</td>
                    <td>{data[i]['firstName'] + " " + data[i]['lastName']}</td>
                    <td>{data[i]['email']}</td>
                    <td>{data[i]['phoneNumber']}</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>

                </tr>
                </>
            )
        }
    }

    return (
        <div>
            <div id='user-contanier-admin'> 
                <h7 id='header-user-admin'>REGISTERED DONORS</h7>
                <input type="text" id='input-donor-admin' placeholder=" &#xf002; Search"/>
                
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
