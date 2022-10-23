import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assests/css/component.drivers.css';
import successImage from '../../assests/images/sucess.png';
import unsuccessImage from '../../assests/images/wrong.png';
import loadingImage from '../../assests/images/loading.gif';
import waitImage from '../../assests/images/wait.gif';
import alert from '../../assests/images/alert.png';

export default function Drivers() {
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
    const [successMessage, setSuccessMessage] = useState("");
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);
    const [show, setShow] = useState(true);
    const [updateFormShow, setUpdateFormShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [wait, setWait] = useState(false);
    const [removeAlert, setRemoveAlert] = useState(true);
    const [driverName, setDriverName] = useState("");
    const [driverNic, setDriverNic] = useState("");

    useEffect((() => { getDriverData() }), [])
    function getDriverData() {

        const clusterAdminNic = localStorage.getItem('userNic');
        const clusterAdmin = {
            clusterAdminNic
        }

        axios.post("http://localhost:8070/medicalstaff/selectdriver", clusterAdmin).then(
            (res) => {

                setData(res.data.drivers);
                console.log(res.data);
                setLoading(!loading);
            }).catch((err) => {
                //sever error
                console.log(err.message);
                setWait(false);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true);
            })

    }


    function addDriver(e) {
        e.preventDefault()
        const clusterAdminNic = localStorage.getItem('userNic');
        const driver = {
            clusterAdminNic,
            firstName,
            lastName,
            NIC,
            address,
            email,
            mobileNumber
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
            setLoading();
            setWait(true);
            setFirstName('');
            setLastName('');
            setNIC('');
            setAddress('');
            setMobileNumber('');
            setEmail('');
            e.target.reset();
            // pass check the data with server 
            console.log("call");
            axios.post("http://localhost:8070/medicalstaff/driver", driver).then(
                (res) => {
                    //check password and username  
                    if (res['data']['message'] == "success") {
                        setWait(false)
                        setSuccessMessage("Driver Added Sucessfully")
                        setSuccess(true);

                    } else {
                        setMessage("Network Connection issue");
                        setUnSuccess(true)

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
    }
    function updateDriver(e) {
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

        } else if (updateEmail.length == 0) {
            setMessage("Please Enter  Email ");

        } else if (!(updateMobileNumber.length == 10)) {
            setMessage("Please Enter  Valid Mobile Number");

        } else {
            setUpdateFormShow(false);
            setWait(true);
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
                        setWait(false);
                        setSuccessMessage("Driver Update Sucessfully")
                        setSuccess(true);

                    } else {
                        setWait(false);
                        setUnsuccessMessage("Driver Update UnSucessfully");
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

    }

    function sucessbutton() {
        window.location = "/medicalstaff/driver";
    }
    function unsucessbutton() {
        window.location = "/medicalstaff/driver";
    }
    function showUpdateDriver(id, firstName, lastName, NIC, address, mobileNumber, email) {
        setUpdateFormShow(!updateFormShow);
        setId(id)
        setUpdateFirstName(firstName);
        setUpdateLastName(lastName);
        setUpdateNIC(NIC);
        setUpdateAddress(address);
        setUpdateMobileNumber(mobileNumber);
        setUpdateEmail(email);

    }
    function showRemoveMessage(driverName, driverNIC) {

        setDriverName(driverName);
        setDriverNic(driverNIC);
        setRemoveAlert(true);
    }
    function removeDriver() {
        setRemoveAlert(false);
        setWait(true);
        const driver = { driverNic };
        axios.post("http://localhost:8070/medicalstaff/removenurse", driver).then(
            (res) => {
                //check password and username  
                if (res['data']['message'] == "success") {
                    setWait(false);
                    setSuccessMessage("Nurse Remove Sucessfully")
                    setSuccess(true);

                } else {
                    setWait(false);
                    setUnsuccessMessage("Nurse Remove UnSucessfully");
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
    if (searchData == "") {
        for (let i = 0; i < data.length; i++) {
            list.push(
                <> <tr>
                    <td>{data[i]['staffId']}</td>
                    <td>{data[i]['userNic']}</td>
                    <td> {data[i]['firstName'] + " " + data[i]['lastName']}</td>
                    <td>{data[i]['phoneNumber']}</td>
                    <td>{data[i]['email']}</td>
                    <td>
                        <button id='view-button-doctor-view' onClick={() => { showUpdateDriver(data[i]['staffId'], data[i]['firstName'], data[i]['lastName'], data[i]['userNic'], data[i]['address'], data[i]['phoneNumber'], data[i]['email']) }}>View</button>
                        <button id='view-button-doctor-remove' onClick={() => { showRemoveMessage(data[i]['firstName'] +' '+ data[i]['lastName'], data[i]['userNic']) }}>Remove</button>

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
                        <td> {data[i]['firstName'] + " " + data[i]['lastName']}</td>
                        <td>{data[i]['phoneNumber']}</td>
                        <td>{data[i]['email']}</td>
                        <td>
                            <button id='view-button-doctor-view' onClick={() => { showUpdateDriver(data[i]['staffId'], data[i]['firstName'], data[i]['lastName'], data[i]['userNic'], data[i]['address'], data[i]['phoneNumber'], data[i]['email']) }}  >View</button>
                            <button id='view-button-doctor-remove' onClick={() => { showRemoveMessage(data[i]['firstName'] + ' '+data[i]['lastName'], data[i]['userNic']) }}>Remove</button>

                        </td>
                    </tr>
                    </>)

            }
        }
    }


    return (
        <div>
            <div id='driver-contanier'>
                {/* Success message/ */}
                <div id={`${success ? 'sucess-message-active' : 'sucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='successImage' src={successImage} /> <br /> Success !</h1>  <br />
                    <p id='sucess-message-box'>{successMessage}</p> <br></br>
                    <button id="okay-button" onClick={() => { setSuccess(sucessbutton) }}> Okay </button>
                </div>
                {/* remove alert */}
                <div id={`${removeAlert ? 'remove-alert-clusteradmin-active' : 'sucess-message'}`}>
                    <br /> <h1 id='remove-alert-clusteradmin-name'> <img id='alert' src={alert} /> <br />Are you removing  {driverName}</h1>
                    <button id="remove-button" onClick={() => { removeDriver() }}> Okay </button>
                    <button id="remove-button" onClick={() => { setRemoveAlert(false) }}> Cancel </button>
                </div>
                <div id={`${wait ? 'wait-cluterAdmin-active' : 'wait-cluterAdmin'}`}> <img id='wait-cluterAdmin-image' src={waitImage} /> </div>

                <div id={`${unsuccess ? 'unsucess-message-active' : 'unsucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='unsuccessImage' src={unsuccessImage} /> <br /> Wrong !</h1>  <br />
                    <p id='unsucess-message-box'> {unsuccessMessage}</p> <br />
                    <button id="okay-button-unsucess" onClick={() => { setSuccess(unsucessbutton) }}> Okay </button>
                </div>
                <div id={`${formReg || success || unsuccess || updateFormShow || wait  ? 'fade-clusterAdmin' : null}`} onClick={() => { setFormReg(false); setUpdateFormShow(false) }}></div>

                <h3 id='header-clusterAdmin'>Drivers Details</h3>
                <input type="text" id='input-driver' placeholder=" &#xf002; Enter NIC Number" />
                <button id='add-driver' onClick={() => { setFormReg(!formReg) }}>+ Add New</button>
                <br /><br />
                <table id="driver-table">
                    <tr>
                        <th id='driver-number'>Id</th>
                        <th>NIC Number</th>
                        <th>Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th id='driver-action'>Action</th>

                    </tr>
                    {list}
                </table>
                <div id={`${loading ? 'loading-cluterAdmin-active' : 'loading-cluterAdmin'}`}> <img src={loadingImage} /> </div>

                <div id='driver-pageButton'>
                    <a className='page-navigation'>{"<< Prev"}  </a>
                    <a className='page-navigation'>1</a>
                    <a className='page-navigation'>{"Next >>"}</a>
                </div>
            </div>
            <div id={`${formReg ? 'register-form-doctor-clusteradmin-active' : 'register-form-doctor-clusteradmin'}`}>


                <h3 id='register-form-doctor-name-clusteradmin'>Add New Driver </h3>
                <form id='register-form-doctor-form-clusteradmin' onSubmit={addDriver} >
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
                <form id='register-form-doctor-form-clusteradmin' onSubmit={updateDriver}>
                    {message ? <p id="message-form-clusteradmin">{message}   <i class="fa-solid fa-xmark close-button-form" onClick={() => { setMessage("") }}></i></p> : null}

                    <table id='medical-staff-view-table'>
                        <tr>
                            <td>First Name</td>
                            <td>   <input type="text" id="update-form-doctor-input-clusteradmin" placeholder={updateFirstName} value={updateFirstName} onChange={(e) => { setUpdateFirstName(e.target.value) }} /> <br />
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>   <input type="text" id="update-form-doctor-input-clusteradmin" placeholder={updateLastName} value={updateLastName} onChange={(e) => { setUpdateLastName(e.target.value) }} /> <br />
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
                            <td>   <input type="text" id="update-form-doctor-input-clusteradmin" placeholder={updateEmail} value={updateEmail} onChange={(e) => { setUpdateEmail(e.target.value) }} /> <br />
                            </td>
                        </tr>
                        <tr>
                            <td>Mobile Number</td>
                            <td>   <input type="text" id="update-form-doctor-input-clusteradmin" placeholder={updateMobileNumber} value={updateMobileNumber} onChange={(e) => { setUpdateMobileNumber(e.target.value) }} /> <br />
                            </td>
                        </tr>



                    </table> <br />
                    <button type="sumbit" id="sumbit-save-form" > Update </button> {" "}
                    <button id="sumbit-cancle-form" onClick={() => { setUpdateFormShow(!updateFormShow) }}  > Cancel </button> <br /><br />

                </form>
            </div>
        </div>
    )
}