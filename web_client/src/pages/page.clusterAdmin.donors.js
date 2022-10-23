import React, { useState, useEffect } from "react";
import axios from 'axios';
import SlideMenuClusterAdmin from "../components/component.slidemenu.clusterAdmin";
import '../assests/css/page.clusterAdmin.donors.css'
import loadingImage from '../assests/images/loading.gif';
import unsuccessImage from '../assests//images/wrong.png';

export default function ClusterAdminDonors() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [success, setSuccess] = useState(false);  
    //pagination
    const [firstRow, setFirstRow] = useState(0);
    const [lastRow, setLastRow] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    const passData = (data) => {
        setSlideMenu(data);
    };

    useEffect((() => { getDonorData() }), [])
    function getDonorData() {

       axios.get("http://localhost:8070/registerdonor/selectdonor").then(
            (res) => {

                setData(res.data.donors);
                if(data.length < 11){
                    setLastRow(data.length);
                }else{
                    setLastRow(10);
                }
                console.log(100);
                setLoading(!loading);
            }).catch((err) => {
                //sever error
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true)
            })

    }
    function unsucessbutton(){
        window.location = "/donors";
    }
    const list = [];
   //display data in table
    //check the NIC number
    console.log(data);
    if (searchData == "") { 
        for (let i = firstRow; i < data.length; i++) {
            list.push(
                <> <tr>
                    <td>{data[i]['registerDonorId']}</td>
                    <td>{data[i]['userNic']}</td>
                    <td> {data[i]['firstName'] + " " + data[i]['lastName']}</td>
                    <td>{data[i]['bloodType']}</td>
                    <td>{data[i]['bloodType']}</td>
                    {/* <td>{data[i]['LastDonationDate'].substring(0, 10)}</td>  */}
                    <td>
                        <button id='view-button-doctor-view'   >View</button>
                        <button id='view-button-doctor-remove'>Remove</button>
                    </td>
                </tr>
                </>)
        }
    } else {
        for (let i = 0; i < lastRow; i++) {
            if (searchData == data[i]['userNic']) {
                list.push(
                    <> <tr>
                        <td>{data[i]['registerDonorId']}</td>
                        <td>{data[i]['userNic']}</td>
                        <td> {data[i]['firstName'] + " " + data[i]['lastName']}</td>
                        <td>{data[i]['bloodType']}</td>
                        <td>{data[i]['LastDonationDate']}</td>
                        <td>
                            <button id='view-button-doctor-view' >View</button>
                            <button id='view-button-doctor-remove'>Remove</button>
                        </td>
                    </tr>
                    </>)

            }
        }

    }

   
    return (
        <div>
            <SlideMenuClusterAdmin headerName={"Donors"} passData={passData} />
            <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
                <div id='donors-contanier'>
                <div id={`${unsuccess ? 'unsucess-message-active' : 'unsucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='unsuccessImage' src={unsuccessImage} /> <br /> Wrong !</h1>  <br />
                    <p id='unsucess-message-box'> {unsuccessMessage}</p> <br />
                    <button id="okay-button-unsucess" onClick={() => { setSuccess(unsucessbutton) }}> Okay </button>
                </div>
                <div id={`${ unsuccess ? 'fade-clusterAdmin' : null}`}  ></div>

                    <h3 id="header-clusterAdmin">Donors Details</h3>
                    <input type="text" id='input-donors' placeholder=" &#xf002; Enter NIC Number" onChange={(e) => { setSearchData(e.target.value) }}/>

                    <br /><br />
                    <table id="donors-table">
                        <tr>
                            <th id='donors-number'>Id</th>
                            <th>NIC Number</th>
                            <th>Name</th>
                            <th>Blood Type</th>
                            <th>Last Donation Date</th>
                            <th id='donors-action'>Action</th>

                        </tr>


                        {list}


                    </table>
                    <div id={`${loading ? 'loading-cluterAdmin-active' : 'loading-cluterAdmin'}`}> <img src={loadingImage} /> </div>

                    <div id='donors-pageButton'>
                        <a className='page-navigation'>{"<< Prev"}  </a>
                        <a className='page-navigation'>1</a>
                        <a className='page-navigation'>{"Next >>"}</a>
                    </div>
                </div>
            </div>
        </div>
    )

} 