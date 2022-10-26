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
    const [fomreg,setFormReg] = useState(true);
    const [tab, setTab] = useState(false);
   const [name, setName] = useState(""); 
   const [nic, setNic] = useState("");
   const [gender, setGender] = useState("");    
   const [age, setAge] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [address, setAddress] = useState("");
   const [province, setProvince] = useState("");
   const [city, setCity] = useState("");
   
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

    function updateDetails(name,nic,gender,year,email,phoneNumber,province,city,address){
        console.log("call");
        setTab(true)
        setName(name);
        setNic(nic);
        if(gender=='f'){
            setGender('Female');
        }else{
            setGender('Male');

        }
 
        setAge(2022-year);
        setEmail(email);
        setPhoneNumber(phoneNumber);
        setProvince(province);
        setCity(city);
        setAddress(address)
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
                    <td>{data[i]['bloodRHTYPE']}</td>
                    {/* <td>{data[i]['LastDonationDate'].substring(0, 10)}</td>  */}
                    <td>
                        <button id='view-button-doctor-view'  onClick={() => { updateDetails(data[i]['firstName']+" "+data[i]['lastName'],data[i]['userNic'],data[i]['gender'],data[i]['dateOfBirth'].substr(0,4), data[i]['email'], data[i]['phoneNumber'],data[i]['province'],data[i]['district'],data[i]['address'])}}>View</button>
                      
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
                        <td>{data[i]['bloodRHTYPE']}</td>
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
                <div id={`${ tab ? 'fade-clusterAdmin' : null}`}  onClick={() => { setTab(false)  }}>   </div>

                    <h3 id="header-clusterAdmin">Donors Details</h3>
                    <input type="text" id='input-donors' placeholder=" &#xf002; Enter NIC Number" onChange={(e) => { setSearchData(e.target.value) }}/>

                    <br /><br />
                    <table id="donors-table">
                        <tr>
                            <th id='donors-number'>Id</th>
                            <th>NIC Number</th>
                            <th>Name</th>
                            <th>Blood Type</th>
                            <th>RH Type</th>
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
            <div id={`${tab ? 'register-form-doctor-clusteradmin-active' : 'register-form-doctor-clusteradmin'}`}>
                <div id="register-form-doctor-form-clusteradmin">
                <h3 id='register-form-donor-name-clusteradmin'>Donor Details</h3>

                <table id="medical-staff-view-table">
                    <tr> 
                        <td><b>Name {"    "}</b></td>
                        
                        <td>{name} </td>
                        
                        </tr>
                      <tr></tr>
                        <tr> 
                        <td><b>NIC</b></td>
                        <td>{nic} </td>
                        </tr>
                      <tr></tr>

                        <tr> 
                        <td><b>Gender</b></td>
                        <td>{gender  }</td>
                       </tr> 
                      <tr></tr>

                       <tr> 
                        <td><b>Age</b></td>
                        <td>{age}</td>
                        </tr>
                      <tr></tr>

                        <tr> 
                        <td><b>Email</b></td>
                        <td>{email}</td>
                        </tr>
                      <tr></tr>

                        <tr> 
                        <td><b>Phone Number {"  "}</b></td>
                        <td>{phoneNumber}</td>
                        </tr>
                      <tr></tr>

                        <tr> 
                        <td><b>Province</b></td>
                        <td>{province}</td>
                        </tr>
                      <tr></tr>

                        <tr> 
                        <td><b>City</b></td>
                        <td>{city}</td>
                        </tr>
                      <tr></tr>

                        <tr> 
                        <td><b>Address</b></td>
                        <td>{address}</td>
                        </tr>
                        
                    </table>
              
            </div>
            </div>
                
        </div>
    )

} 