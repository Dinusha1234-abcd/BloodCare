import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import '../../assests/css/component.doctors.css';
import successImage from '../../assests/images/sucess.png';
import unsuccessImage from '../../assests/images/wrong.png';
import loadingImage from '../../assests/images/loading.gif';
import waitImage from '../../assests/images/wait.gif';
import alert from '../../assests/images/alert.png';
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
    const [unsuccess, setUnSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const clusterAdminNic = localStorage.getItem('userNic');
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [updateFormShow, setUpdateFormShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [wait, setWait] = useState(false);
    const [removeAlert, setRemoveAlert] = useState(false);
    const [doctorName, setDoctorName] = useState("");
    const [doctorNic, setDoctorNic] = useState("");
    //pagination
    const [firstRow, setFirstRow] = useState(0);
    const [lastRow, setLastRow] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);


    useEffect((() => { getDoctorData() }), [])
    function getDoctorData() {
        const clusterAdminNic = localStorage.getItem('userNic');
        const clusterAdmin = {
            clusterAdminNic
        }

        axios.post("http://localhost:8070/medicalstaff/selectdoctor", clusterAdmin).then(
            (res) => {

                setData(res.data.doctors);
                setLastRow(10);
                setLoading(!loading);
            }).catch((err) => {
                //sever 
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true)
            })

    }

    const nextPage = () => {
        const numberOfRows = data.length;
        const equalRows = numberOfRows % 10;
        if (data.length > 10) {
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
    };

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



   
    function addDoctor(e) {
        let dayData;
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
        //check NIC number length
        if (NIC.length == 10) {
             dayData = NIC.substr(2, 3)
            if (dayData > 500) {
                dayData = dayData - 500;
            }
        }
        if (NIC.length == 12) {
              dayData = NIC.substr(4, 3)
            if (dayData > 500) {
                dayData = dayData - 500;
            }
        }
         
        if (firstName.length == 0) {
            setMessage("Please Enter First Name ");
        } else if (lastName.length == 0) {
            setMessage("Please Enter Last Name ");
        } else if (!(NIC.length == 10 || NIC.length == 12) && (dayData  < 1 && dayData > 366)) {
            
            setMessage("Please Enter  Valid NIC Number ");
        } else if (address.length == 0) {
            setMessage("Please Enter  Address ");

        } else if (email.length == 0) {
            setMessage("Please Enter  Email ");

        } else if (!(mobileNumber.length == 10)) {
            setMessage("Please Enter  Valid Mobile Number");

        } else {
            setFormReg(false);
            setWait(true);
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
                        setWait(false);
                        setSuccessMessage("Doctor Added Sucessfully")
                        setSuccess(true);


                    } else {
                        setWait(false);
                        setUnsuccessMessage("Enter Id Number already Registered");
                        setUnSuccess(true);
                    }

                }
            ).catch((err) => {
                //sever error

                setWait(false);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true)
            })
        }
    }
    function sucessbutton() {
        window.location = "/medicalstaff/doctor";
    }
    function unsucessbutton() {
        window.location = "/medicalstaff/doctor";
    }
    function showUpdateDoctor(id, firstName, lastName, NIC, address, mobileNumber, email) {
        setUpdateFormShow(!updateFormShow);
        setId(id)
        setUpdateFirstName(firstName);
        setUpdateLastName(lastName);
        setUpdateNIC(NIC);
        setUpdateAddress(address);
        setUpdateMobileNumber(mobileNumber);
        setUpdateEmail(email);

    }

    function updateDoctor(e) {
        let dayData;
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
           //check NIC number length
           if (updateNIC.length == 10) {
            dayData = parseInt(updateNIC.substr(2, 3))
           if ( dayData > 500) {
               dayData = dayData - 500;
           }
       }
       if (updateNIC.length == 12) {
             dayData =  parseInt(updateNIC.substr(4, 3))
           if (dayData > 500) {
               dayData = dayData - 500;
           }
       }
        console.log(dayData);
        if (updateFirstName.length == 0) {
            setMessage("Please Enter First Name ");
        } else if (updateLastName.length == 0) {
            setMessage("Please Enter Last Name ");
        } else if (!(updateNIC.length == 10 || updateNIC.length == 12) || !(dayData   > 1 && dayData   <   366)) {
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
                        setSuccessMessage("Doctor Update Sucessfully")
                        setSuccess(true);

                    } else {
                        setWait(false);
                        setUnsuccessMessage("Doctor Update UnSucessfully");
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
    function showRemoveMessage(doctorName, doctorNIC) {

        setDoctorName(doctorName);
        setDoctorNic(doctorNIC);
        setRemoveAlert(true);
    }
    function removeDoctor() {
        setRemoveAlert(false);
        setWait(true);
        const doctor = { doctorNic };
        axios.post("http://localhost:8070/medicalstaff/removedoctor", doctor).then(
            (res) => {
                //check password and username  
                if (res['data']['message'] == "success") {
                    setWait(false);
                    setSuccessMessage("Doctor Update Sucessfully")
                    setSuccess(true);

                } else {
                    setWait(false);
                    setUnsuccessMessage("Doctor Update UnSucessfully");
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
    //display data in table
    //check the NIC number
    if (searchData == "") {
        for (let i = firstRow; i < data.length; i++) {
            list.push(
                <> <tr>
                    <td>{data[i]['staffId']}</td>
                    <td>{data[i]['userNic']}</td>
                    <td>Dr {data[i]['firstName'] + " " + data[i]['lastName']}</td>
                    <td>{data[i]['phoneNumber']}</td>
                    <td>{data[i]['email']}</td>
                    <td>
                        <button id='view-button-doctor-view' onClick={() => { showUpdateDoctor(data[i]['staffId'], data[i]['firstName'], data[i]['lastName'], data[i]['userNic'], data[i]['address'], data[i]['phoneNumber'], data[i]['email']) }}>View</button>
                        <button id='view-button-doctor-remove' onClick={() => { showRemoveMessage(data[i]['firstName'] + data[i]['lastName'], data[i]['userNic']) }}>Remove</button>
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
                            <button id='view-button-doctor-view' onClick={() => { showUpdateDoctor(data[i]['staffId'], data[i]['firstName'], data[i]['lastName'], data[i]['userNic'], data[i]['address'], data[i]['phoneNumber'], data[i]['email']) }}>View</button>
                            <button id='view-button-doctor-remove' onClick={() => { showRemoveMessage(data[i]['firstName'] + data[i]['lastName'], data[i]['userNic']) }}>Remove</button>
                        </td>
                    </tr>
                    </>)

            }
        }

    }




    return (
        <div>

            <div id='doctor-contanier'>
                {/* Success message/ */}
                <div id={`${success ? 'sucess-message-active' : 'sucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='successImage' src={successImage} /> <br /> Success !</h1>  <br />
                    <p id='sucess-message-box'>{successMessage}</p> <br></br>
                    <button id="okay-button" onClick={() => { setSuccess(sucessbutton) }}> Okay </button>
                </div>
                {/* remove alert */}
                <div id={`${removeAlert ? 'remove-alert-clusteradmin-active' : 'sucess-message'}`}>
                    <br /> <h1 id='remove-alert-clusteradmin-name'> <img id='alert' src={alert} /> <br />Are you removing Dr {doctorName}</h1>
                    <button id="remove-button" onClick={() => { removeDoctor() }}> Okay </button>
                    <button id="remove-button" onClick={() => { setRemoveAlert(false) }}> Cancel </button>
                </div>
                <div id={`${wait ? 'wait-cluterAdmin-active' : 'wait-cluterAdmin'}`}> <img id='wait-cluterAdmin-image' src={waitImage} /> </div>

                <div id={`${unsuccess ? 'unsucess-message-active' : 'unsucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='unsuccessImage' src={unsuccessImage} /> <br /> Wrong !</h1>  <br />
                    <p id='unsucess-message-box'> {unsuccessMessage}</p> <br />
                    <button id="okay-button-unsucess" onClick={() => { setSuccess(unsucessbutton) }}> Okay </button>
                </div>
                <div id={`${formReg || success || unsuccess || updateFormShow || wait || removeAlert ? 'fade-clusterAdmin' : null}`} onClick={() => { setFormReg(false); setUpdateFormShow(false) }}></div>
                <h3 id='header-clusterAdmin'>Doctors Details</h3>
                <input type="text" id='input-doctor' placeholder=" &#xf002; Enter NIC Number" onChange={(e) => { setSearchData(e.target.value) }} />
                <button id='add-doctor' onClick={() => { setFormReg(!formReg) }}>+ Add New</button>
                <br /><br />
                <table id="doctor-table">
                    <tr>
                        <th id='doctor-number'>Id</th>
                        <th>NIC Number</th>
                        <th>Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th id='doctor-action'>Action</th>

                    </tr>

                    {list}


                </table>
                <div id={`${loading ? 'loading-cluterAdmin-active' : 'loading-cluterAdmin'}`}> <img src={loadingImage} /> </div>
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
        </div>
    )
}

