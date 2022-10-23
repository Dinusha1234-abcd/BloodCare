import React, { useState, useCallback, useEffect } from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import axios from 'axios';
import '../assests/css/page.regdonor.dashboard.css';
import backgroundimg from '../assests/images/blood donation.jpg';
import unsuccessImage from '../assests//images/wrong.png';
import loadingImage from '../assests/images/loading.gif';

export default function RegDonorDashboard() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [success, setSuccess] = useState(false);
    const regDonorNic = localStorage.getItem('userNic');
    const [firstRow, setFirstRow] = useState(0);
    const [lastRow, setLastRow] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    const passData = (data) => {
        setSlideMenu(data);
    };

    useEffect((() => { getCampData() }), [])
    function getCampData() {
        // const regDonorNic =localStorage.getItem('userNic');
        // const regDonor = {
        //     regDonorNic
        // } 
        axios.get(" http://localhost:8070/registerdonor/homeselectcamp").then(
            (res) => {
                setData(res.data.camps);
                if (data.length < 11) {
                    setLastRow(data.length);
                } else {
                    setLastRow(10);
                }
                console.log(lastRow);
                setLoading(!loading);
            }).catch((err) => {
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Pleace Try Again");
                setUnSuccess(true)
            })
    }
    function unsucessbutton() {
        window.location = "/dashboard";
    }
    const list = [];

    if (searchData == "") {
        for (let i = firstRow; i < data.length; i++) {
            list.push(
                <><tr>
                    <td>{data[i]['date'].substring(0, 10)}</td>
                    <td>{data[i]['name']}</td>
                    <td>{data[i]['place']}</td>
                </tr>
                </>)
        }
    } else {
        for (let i = 0; i < lastRow; i++) {
            if (searchData == data[i]['userNic']) {
                list.push(
                    <> <tr>
                        <td>{data[i]['date'].substring(0,10)}</td>
                        <td>{data[i]['name']}</td>
                        <td>{data[i]['place']}</td>
                    </tr>
                    </>
                )

            }
        }
    }

    return (
        <div>
            <SlideMenuRegDonor headerName={"Home"} passData={passData} />
            <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >

                <div id="table-Container">
                    <div id={`${unsuccess ? 'unsucess-message-active' : 'unsucess-message'}`}>
                        <br /> <h1 id='sucess-message-name'> <img id='unsuccessImage' src={unsuccessImage} /> <br />Wrong !</h1> <br />
                        <p id='unsucess-message-box'> {unsuccessMessage}</p> <br />
                        <button id="okay-button-unsucess" onClick={() => { setSuccess(unsucessbutton) }}> Okay </button>
                    </div>
                    {/* <div id={`${ unsuccess ? 'fade-clusterAdmin' : null}`}  ></div> */}
                    <h3 id="regDonor-table-name"> Your Area Upcoming Camp</h3>
                    <div id="home-camp-details">
                        <input type="text" id='input-camp-date' placeholder=" &#xf002; " className="colour" />
                        <br></br>
                        <table id="d-camp-details-table">
                            <tr>
                                <th id="camp-date">Date</th>
                                <th>Camp Name</th>
                                <th>Location</th>
                            </tr>
                            {list}
                            {/* <tr>
                                <td>13-08-2022</td>
                                <td><a href="#"><span>YOU CAN HELP SAVE A LIFE!</span></a></td>
                                <td>Panadura</td>
                            </tr>
                            <tr>
                                <td>18-08-2022</td>
                                <td><a href="#"><span>Blood Donation Drive</span></a></td>
                                <td>Kalutara</td>
                            </tr>
                            <tr>
                                <td>29-08-2022</td>
                                <td><a href="#"><span>BE A HERO DONTAE BLOOD</span></a></td>
                                <td>Rathmalana</td>
                            </tr>
                            <tr>
                                <td>03-09-2022</td>
                                <td><a href="#"><span>Give Blood and Save a Life</span></a></td>
                                <td>Horana</td>
                            </tr>
                            <tr>
                                <td>11-09-2022</td>
                                <td><a href="#"><span>SAVE A LIFE, GIVE YOUR BLOOD.</span></a></td>
                                <td>Bandaragama</td>
                            </tr> */}
                        </table>
                        <div id={`${loading ? 'loading-cluterAdmin-active' : 'loading-cluterAdmin'}`}> <img src={loadingImage} /> </div>
                    </div>



                </div>
                <div id='d-camp-details-table-pageButton'>
                    <a className='page-navigation'>{"<< "}  </a>
                    <a className='page-navigation'>{" Prev"}  </a>
                    <a className='page-navigation'>1</a>
                    <a className='page-navigation'>{"Next "}</a>
                    <a className='page-navigation'>{">>"}</a>
                </div>
            </div>
        </div>
    );
}