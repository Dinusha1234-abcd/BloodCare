import React,{useEffect, useState} from 'react';
import axios from 'axios';
import '../../assests/css/admin/component.medicalofficer.admin.css';
import successImage from '../../assests/images/sucess.png';
import unsuccessImage from '../../assests/images/wrong.png';
import loadingImage from '../../assests/images/loading.gif';
import waitImage from '../../assests/images/wait.gif';
import alert from '../../assests/images/alert.png';
import '../../assests/css/admin/component.user.search.admin.css';


export default function MedicalOfficer(){

    const [formReg, setFormReg] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [NIC , setNIC]  = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password , setPassword] = useState("")
    const [removeAlert, setRemoveAlert] = useState(false);
    const [medicalOfficerName, setMedicalOfficerName] = useState("");
    const [medicalOfficerNic, setMedicalOfficerNic] = useState("");
    const [bloodCenterNo, setClusterNo] = useState("");


    const [ message,setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [wait, setWait] = useState(false);
    const [unsuccess, setUnSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [loading, setLoading] = useState(true);
    
    const [updateFormShow, setUpdateFormShow] = useState(false);
    const [id, setId] = useState("");
    const [updateFirstName, setUpdateFirstName] = useState("");
    const [updateLastName, setUpdateLastName] = useState("");
    const [updateNIC, setUpdateNIC] = useState("");
    const [updateAddress, setUpdateAddress] = useState("");
    const [updateEmail, setUpdateEmail] = useState("");
    const [updateMobileNumber, setUpdateMobileNumber] = useState("");

    useEffect((() => {getMedicalOfficerData() }), [])
    function getMedicalOfficerData() {

        axios.post("http://localhost:8070/users/selectMedicalOfficer").then(
            (res) => {
                setData(res.data.medicalOfficers);
                console.log(res.data);

                setLoading(!loading);
            }
        ).catch((err) => {
            //server error
            setLoading(!loading);
            setUnsuccessMessage("Network Connection Issue Please Try Again");
            setUnSuccess(true);
        })
    }


    function addMedicalOfficer(e){
        let dayData;
        e.preventDefault()
        const mo = {
            firstName,
            lastName,
            NIC,
            address,
            email,
            mobileNumber,
            bloodCenterNo,
            password,
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

        if(firstName.length==0){
            setMessage("Please Enter First Name ");
        }else if(lastName.length==0){
            setMessage("Please Enter Last Name ");
        }else if(!(NIC.length==10 ||NIC.length==12 ) && (dayData  < 1 && dayData > 366)){
            setMessage("Please Enter  Valid NIC Number ");
        }else if(address.length==0){
            setMessage("Please Enter  Address ");

        }else if(email.length==0){
            setMessage("Please Enter  Email ");

        }else if(!(mobileNumber.length==10)){
            setMessage("Please Enter  Valid Mobile Number");

        }else if(password.length<6){
            setMessage("Please enter more than 6 charactors");

        }else{
              setFormReg(false);
              setSuccess(true);
              setFirstName('');
              setLastName('');
              setNIC('');
              setAddress('');
              setMobileNumber('');
              setPassword('');
              setEmail('');
              e.target.reset();
            // pass check the data with server 
            axios.post("http://localhost:8070/users/addMedicalOfficer", mo).then(
                (res)=> {
                    //check password and username  
                    if (res['data']['message'] == "success") {
                        setWait(false);
                        setSuccessMessage("MedicalOfficer Added Sucessfully")
                        setSuccess(true);


                    } else {
                        setWait(false);
                        setUnsuccessMessage("Enter Id Number already Registered");
                        setUnSuccess(true);
                    }
                  
                }
              ).catch((err)=>{
                //sever error
                setWait(false);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true)
              }) 
        }
    }
    function sucessbutton() {
        window.location = "/users/medicalofficer";
    }
    function unsucessbutton() {
        window.location = "/users/medicalofficer";
    }

//Update    
    function showUpdateMedicalOfficer(id, firstName, lastName, NIC, address, mobileNumber, email) {
        setUpdateFormShow(!updateFormShow);
        setId(id);
        setUpdateFirstName(firstName);
        setUpdateLastName(lastName);
        setUpdateNIC(NIC);
        setUpdateAddress(address);
        setUpdateMobileNumber(mobileNumber);
        setUpdateEmail(email);

    }

    function updateMedicalOfficer(e) {
        e.preventDefault()
        const medicalOfficer = {
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
            axios.post("http://localhost:8070/users/updateMedicalOfficer", medicalOfficer).then(
                (res) => {
                    //check password and username  
                    if (res['data']['message'] == "success") {
                        setWait(false);
                        setSuccessMessage("Medical Officer Update Sucessfully")
                        setSuccess(true);

                    } else {
                        setWait(false);
                        setUnsuccessMessage("Medical Officer Update UnSucessfully");
                        setUnSuccess(true);

                    }

                }
            ).catch((err) => {
                setWait(false);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true);
            })
        }

    }

//Delete
    function showRemoveMessage(medicalOfficerName, medicalOfficerNIC){
        setMedicalOfficerName(medicalOfficerName);
        setMedicalOfficerNic(medicalOfficerNIC);
        setRemoveAlert(true);
    }

    function removeMedicalOfficer() {
        setRemoveAlert(false);
        setWait(true);
        const medicalOfficer = { medicalOfficerNic };
        axios.post("http://localhost:8070/users/removeMedicalOfficer", medicalOfficer).then(
            (res) => {
                //check password and username  
                if (res['data']['message'] == "success") {
                    setWait(false);
                    setSuccessMessage("Medical Officer Update Sucessfully")
                    setSuccess(true);

                } else {
                    setWait(false);
                    setUnsuccessMessage("Medical Officer Update UnSucessfully");
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
    if(searchData == "") {
        for (let i = 0; i < data.length; i++){
            list.push(
                <> <tr>
                    <td>{data[i]['userNic']}</td>
                    <td>Dr {data[i]['firstName'] + " " + data[i]['lastName']}</td>
                    <td>{data[i]['email']}</td>
                    <td>{data[i]['phoneNumber']}</td>

                    <td><button id='view-user-button-admin' onClick={() => { showUpdateMedicalOfficer(
                                data[i]['staffId'],
                                data[i]['firstName'], 
                                data[i]['lastName'], 
                                data[i]['userNic'], 
                                data[i]['address'], 
                                data[i]['phoneNumber'], 
                                data[i]['email']
                            ) }}>View</button></td>

                    <td><button id='remove-user-button-admin' onClick={() => { showRemoveMessage(
                                data[i]['firstName'] + data[i]['lastName'], 
                                data[i]['userNic']) }} >Deactivate</button></td>

                </tr>
                </>
            )
        }
    } else {
        for (let i = 0; i < 10; i++) {
            if (searchData == data[i]['userNic']) {
                list.push(
                    <> <tr>
                        <td>{data[i]['userNic']}</td>
                        <td>{data[i]['firstName'] + " " + data[i]['lastName']}</td>
                        <td>{data[i]['email']}</td>
                        <td>{data[i]['phoneNumber']}</td>
                        <td><button id='view-user-button-admin' onClick={() => { showUpdateMedicalOfficer(
                                data[i]['staffId'],
                                data[i]['firstName'], 
                                data[i]['lastName'], 
                                data[i]['userNic'], 
                                data[i]['address'], 
                                data[i]['phoneNumber'], 
                                data[i]['email']
                            ) }}>View</button></td>
                        <td><button id='remove-user-button-admin' onClick={() => { showRemoveMessage(
                                data[i]['firstName'] + data[i]['lastName'], 
                                data[i]['userNic']) }}>Deactivate</button></td>
                    </tr>
                    </>)

            }
        }
    }

    return (
        <div>
            <div id='user-contanier-admin'>

                {/* Success message/ */}
                <div id={`${success ? 'sucess-message-active' : 'sucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='successImage' src={successImage} /> <br /> Success !</h1>  <br />
                    <p id='sucess-message-box'>{successMessage}</p> <br></br>
                    <button id="okay-button" onClick={() => { setSuccess(sucessbutton) }}> Okay </button>
                </div>

                <div id={`${wait ? 'wait-cluterAdmin-active' : 'wait-cluterAdmin'}`}> <img id='wait-cluterAdmin-image' src={waitImage} /> </div>

                {/* remove alert */}
                <div id={`${removeAlert ? 'remove-alert-clusteradmin-active' : 'sucess-message'}`}>
                    <br /> <h1 id='remove-alert-clusteradmin-name'> <img id='alert' src={alert} /> <br />Are you removing Dr {medicalOfficerName}</h1>
                    <button id="remove-button" onClick={() => { removeMedicalOfficer() }}> Okay </button>
                    <button id="remove-button" onClick={() => { setRemoveAlert(false) }}> Cancel </button>
                </div>

                <div id={`${unsuccess ? 'unsucess-message-active' : 'unsucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='unsuccessImage' src={unsuccessImage} /> <br /> Wrong !</h1>  <br />
                    <p id='unsucess-message-box'> {unsuccessMessage}</p> <br />
                    <button id="okay-button-unsucess" onClick={() => { setSuccess(unsucessbutton) }}> Okay </button>
                </div>

                <div id={`${formReg || success || unsuccess || updateFormShow || wait ? 'fade-clusterAdmin' : null}`} onClick={ () =>{ setFormReg(false); setUpdateFormShow(false)}}></div>

                <h7 id='header-user-admin'>MEDICAL OFFICERS</h7>
                <input type="text" id='input-user-admin' placeholder=" &#xf002; Search"/>
                <button id='add-user-button-admin' onClick={ () =>{ setFormReg(!formReg)}}>Add</button> 
                <br/><br/>

                <table id="user-table-admin">
                <tr>
                    <th id='user-nic'>NIC</th>
                    <th>Name</th>
                    <th>Email Address</th>
                    <th>Contact No</th>
                    <th id='user-action-admin'>Action</th>
                    <th id='user-action-admin'>Action</th>
                </tr>
                
                {list}
                
                
            </table>
            <div id={`${loading ? 'loading-cluterAdmin-active' : 'loading-cluterAdmin'}`}> <img src={loadingImage} /> </div>
{/* insert medical officer */}
            <div id={ `${ formReg ? 'register-form-user-admin-active' : 'register-form-user-admin'}`}>
                  
                    
                  <h3 id='register-form-user-name-admin'>Add New Medical Officer </h3>
                  <form id='register-form-user-form-admin' onSubmit={addMedicalOfficer}>
                  { message ? <p id="message-form-admin">{message}   <i class="fa-solid fa-xmark close-button-form" onClick={ () =>{ setMessage("")}}></i></p> : null}

                      <table id='user-view-table-admin'>
                          <tr>
                              <td>First Name</td>
                              <td>   <input type="text" id="register-form-user-input-admin" placeholder="Enter First name" onChange={(e)=>{setFirstName(e.target.value)} }  /> <br />
                              </td>
                          </tr>
                          <tr>
                              <td>Last Name</td>
                              <td>   <input type="text" id="register-form-user-input-admin" placeholder="Enter Last name"  onChange={(e)=>{setLastName(e.target.value)}} /> <br />
                              </td>
                          </tr>
                          <tr>
                              <td>NIC Number</td>
                              <td>   <input type="text" id="register-form-user-input-admin" placeholder="Enter NIC Number" onChange={(e)=>{setNIC(e.target.value)}}  /> <br />
                              </td>
                          </tr>
                          <tr>
                              <td>Address</td>
                              <td>   <input type="text" id="register-form-user-input-admin" placeholder="Enter Address" onChange={(e)=>{setAddress(e.target.value)}}  /> <br />
                              </td>
                          </tr>
                          <tr>
                              <td>Email</td>
                              <td>   <input type="text" id="register-form-user-input-admin" placeholder="Enter Email"  onChange={(e)=>{setEmail(e.target.value)}} /> <br />
                              </td>
                          </tr>
                          <tr>
                              <td>Mobile Number</td>
                              <td>   <input type="text" id="register-form-user-input-admin" placeholder="Enter Mobile Number"  onChange={(e)=>{setMobileNumber(e.target.value)}} /> <br />
                              </td>
                          </tr>
                          <tr>
                              <td>Cluster Center No </td>
                              <td>   <input type="text" id="register-form-user-input-admin" placeholder="Enter Cluster Center No"  onChange={(e)=>{setClusterNo(e.target.value)}}  /> <br />
                              </td>
                          </tr>
                          <tr>
                              <td>Password</td>
                              <td>   <input type="password" id="register-form-user-input-admin" placeholder="Enter Password"  onChange={(e)=>{setPassword(e.target.value)}}  /> <br />
                              </td>
                          </tr>
                           
                          
                      </table> <br/>
                  <button type="sumbit" id="sumbit-save-form" > Register </button> {" "} 
                  <button   id="sumbit-cancle-form" onClick={ () =>{ setFormReg(!formReg) }}  > Cancel </button> <br/><br/>

                  </form>
            </div>

{/*update medical officer */}
            <div id={`${updateFormShow ? 'register-form-doctor-clusteradmin-active' : 'register-form-doctor-clusteradmin'}`}>


                <h3 id='register-form-doctor-name-clusteradmin'>Update Medical Officer </h3>
                <form id='register-form-doctor-form-clusteradmin' onSubmit={updateMedicalOfficer}>
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
