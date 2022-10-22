import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assests/css/component.nurse.css';
import successImage from '../../assests/images/sucess.png';
import unsuccessImage from '../../assests/images/wrong.png';
import loadingImage from '../../assests/images/loading.gif';
import waitImage from '../../assests/images/wait.gif';
import alert from '../../assests/images/alert.png';

export default function Nurse() {
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
    const [successMessage, setSuccessMessage] = useState("");
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [unsuccess, setUnSuccess] = useState(false);
    const [show, setShow] = useState(true);  
    const [loading, setLoading] = useState(true);
    const [wait, setWait] = useState(false);
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [updateFormShow, setUpdateFormShow] = useState(false);
    const [removeAlert, setRemoveAlert] = useState(false);
    const [nurseName, setNurseName] = useState("");
    const [nurseNic, setNurseNic] = useState("");
    //pagination
    const [firstRow, setFirstRow] = useState(0);
    const [lastRow, setLastRow] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect((() => { getDriverData() }), [])
    function getDriverData() {

        const clusterAdminNic = localStorage.getItem('userNic');
        const clusterAdmin = {
            clusterAdminNic
        }

        axios.post("http://localhost:8070/medicalstaff/selectnurse", clusterAdmin).then(
            (res) => {

                setData(res.data.nurses);
                setLastRow(10);
                setLoading(!loading);
            }).catch((err) => {
                //sever error
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true)
            })

    }

    function addNurse(e) {
        e.preventDefault()
        const clusterAdminNic = localStorage.getItem('userNic');
        const nurse = {
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
            setSuccess(true);
            setFirstName('');
            setLastName('');
            setNIC('');
            setAddress('');
            setMobileNumber('');
            setEmail('');
            e.target.reset();
            // pass check the data with server 
            console.log("call");
            axios.post("http://localhost:8070/medicalstaff/nurse", nurse).then(
                (res) => {
                    //check password and username  
                    if (res['data']['message'] == "success") {
                        window.location = "/medicalstaff/nurse";

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
    function sucessbutton() {
        window.location = "/medicalstaff/nurse";
    }
    function unsucessbutton() {
        window.location = "/medicalstaff/nurse";
    }

    function showUpdateNurse(id, firstName, lastName, NIC, address, mobileNumber, email) {
        setUpdateFormShow(!updateFormShow);
        setId(id)
        setUpdateFirstName(firstName);
        setUpdateLastName(lastName);
        setUpdateNIC(NIC);
        setUpdateAddress(address);
        setUpdateMobileNumber(mobileNumber);
        setUpdateEmail(email);

    }
    function updateNurse(e) {
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
            axios.post("http://localhost:8070/medicalstaff/updateNurse", doctor).then(
                (res) => {
                    //check password and username  
                    if (res['data']['message'] == "success") {
                        setWait(false);
                        setSuccessMessage("Nurse Update Sucessfully")
                        setSuccess(true);
                      

                    } else {
                        setWait(false);
                        setUnsuccessMessage("Doctor Update UnSucessfully");
                        setUnSuccess(true);

                    }

                }
            ).catch((err) => {
                //sever error
                setWait(false);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true);
            })
        }

    }
    function showRemoveMessage(nurseName, nurseNIC) {

        setNurseName(nurseName);
        setNurseNic(nurseNIC);
        setRemoveAlert(true);
    }
    function removeNurse() {
        setRemoveAlert(false);
        setWait(true);
        const nurse = { nurseNic };
        axios.post("http://localhost:8070/medicalstaff/removenurse", nurse).then(
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
    const nextPage = () => {
        const numberOfRows = data.length;
        const equalRows = numberOfRows % 10;
        if (numberOfRows != lastRow) {
            setFirstRow(firstRow + 10);
            if(numberOfRows>10){ 
            if (numberOfRows - equalRows > lastRow) {
                setLastRow(lastRow + 10);
                setPageNumber(pageNumber + 1);
            } else {
                setLastRow(lastRow + equalRows);
                setPageNumber(pageNumber + 1);
            }
        }
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
                    <button id='view-button-doctor-view' onClick={() => {showUpdateNurse(data[i]['staffId'],data[i]['firstName'],data[i]['lastName'],data[i]['userNic'],data[i]['address'],data[i]['phoneNumber'],data[i]['email'] )}}>View</button>

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
                        <td> {data[i]['firstName'] + " " + data[i]['lastName']}</td>
                        <td>{data[i]['phoneNumber']}</td>
                        <td>{data[i]['email']}</td>
                        <td>
                            <button id='view-button-doctor-view'  >View</button>
                            <button id='view-button-doctor-remove'>Remove</button>
                        </td>
                    </tr>
                    </>)

            }
        }
    }

    return (
        <div>
            <div id='nurse-contanier'>
                 {/* Success message/ */}
                 <div id={`${success ? 'sucess-message-active' : 'sucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='successImage' src={successImage} /> <br /> Success !</h1>  <br />
                    <p id='sucess-message-box'>{successMessage}</p> <br></br>
                    <button id="okay-button" onClick={() => { setSuccess(sucessbutton) }}> Okay </button>
                </div>
                {/* remove alert */}
                <div id={`${removeAlert ? 'remove-alert-clusteradmin-active' : 'sucess-message'}`}>
                    <br /> <h1 id='remove-alert-clusteradmin-name'> <img id='alert' src={alert} /> <br />Are you removing Dr {nurseName}</h1>
                    <button id="remove-button" onClick={() => { removeNurse() }}> Okay </button>
                    <button id="remove-button" onClick={() => { setRemoveAlert(false) }}> Cancel </button>
                </div>
                <div id={`${wait ? 'wait-cluterAdmin-active' : 'wait-cluterAdmin'}`}> <img id='wait-cluterAdmin-image' src={waitImage} /> </div>

                <div id={`${unsuccess ? 'unsucess-message-active' : 'unsucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='unsuccessImage' src={unsuccessImage} /> <br /> Wrong !</h1>  <br />
                    <p id='unsucess-message-box'> {unsuccessMessage}</p> <br />
                    <button id="okay-button-unsucess" onClick={() => { setSuccess(unsucessbutton) }}> Okay </button>
                </div>
                <div id={`${formReg || success || unsuccess || updateFormShow || wait || removeAlert ? 'fade-clusterAdmin' : null}`} onClick={() => { setFormReg(false); setUpdateFormShow(false) }}></div>
               <div id={`${formReg ? 'fade-clusterAdmin' : null}`} onClick={() => { setFormReg(!formReg) }}></div>
                <h3 id='header-clusterAdmin'>Nurse Details</h3>
                <input type="text" id='input-nurse' placeholder=" &#xf002; Enter NIC Number" />
                <button id='add-nurse' onClick={() => { setFormReg(!formReg) }}>+ Add New</button>
                <br /><br />
                <table id="nurse-table">
                    <tr>
                        <th id='nurse-number'>Id</th>
                        <th>NIC Number</th>
                        <th>Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th id='nurse-action'>Action</th>

                    </tr>
                    {list}
                </table>
                <div id={`${loading ? 'loading-cluterAdmin-active' : 'loading-cluterAdmin'}`}> <img src={loadingImage} /> </div>
                <div id='nurse-pageButton'>
                <a className='page-navigation' href='#' onClick={prevPage}>{"<< Prev"}  </a>
                    <a className='page-navigation'>{pageNumber}</a>
                    <a className='page-navigation' href='#' onClick={nextPage}>{"Next >>"}</a>
                </div>
            </div>
            <div id={`${formReg ? 'register-form-doctor-clusteradmin-active' : 'register-form-doctor-clusteradmin'}`}>


                <h3 id='register-form-doctor-name-clusteradmin'>Add New Nurse </h3>
                <form id='register-form-doctor-form-clusteradmin' onSubmit={addNurse} >
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
                <form id='register-form-doctor-form-clusteradmin' onSubmit={updateNurse}>
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