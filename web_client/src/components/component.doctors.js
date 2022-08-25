import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import '../assests/css/component.doctors.css';
import successImage from '../assests/images/sucess.png';
import DoctorShowRow from './component.doctorShowRow';

export default function Doctors() {
    const [formReg, setFormReg] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [NIC, setNIC] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [occupation, setOccupation] = useState("")
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(true);
    const clusterAdminNic = localStorage.getItem('userNic');
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");


    useEffect((() => { getDoctorData() }), [])
    function getDoctorData() {

        const clusterAdminNic = localStorage.getItem('userNic');
        const clusterAdmin = {
            clusterAdminNic
        }
        console.log("call");
        axios.post("http://localhost:8070/medicalstaff/selectdoctor", clusterAdmin).then(
            (res) => {

                setData(res.data.doctors);

            }).catch((err) => {
                //sever error
                console.log(err.message);
            })

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
            occupation
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

    const list = [];
    if(searchData==""){ 
    for (let i = 0; i < data.length; i++) {
        list.push(
        <> <tr>
            <td>{data[i]['staffId']}</td>
            <td>{data[i]['userNic']}</td>
            <td>Dr {data[i]['firstName'] + " " + data[i]['lastName']}</td>
            <td>{data[i]['phoneNumber']}</td>
            <td>{data[i]['email']}</td>
            <td>
                <button id='view-button-doctor-view' onClick={show}>View</button>
                <button id='view-button-doctor-remove'>Remove</button>
            </td> 
            </tr>
        </>)
    }
    } 


    const onShow = useCallback(() => setShow(true), []);

    return (
        <div>

            <div id='doctor-contanier'>
                <div id={`${success ? 'sucess-message-active' : 'sucess-message'}`}>
                    <img id='successImage' src={successImage} />  <h3 id='sucess-message-name'> Doctor Added Sucessfully <i class="fa-solid fa-xmark close-button-success" onClick={() => { setSuccess(!success) }}></i></h3>
                </div>
                <div id={`${formReg ? 'fade-clusterAdmin' : null}`} onClick={() => { setFormReg(!formReg) }}></div>
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

                    {/* <tr>
                        <td>101</td>
                        <td>891234567V</td>
                        <td>Dr Namal Perera</td>
                        <td>0777123456</td>
                        <td>namalperera@gmail.com</td>
                        <td>
                            <button id='view-button-doctor-view' onClick={show}>View</button>
                            <button id='view-button-doctor-remove'>Remove</button>
                        </td>

                    </tr>
                    <tr>
                        <td>102</td>
                        <td>901234567V</td>
                        <td>Dr Sewandi Ranasingh</td>
                        <td>0761234567</td>
                        <td>sewandiranasingh@gmail.com</td>
                        <td>
                            <button id='view-button-doctor-view'>View</button>
                            <button id='view-button-doctor-remove'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>103</td>
                        <td>871234567V</td>
                        <td>Dr Sathya Ranasingh</td>
                        <td>0782345678</td>
                        <td>sathyaransingh@gmail.com</td>
                        <td>
                            <button id='view-button-doctor-view'>View</button>
                            <button id='view-button-doctor-remove'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>104</td>
                        <td>891224567V</td>
                        <td>Dr Kamal Silva</td>
                        <td>0782347778</td>
                        <td>kamalsilva@gmail.com</td>
                        <td>
                            <button id='view-button-doctor-view'>View</button>
                            <button id='view-button-doctor-remove'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>105</td>
                        <td>891334567V</td>
                        <td>Dr Sathya Suriya</td>
                        <td>0782347678</td>
                        <td>sathyasurya@gmail.com</td>
                        <td>
                            <button id='view-button-doctor-view'>View</button>
                            <button id='view-button-doctor-remove'>Remove</button>
                        </td>
                    </tr> */}
                </table>
                <div id='doctor-pageButton'>
                    <a className='page-navigation'>{"<< Prev"}  </a>
                    <a className='page-navigation'>1</a>
                    <a className='page-navigation'>{"Next >>"}</a>
                </div>

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

            </div>
        </div>
    )
}

