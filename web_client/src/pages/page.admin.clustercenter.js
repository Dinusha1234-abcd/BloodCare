import React, { useState, useEffect } from "react";
import axios from 'axios';
import SlideMenuAdmin from "../components/component.slidemenu.admin";
import '../assests/css/admin/page.admin.clustercenter.css';
import loadingImage from '../assests/images/loading.gif';
import unsuccessImage from '../assests//images/wrong.png';

export default function AdminBloodCamp() {

    const [slidemenu, setSlideMenu] = useState(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [success, setSuccess] = useState(false); 

    const passData = (data) => {
    setSlideMenu(data);
  };

  useEffect((() => { getClusterCenterData() }), [])

  function getClusterCenterData() {
    axios.get("http://localhost:8070/clusterCenter/selectClusterCenter").then(
        (res) => {
            setData(res.data.clusterCenters);
            console.log(res.data);

            setLoading(!loading);
        }).catch((err) => {
            //sever error
            setLoading(!loading);
            setUnsuccessMessage("Network Connection Issue Please Try Again");
            setUnSuccess(true)
        })
  }

  function unsucessbutton(){
    window.location = "/clusterCenter";
  }

  const list = [];

  //display data in table
    //check the NIC number
    if (searchData == "") {
        for(let i=0; i<data.length; i++){
            list.push(
                <> <tr>
                    <td>{data[0]['bloodCenterNo']}</td>
                    <td>{data[i]['name']}</td>
                    <td> {data[i]['province']}</td>
                    <td>{data[i]['district']}</td>
                    <td>{data[i]['address']}</td> 
                    <td><button id='view-camp-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                </>
            )
        }
    }

    return(
        <div>
            <SlideMenuAdmin headerName={"Cluster Centers"} passData={passData} />
            <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >

            <div id='clustercenter-container-admin'> 
            
            {/* <img src={upcomingcamp} id='camp-image-icon-admin'  /> */}
                <input type="text" id='input-clustercenter-admin' placeholder=" &#xf002; Search"/>
                <button id='add-clustercenter-button-admin'>Add</button> 
                <br/><br/>
                <table id="clustercenter-table-admin">
                <tr>
                    <th id='Camp-id'>Cluster Center No</th>
                    <th>Name</th>
                    <th>Province</th>
                    <th>District </th>
                    <th > Cluster Admin Name</th>
                    <th id='camp-action-admin'>Action</th>
                    <th id='camp-action-admin'>Action</th>
                </tr>

                {list}

                {/* <tr>
                    <td>01</td>
                    <td>Blood Alliance</td>
                    <td>Southern</td>
                    <td>Matara</td>
                    <td>Kasun Vithane</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>OneBlood</td>
                    <td>Western</td>
                    <td>Colombo</td>
                    <td>Chamika Weerasinghe</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                <tr>
                    <td>03</td>
                    <td>LifeSource</td>
                    <td>Southern</td>
                    <td>Galle</td>
                    <td>Thejan Gunathilake</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr>
                <tr>
                    <td>04</td>
                    <td>LittleHelp</td>
                    <td>Eastern</td>
                    <td>Ampara</td>
                    <td>Adhi Wijethunge</td>
                    <td><button id='view-camp-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Remove</button></td>
                </tr> */}
                
                
                
            </table>
            <div id={`${loading ? 'loading-cluterAdmin-active' : 'loading-cluterAdmin'}`}> <img src={loadingImage} /> </div>
            
         </div>

            </div>    
        </div>
    )
}