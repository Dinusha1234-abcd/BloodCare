import React,{useEffect, useState} from 'react';
import axios from 'axios';
import '../../assests/css/admin/component.user.search.admin.css';
import successImage from '../../assests/images/sucess.png';
import unsuccessImage from '../../assests/images/wrong.png';
import loadingImage from '../../assests/images/loading.gif';
import waitImage from '../../assests/images/wait.gif';
import alert from '../../assests/images/alert.png';
import Lottie from 'lottie-web';

export default function ClusterAdmin(){

    const [formReg, setFormReg] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [NIC , setNIC]  = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password , setPassword] = useState("")
    const [bloodCenterNo , setBloodCenterNo] = useState("")

    const [ message,setMessage] = useState("");
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [wait, setWait] = useState(false);
    const [unsuccess, setUnSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [loading, setLoading] = useState(true);

    const [removeAlert, setRemoveAlert] = useState(false);
    const [clusterAdminName, setClusterAdminName] = useState("");
    const [clusterAdminNic, setClusterAdminNic] = useState("");


    useEffect((() => {getClusterAdminData() }), [])

    function getClusterAdminData(){
        
        axios.post("http://localhost:8070/users/selectClusterAdmin").then(
            (res) => {
                setData(res.data.clusterAdmins);
                console.log(res.data);

                setLoading(!loading);
            }).catch((err) =>{
                //server error
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true);
            })
    }

    function addClusterAdmin(e){
        let dayData;
        e.preventDefault()
         const clusterAdmin = {
            firstName,
            lastName,
            NIC,
            address,
            email,
            mobileNumber,
            // bloodCenterNo,
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

        }
        // else if(bloodCenterNo.length==0){
        //     setMessage("Please Enter Cluster Center Id");

        // }
        else if(password.length<6){
            setMessage("Please enter more than 6 charactors");

        }else{
              setFormReg(false);
              setSuccess(true);
              setFirstName('');
              setLastName('');
              setNIC('');
              setAddress('');
              setMobileNumber('');
              setBloodCenterNo('');
              setPassword('');
              setEmail('');
              e.target.reset();
            // pass check the data with server 
            axios.post("http://localhost:8070/users/addClusterAdmin", clusterAdmin).then(
                (res)=> {
                    //check password and username  
                    if (res['data']['message'] == "success") {
                        setWait(false);
                        setSuccessMessage("Cluster Admin Added Sucessfully")
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
        window.location = "/users/clusterAdmin";
    }
    function unsucessbutton() {
        window.location = "/users/clusterAdmin";
    }

    function showRemoveMessage(clusterAdminName, clusterAdminNIC){
        setClusterAdminName(clusterAdminName);
        setClusterAdminNic(clusterAdminNIC);
        setRemoveAlert(true);
    }

    function removeClusterAdmin() {
        setRemoveAlert(false);
        setWait(true);
        const clusterAdmin = { clusterAdminNic };
        axios.post("http://localhost:8070/users/removeClusterAdmin", clusterAdmin).then(
            (res) => {
                //check password and username  
                if (res['data']['message'] == "success") {
                    setWait(false);
                    setSuccessMessage("Cluster Admin Update Sucessfully")
                    setSuccess(true);

                } else {
                    setWait(false);
                    setUnsuccessMessage("Cluster Admin Update UnSucessfully");
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
    if (searchData == ""){
        for(let i= 0; i < data.length; i++){
            list.push(
                <><tr>
                    <td>{data[i]['userNic']}</td>
                    <td>{data[i]['firstName']+ " " + data[i]['lastName']}</td>
                    <td>{data[i]['email']}</td>
                    <td>{data[i]['phoneNumber']}</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin' onClick={() => { showRemoveMessage(
                                data[i]['firstName'] + data[i]['lastName'], 
                                data[i]['userNic']) }} >Deactivate</button></td>
                </tr>
                </>
            )
        }
    }
    else{
        for (let i = 0; i < 10; i++) {
            if (searchData == data[i]['userNic']) {
                list.push(
                    <> <tr>
                        <td>{data[i]['userNic']}</td>
                        <td>{data[i]['firstName'] + " " + data[i]['lastName']}</td>
                        <td>{data[i]['email']}</td>
                        <td>{data[i]['phoneNumber']}</td>
                        <td><button id='view-user-button-admin'>View</button></td>
                        <td><button id='remove-user-button-admin' onClick={() => { showRemoveMessage(
                                data[i]['firstName'] + data[i]['lastName'], 
                                data[i]['userNic']) }} >Deactivate</button></td>
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

                {/* remove alert */}
                <div id={`${removeAlert ? 'remove-alert-clusteradmin-active' : 'sucess-message'}`}>
                    <br /> <h1 id='remove-alert-clusteradmin-name'> <img id='alert' src={alert} /> <br />Are you removing Dr {clusterAdminName}</h1>
                    <button id="remove-button" onClick={() => { removeClusterAdmin() }}> Okay </button>
                    <button id="remove-button" onClick={() => { setRemoveAlert(false) }}> Cancel </button>
                </div>

                <div id={`${wait ? 'wait-cluterAdmin-active' : 'wait-cluterAdmin'}`}> <img id='wait-cluterAdmin-image' src={waitImage} /> </div>

                <div id={`${unsuccess ? 'unsucess-message-active' : 'unsucess-message'}`}>
                    <br /> <h1 id='sucess-message-name'> <img id='unsuccessImage' src={unsuccessImage} /> <br /> Wrong !</h1>  <br />
                    <p id='unsucess-message-box'> {unsuccessMessage}</p> <br />
                    <button id="okay-button-unsucess" onClick={() => { setSuccess(unsucessbutton) }}> Okay </button>
                </div>

                <div id={`${formReg || success || unsuccess ? 'fade-clusterAdmin' : null}`}onClick={ () =>{ setFormReg(!formReg)}}></div>

                <h7 id='header-user-admin'>CLUSTER CENTER ADMINISTRATORS</h7>
                <input type="text" id='input-clusteradmin-admin' placeholder=" &#xf002; Search"/>
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
                  
                    
                  <h3 id='register-form-user-name-admin'>Add New Cluster Admin </h3>
                  <form id='register-form-user-form-admin' onSubmit={addClusterAdmin}>
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
                          {/* <tr>
                              <td>Cluster Center No</td>
                              <td>   <input type="text" id="register-form-user-input-admin" placeholder="Enter center no"  onChange={(e)=>{setBloodCenterNo(e.target.value)}}  /> <br />
                              </td>
                          </tr> */}
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
         </div>
        </div>
    )

}
