import React, { useEffect, useState } from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import '../assests/css/page.regdonor.camp.css';
import futureCamp from '../assests/images/furtureCamp.png';
import OngoingCamp from '../assests/images/ongoingCamp.png';
import pastCamp from '../assests/images/pastCamp.png';
import PendingCamp from '../assests/images/camp.png';
import map from '../assests/images/map.PNG';
import { Link } from "react-router-dom";
import axios from "axios";
import unsuccessImage from '../assests//images/wrong.png';
import loadingImage from '../assests/images/loading.gif';
export default function RegDonorCamp() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [success, setSuccess] = useState(false);

    const [firstRow, setFirstRow] = useState(0);
    const [lastRow, setLastRow] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const regDonorNic = localStorage.getItem('userNic');
    const passData = (data) => {
        setSlideMenu(data);
    };
    useEffect((() => {getCampMoreDetails() }),[])
    function getCampMoreDetails(){
        // const regDonorNic = localStorage.getItem('userNic');
        // const regDonor = {
        //     regDonorNic
        // }
        axios.post("http://localhost:8070/registerdonor/campAllDetail").then(
            (res) => {
                setData(res.data.allCamps);
                if(data.length <11){
                    setLastRow(data.length);
                }else {
                    setLastRow(10);
                }
                console.log(100);
                setLoading(!loading);
            }).catch((err) => {
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true)
            })
    }
    function unsucessbutton(){
        window.location ="/blood_camps";
    }
    const list = [];

    if(searchData == "") {
        for(let i = firstRow; i< data.length; i++){
            list.push(
                <div id="camp-details">
                    <img id="campimg" src={futureCamp} />
                    <h3 id="camp-name">{data[i]['name']}</h3>
                    <br></br>
                    <table id="regD-camp-details-table">
                        <tr>
                            <td>Name </td>
                            <td> : {data[i]['name']}</td>
                            {/* <td><i class="fa-solid fa-calendar-day"></i></td> */}
                        </tr>
                        <tr>
                            <td>Date </td>
                            <td> : {data[i]['date'].substring(0, 10)}</td>
                            {/* <td><i class="fa-solid fa-calendar-day"></i></td> */}
                        </tr>
                        <tr>
                            <td>Location  </td>
                            <td> : {data[i]['place']}</td>
                        </tr>
                        <tr>
                            <td>Organizer Name </td>
                            <td> : {data[i]['organizerName']}</td>
                        </tr>
                        <tr>
                            <td>Organizer Contact No </td>
                            <td> : {data[i]['phoneNumber']}</td>
                        </tr>
                       </table>
                    <Link to='/blood_camps/register' id="register" >Register Now</Link>
                    {/* <img id="mapimg" src={map} /> */}
                </div>  
            )
        }
    } else {
        for (let i = 0; i < 10; i++) {
            if (searchData == data[i]['userNic']) {
                list.push(
                    <div id="camp-details">
                    <img id="campimg" src={futureCamp} />
                    <h3 id="camp-name">{data[i]['name']}</h3>
                    <br></br>
                    <table id="regD-camp-details-table">
                        <tr>
                            <td>Date </td>
                            <td> : {data[i]['date'].substring(0, 10)}</td>
                            {/* <td><i class="fa-solid fa-calendar-day"></i></td> */}
                        </tr>
                        <tr>
                            <td>Location  </td>
                            <td> : {data[i]['place']}</td>
                        </tr>
                       </table>
                    <Link to='/blood_camps/register' id="register"  >Register Now</Link>
                    {/* <img id="mapimg" src={map} /> */}
                </div>  
                )

            }
        }
    }
    return (
        <div>
            <SlideMenuRegDonor headerName={"Upcoming Camp Details"} passData={passData}/>
            <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} ></div>
            <input type="text" id='input-date' placeholder=" &#xf002;"/> 
            {/* <div id={`${unsuccess ? 'unsucess-message-active' : 'unsucess-message'}`}></div> */}
            {/* {list} */}
            <div id="camp-container1"> 
            <div id={`${unsuccess ? 'unsucess-message-active' : 'unsucess-message'}`}>
                        <br /> <h1 id='sucess-message-name'> <img id='unsuccessImage' src={unsuccessImage} /> <br />Wrong !</h1> <br />
                        <p id='unsucess-message-box'> {unsuccessMessage}</p> <br />
                        <button id="okay-button-unsucess" onClick={() => { setSuccess(unsucessbutton) }}> Okay </button>
                    </div>
               {list}   
            </div>
            {/* <div id="camp-container2">
            <div id="camp-details">
                    <img id="campimg" src={OngoingCamp} />
                    <h3 id="camp-name">Blood Donation Drive</h3>
                    <br></br>
                    <table id="regD-camp-details-table">
                        <tr>
                            <td>Date </td>
                            <td>: August 18, 2022</td>
                            <td><i class="fa-solid fa-calendar-day"></i></td>
                        </tr>
                        <tr>
                            <td>Location  </td>
                            <td>: Kalutara</td>
                        </tr>
                        <tr>
                            <td>Place :</td>
                            <td>: MOH Hall</td>
                        </tr>
                        <tr>
                            <td>Time :</td>
                            <td>: 8.00 a.m. - 3.00 p.m.</td>
                        </tr>
                    </table>
                    <Link to='/blood_camps/register' id="register"  >Register Now</Link>
                    <img id="mapimg" src={map} />
                </div>     
            </div> */}
            {/* <div id="camp-container3">
            <div id="camp-details">
                    <img id="campimg2" src={pastCamp} />
                    <h3 id="camp-name">BE A HERO DONTAE BLOOD</h3>
                    <br></br>
                    <table id="regD-camp-details-table">
                        <tr>
                            <td>Date </td>
                            <td>: August 29, 2022</td>
                            <td><i class="fa-solid fa-calendar-day"></i></td>
                        </tr>
                        <tr>
                            <td>Location  </td>
                            <td>: Rathmalana</td>
                        </tr>
                        <tr>
                            <td>Place :</td>
                            <td>: YMCA</td>
                        </tr>
                        <tr>
                            <td>Time :</td>
                            <td>: 8.00 a.m. - 3.00 p.m.</td>
                        </tr>
                    </table>
                    <Link to='/blood_camps/register' id="register"  >Register Now</Link>
                    <img id="mapimg" src={map} />
                </div>     
            </div> */}
            {/* <div id="camp-container4">
            <div id="camp-details">
                    <img id="campimg" src={PendingCamp} />
                    <h3 id="camp-name">Give Blood and Save a Life</h3>
                    <br></br>
                    <table id="regD-camp-details-table">
                        <tr>
                            <td>Date </td>
                            <td>: September 13, 2022</td>
                            <td><i class="fa-solid fa-calendar-day"></i></td>
                        </tr>
                        <tr>
                            <td>Location  </td>
                            <td>: Horana</td>
                        </tr>
                        <tr>
                            <td>Place :</td>
                            <td>: MOH Hall</td>
                        </tr>
                        <tr>
                            <td>Time :</td>
                            <td>: 8.00 a.m. - 3.00 p.m.</td>
                        </tr>
                    </table>
                    <Link to='/blood_camps/register' id="register"  >Register Now</Link>
                    <img id="mapimg" src={map} />
                </div>     
            </div> */}
             <div id={`${loading ? 'loading-cluterAdmin-active' : 'loading-cluterAdmin'}`}> <img src={loadingImage} /> </div>
            <div id='d-history-records-table-pageButton'>
                <a className='page-navigation'>{"<< "}  </a> 
                <a className='page-navigation'>{" Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next "}</a> 
                <a className='page-navigation'>{">>"}</a> 
            </div>
        </div>
    );
}