import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import '../assests/css/component.doctors.css';
import successImage from '../assests/images/sucess.png';
import lottie from "lottie-web";
// import loading from '../assests/images/loading.gif';

export default function Doctors() {

    const [formReg, setFormReg] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [NIC, setNIC] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [id, setId] = useState(""); 
    const [updateFirstName, setUpdateFirstName] = useState("");
    const [updateLastName, setUpdateLastName] = useState("");
    const [updateNIC, setUpdateNIC] = useState("");
    const [updateAddress, setUpdateAddress] = useState("");
    const [updateEmail, setUpdateEmail] = useState("");
    const [updateMobileNumber, setUpdateMobileNumber] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(true);
    const clusterAdminNic = localStorage.getItem('userNic');
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [updateFormShow, setUpdateFormShow] = useState(false);
    //pagination
    const [firstRow, setFirstRow] = useState(0);
    const [lastRow, setLastRow] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    let loading = require("../assests/images/loading.gif")

    useEffect((() => { getDoctorData() }), [])
    function getDoctorData() {
        lottie.loadAnimation({
            container: document.querySelector("#loading-image"),
          });
        const clusterAdminNic = localStorage.getItem('userNic');
        const clusterAdmin = {
            clusterAdminNic
        }
        console.log("call");
        axios.post("http://localhost:8070/medicalstaff/selectdoctor", clusterAdmin).then(
            (res) => {

                setData(res.data.doctors);
                setLastRow(10);
            }).catch((err) => {
                //sever error
                console.log(err.message);
            })

    }



    const nextPage = () => {
        const numberOfRows = data.length;
        const equalRows = numberOfRows % 10;
        if (numberOfRows != lastRow) {
            setFirstRow(firstRow + 10);
            if (numberOfRows - equalRows > lastRow) {
                setLastRow(lastRow + 10);
            } else {
                setLastRow(lastRow + equalRows);
            }
            setPageNumber(pageNumber + 1);
        }
    }

    const prevPage = () => {
        const numberOfRows = data.length;
        const equalRows = lastRow % 10;
        if (firstRow != 0) {
            setFirstRow(firstRow - 10);
            if (equalRows == 0) {
                setLastRow(lastRow - 10);

            } else {
                setLastRow(lastRow - equalRows);
            }
            setPageNumber(pageNumber - 1);
        }
    }



    console.log(data[1]);

    function addDoctor(e) {
        e.preventDefault()
        const doctor = {
            clusterAdminNic,
            firstName,
            lastName,
            NIC,
            address,
            email,
            mobileNumber,
        }
        
        if (firstName.length == 0) {
            setMessage("Please Enter First Name ");
        } else if (lastName.length == 0) {
            setMessage("Please Enter Last Name ");
        } else if (!(NIC.length == 10 || NIC.length == 12)) {
            console.log(NIC.length);
            setMessage("Please Enter  Valid NIC Number ");
        } else if (address.length == 0) {
            setMessage("Please Enter  Address ");

        } else if (email.length == 0) {
            setMessage("Please Enter  Email ");

        } else if (!(mobileNumber.length == 10)) {
            setMessage("Please Enter  Valid Mobile Number");

        } else {
            setFormReg(false);
            setSuccess(true);
            setFirstName('');
            setLastName('');
            setNIC('');
            setAddress('');
            setMobileNumber('');
            setEmail('');
            e.target.reset();
            // pass check the data with server 
            axios.post("http://localhost:8070/medicalstaff/doctor", doctor).then(
                (res) => {
                    //check password and username  
                    if (res['data']['message'] == "success") {
                        window.location = "/medicalstaff/doctor";

                    } else {
                        setMessage("Network Connection issue");

                    }

                }
            ).catch((err) => {
                //sever error
                console.log(err.message);
            })
        }
    }

    function showUpdateDoctor(id,firstName,lastName,NIC,address,mobileNumber,email) {
        setUpdateFormShow(!updateFormShow);
        setId(id)
        setUpdateFirstName(firstName);
        setUpdateLastName(lastName);
        setUpdateNIC(NIC);
        setUpdateAddress(address);
        setUpdateMobileNumber(mobileNumber);
        setUpdateEmail(email);  
     
    }
    
    function updateDoctor(e){
        e.preventDefault()
        const doctor = {
            id,
            updateFirstName, 
            updateLastName,
            updateNIC,
            updateAddress,
            updateEmail,
            updateMobileNumber 
        }
        if (updateFirstName.length == 0) {
            setMessage("Please Enter First Name ");
        } else if (updateLastName.length == 0) {
            setMessage("Please Enter Last Name ");
        } else if (!(updateNIC.length == 10 || NIC.length == 12)) {
            console.log(updateNIC.length);
            setMessage("Please Enter  Valid NIC Number ");
        } else if (updateAddress.length == 0) {
            setMessage("Please Enter  Address ");

        } else if ( updateEmail.length == 0) {
            setMessage("Please Enter  Email ");

        } else if (!(updateMobileNumber.length == 10)) {
            setMessage("Please Enter  Valid Mobile Number");

        } else {
            setUpdateFormShow(false);
            // setSuccess(true);
            setUpdateFirstName('');
            setUpdateLastName('');
            setUpdateNIC('');
            setUpdateAddress('');
            setUpdateMobileNumber('');
            setUpdateEmail('');
            e.target.reset();
            // pass check the data with server 
            axios.post("http://localhost:8070/medicalstaff/updatedoctor", doctor).then(
                (res) => {
                    //check password and username  
                    if (res['data']['message'] == "success") {
                        window.location = "/medicalstaff/doctor";

                    } else {
                        setMessage("Network Connection issue");

                    }

                }
            ).catch((err) => {
                //sever error
                console.log(err.message);
            })
        }
        
    }

    const list = [];
    //display data in table
    //check the NIC number
    if (searchData == "") {
        for (let i = firstRow; i < lastRow; i++) {
            list.push(
                <> <tr>
                    <td>{data[i]['staffId']}</td>
                    <td>{data[i]['userNic']}</td>
                    <td>Dr {data[i]['firstName'] + " " + data[i]['lastName']}</td>
                    <td>{data[i]['phoneNumber']}</td>
                    <td>{data[i]['email']}</td>
                    <td>
                        <button id='view-button-doctor-view' onClick={() => {showUpdateDoctor(data[i]['staffId'],data[i]['firstName'],data[i]['lastName'],data[i]['userNic'],data[i]['address'],data[i]['phoneNumber'],data[i]['email'] )}}>View</button>
                        <button id='view-button-doctor-remove'>Remove</button>
                    </td>
                </tr>
                </>)
        }
    } else {
        for (let i = 0; i < 10; i++) {
            if (searchData == data[i]['userNic']) {
                list.push(
                    <> <tr>
                        <td>{data[i]['staffId']}</td>
                        <td>{data[i]['userNic']}</td>
                        <td>Dr {data[i]['firstName'] + " " + data[i]['lastName']}</td>
                        <td>{data[i]['phoneNumber']}</td>
                        <td>{data[i]['email']}</td>
                        <td>
                        <button id='view-button-doctor-view' onClick={() => {showUpdateDoctor(data[i]['staffId'],data[i]['firstName'],data[i]['lastName'],data[i]['userNic'],data[i]['address'],data[i]['phoneNumber'],data[i]['email'] )}}>View</button>   
                            <button id='view-button-doctor-remove'>Remove</button>
                        </td>
                    </tr>
                    </>)

            }
        }

    }
 



    return (
        <div>
           <div id='doctor-contanier'>
            <div id='loading-cluterAdmin'>  </div>
                <div id={`${success ? 'sucess-message-active' : 'sucess-message'}`}>
                     <h3 id='sucess-message-name'> Doctor Added Sucessfully <i class="fa-solid fa-xmark close-button-success" onClick={() => { setSuccess(!success) }}></i></h3>
                </div>
                <div id={`${formReg ? 'fade-clusterAdmin' : null}`} onClick={() => { setFormReg(!formReg) }}></div>
                <h3 id='header-clusterAdmin'>Doctors Details</h3>
                <div id='loading-cluterAdmin'>name<img src={loading}/> </div>
                <input type="text" id='input-doctor' placeholder=" &#xf002; Enter NIC Number" onChange={(e) => { setSearchData(e.target.value) }} />
                <button id='add-doctor' onClick={() => { setFormReg(!formReg) }}>+ Add New</button>
                <br /><br />
                <table id="doctor-table">
                <div id='loading-clusterAdmin'>name<img src={loading}/> </div>

                    <tr>
                        <th id='doctor-number'>Id</th>
                        <th>NIC Number</th>
                        <th>Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th id='doctor-action'>Action</th>
                     <div id='loading'><img src={loading}/> </div>

                    </tr>
                     <img id='loading' src={loading}/>  
                    {list}
                 </table>
                <div id='doctor-pageButton'>
                    <a className='page-navigation' href='#' onClick={prevPage}>{"<< Prev"}  </a>
                    <a className='page-navigation'>{pageNumber}</a>
                    <a className='page-navigation' href='#' onClick={nextPage}>{"Next >>"}</a>
                </div>
                {/* insert doctor */}
                <div id={`${formReg ? 'register-form-doctor-clusteradmin-active' : 'register-form-doctor-clusteradmin'}`}>
                    <h3 id='register-form-doctor-name-clusteradmin'>Add New Doctor </h3>
                    <form id='register-form-doctor-form-clusteradmin' onSubmit={addDoctor}>
                        {message ? <p id="message-form-clusteradmin">{message}   <i class="fa-solid fa-xmark close-button-form" onClick={() => { setMessage("") }}></i></p> : null}

                        <table id='medical-staff-view-table'>
                            <tr>
                                <td>First Name</td>
                                <td>   <input type="text" id="register-form-doctor-input-clusteradmin" placeholder="Enter First name" onChange={(e) => { setFirstName(e.target.value) }} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>   <input type="text" id="register-form-doctor-input-clusteradmin" placeholder="Enter Last name" onChange={(e) => { setLastName(e.target.value) }} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>NIC Number</td>
                                <td>   <input type="text" id="register-form-doctor-input-clusteradmin" placeholder="Enter NIC Number" onChange={(e) => { setNIC(e.target.value) }} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>   <input type="text" id="register-form-doctor-input-clusteradmin" placeholder="Enter Address" onChange={(e) => { setAddress(e.target.value) }} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>   <input type="text" id="register-form-doctor-input-clusteradmin" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Mobile Number</td>
                                <td>   <input type="text" id="register-form-doctor-input-clusteradmin" placeholder="Enter Mobile Number" onChange={(e) => { setMobileNumber(e.target.value) }} /> <br />
                                </td>
                            </tr>



                        </table> <br />
                        <button type="sumbit" id="sumbit-save-form" > Register </button> {" "}
                        <button id="sumbit-cancle-form" onClick={() => { setFormReg(!formReg) }}  > Cancel </button> <br /><br />

                    </form>
                </div>

                {/* Update Doctor */}
                <div id={`${updateFormShow ? 'register-form-doctor-clusteradmin-active' : 'register-form-doctor-clusteradmin'}`}>


                    <h3 id='register-form-doctor-name-clusteradmin'>Update Doctor </h3>
                    <form id='register-form-doctor-form-clusteradmin' onSubmit={updateDoctor}>
                        {message ? <p id="message-form-clusteradmin">{message}   <i class="fa-solid fa-xmark close-button-form" onClick={() => { setMessage("") }}></i></p> : null}

                        <table id='medical-staff-view-table'>
                            <tr>
                                <td>First Name</td>
                                <td>   <input type="text" id="update-form-doctor-input-clusteradmin" placeholder={updateFirstName} value={updateFirstName} onChange={(e) => { setUpdateFirstName(e.target.value) }} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>   <input type="text" id="update-form-doctor-input-clusteradmin" placeholder={updateLastName}  value={updateLastName} onChange={(e) => { setUpdateLastName(e.target.value) }} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>NIC Number</td>
                                <td>   <input type="text" id="update-form-doctor-input-clusteradmin" placeholder={updateNIC} value={updateNIC} onChange={(e) => { setUpdateNIC(e.target.value) }} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>   <input type="text" id="update-form-doctor-input-clusteradmin" placeholder={updateAddress} value={updateAddress} onChange={(e) => { setUpdateAddress(e.target.value) }} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>   <input type="text" id="update-form-doctor-input-clusteradmin" placeholder={updateEmail} value={updateEmail}  onChange={(e) => { setUpdateEmail(e.target.value) }} /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Mobile Number</td>
                                <td>   <input type="text" id="update-form-doctor-input-clusteradmin" placeholder={updateMobileNumber} value={updateMobileNumber} onChange={(e) => { setUpdateMobileNumber(e.target.value) }} /> <br />
                                </td>
                            </tr>



                        </table> <br />
                        <button type="sumbit" id="sumbit-save-form" > Register </button> {" "}
                        <button id="sumbit-cancle-form" onClick={() => { setUpdateFormShow(!updateFormShow) }}  > Cancel </button> <br /><br />

                    </form>
                </div>
            </div>
        </div>
    )
}

