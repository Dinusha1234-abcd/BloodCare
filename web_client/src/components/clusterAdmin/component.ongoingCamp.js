import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../assests/css/component.pastCamp.css';


import loadingImage from '../../assests/images/loading.gif';
import waitImage from '../../assests/images/wait.gif';
import unsuccessImage from '../../assests/images/wrong.png';
export default function OngoingCamp() {

    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [wait, setWait] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    //pagination
    const [firstRow, setFirstRow] = useState(0);
    const [lastRow, setLastRow] = useState(0);
    const [pageNumber, setPageNumber] = useState(1); 
    useEffect((() => { getOngoingCampData() }), [])
    function getOngoingCampData() {
        const clusterAdminNic = localStorage.getItem('userNic');
        const clusterAdmin = {
            clusterAdminNic
        }

        axios.post("http://localhost:8070/camp/selectongoingcamp", clusterAdmin).then(
            (res) => {
                setData(res.data.camps);
                setLastRow(10);
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
    //display data in table
    //check the NIC number
    
    if (searchData == "") {
        for (let i = firstRow; i < data.length; i++) {
            if( data[0]['bloodCampNumber'] != null){ 
            list.push(
                <> <tr>
                    <td>{data[i]['bloodCampNumber']}</td>
                    <td>{data[i]['date'].substring(0, 10)}</td>
                    <td>{data[i]['organizerName']}</td>
                    <td>{data[i]['place']}</td>
                    <td>{data[i]['firstName'] + ' ' + data[i]['lastName'] }</td>
                    <td>
                    <td><Link to={`${'/bloodcamp/upcommingcampView/' + data[i]['bloodCampNumber'] + '/' + data[i]['date'].substring(0, 10)}`} id='view-button-pastcamp'>View</Link></td>
  </td>
                </tr>
                </>)
            }
        }
    } else {
        for (let i = 0; i < 10; i++) {
            if (searchData == data[i]['userNic']) {
                list.push(
                    <> <tr>
                        <td>{data[i]['bloodCampNumber']}</td>
                        <td>{data[i]['date'].substring(0, 10)}</td>
                        <td>{data[i]['organizerName']}</td>
                        <td>{data[i]['place']}</td>
                        <td>{data[i]['firstName'] + ' ' + data[i]['lastName'] }</td>
                        <td>
                        <td><Link to={`${'/bloodcamp/upcommingcampView/' + data[i]['bloodCampNumber'] + '/' + data[i]['date'].substring(0, 10)}`} id='view-button-pastcamp'>View</Link></td>
  </td>
                    </tr>
                    </>)

            }
        }
    }
    return (
        <div>
            <div id='past-camp-contanier'> 
            <h3 id='header-clusterAdmin'>Ongoing Camps Details</h3>
            <input type="text" id='input-pastCamp' placeholder=" &#xf002; Enter Camp Number"/> 
            <br/><br/>
            <table id="past-camp-table">
                <tr>
                    <th id='pastCamp-number'>Camp Number</th>
                    <th>Date</th>
                    <th>Organizer Name</th>
                    <th>Place</th>
                    <th>Head Nurse Name</th>
                    <th id='pastCamp-action'>Action</th>
                </tr>
                {list}
            </table>
            <div id={`${loading ? 'loading-cluterAdmin-active' : 'loading-cluterAdmin'}`}> <img src={loadingImage} /> </div>
            <div id='pastCamp-pageButton'>
                <a className='page-navigation'>{"<< Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next >>"}</a> 
            </div>
         </div>
        </div>
    )
}