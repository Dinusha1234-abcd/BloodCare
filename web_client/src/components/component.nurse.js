import React,{useState} from 'react';
import '../assests/css/component.nurse.css';
export default function Nurse() {
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
    return (
        <div>
            <div id='nurse-contanier'> 
            <div id={`${formReg ? 'fade-clusterAdmin' : null}`} onClick={() => { setFormReg(!formReg) }}></div>
            <h3 id='header-clusterAdmin'>Nurse Details</h3>
            <input type="text" id='input-nurse' placeholder=" &#xf002; Enter NIC Number"/> 
            <button id='add-nurse' onClick={() => { setFormReg(!formReg) }}>+ Add New</button>
            <br/><br/>
            <table id="nurse-table">
                <tr>
                    <th id='nurse-number'>Id</th>
                    <th>NIC Number</th>
                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    <th id='nurse-action'>Action</th>

                </tr>
                <tr>
                    <td>120</td>
                    <td>92234567V</td>
                    <td>Samanthi Karnanayaka</td>
                    <td>0766123456</td>
                    <td>samanthikarunanayaka@gmail.com</td>
                    <td>
                        <button id='view-button-nurse-view'>View</button>
                        <button id='view-button-nurse-remove'>Remove</button>
                    </td>

                </tr>
                <tr>
                    <td>130</td>
                    <td>911234599V</td>
                    <td>Sewandi Wathsala</td>
                    <td>0761234567</td>
                    <td>sewandiwathsala@gmail.com</td>
                    <td>
                        <button id='view-button-nurse-view'>View</button>
                        <button id='view-button-nurse-remove'>Remove</button>
                    </td>
          </tr>
                <tr>
                    <td>140</td>
                    <td>88234567V</td>
                    <td>Gimhani Shamila</td>
                    <td>0782345678</td>
                    <td>gimhanishamila@gmail.com</td>
                    <td>
                        <button id='view-button-nurse-view'>View</button>
                        <button id='view-button-nurse-remove'>Remove</button>
                    </td>
              </tr>
                <tr>
                    <td>142</td>
                    <td>8512345678V</td>
                    <td>Kamala Silva</td>
                    <td>0782347778</td>
                    <td>kamalasilva@gmail.com</td>
                    <td>
                        <button id='view-button-nurse-view'>View</button>
                        <button id='view-button-nurse-remove'>Remove</button>
                    </td>
                     </tr>
                <tr>
                    <td>160</td>
                    <td>891334567V</td>
                    <td>Sathya Suriya</td>
                    <td>0782347678</td>
                    <td>sathyasurya@gmail.com</td>
                    <td>
                        <button id='view-button-nurse-view'>View</button>
                        <button id='view-button-nurse-remove'>Remove</button>
                    </td>
                </tr>
             </table>
            <div id='nurse-pageButton'>
                <a className='page-navigation'>{"<< Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next >>"}</a> 
            </div>
         </div>
         <div id={`${formReg ? 'register-form-doctor-clusteradmin-active' : 'register-form-doctor-clusteradmin'}`}>


                    <h3 id='register-form-doctor-name-clusteradmin'>Add New Doctor </h3>
                    <form id='register-form-doctor-form-clusteradmin' >
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
                            <tr>
                                <td>Password</td>
                                <td>   <input type="password" id="register-form-doctor-input-clusteradmin" placeholder="Enter Mobile Number" onChange={(e) => { setMobileNumber(e.target.value) }} /> <br />
                                </td>
                            </tr>
                         


                        </table> <br />
                        <button type="sumbit" id="sumbit-save-form" > Register </button> {" "}
                        <button id="sumbit-cancle-form" onClick={() => { setFormReg(!formReg) }}  > Cancel </button> <br /><br />

                    </form>
                </div>
        </div>
    )
} 