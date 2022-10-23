import React,{useEffect, useState} from 'react';
import axios from 'axios';
import '../../assests/css/admin/component.medicalofficer.admin.css';
import successImage from '../../assests/images/sucess.png';
import '../../assests/css/admin/component.user.search.admin.css';
import lottie from "lottie-web";
// import loading from '../assests/images/loading.gif';

export default function MedicalOfficer(){

    const [formReg, setFormReg] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [NIC , setNIC]  = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password , setPassword] = useState("")
    const [ message,setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");

    // let loading = require("../assests/images/loading.gif")

    useEffect((() => {getMedicalOfficerData() }), [])
    function getMedicalOfficerData() {
        // lottie.loadAnimation({
        //     container: document.querySelector("#loading-image"),
        // });

        const adminNic = localStorage.getItem('userNic');
        const admin = {
            adminNic
        }
        console.log("call");

        axios.post("http://localhost:8070/users/selectMedicalOfficer", admin).then(
            (res) => {
                setData(res.data.medicalofficers);
                // console.log(res.data);
            }
        ).catch((err) => {
            //server error
            console.log(err.message);
        })
    }


    console.log(data[1]);
    function addMedicalOfficer(e){
        e.preventDefault()
        const adminNic = localStorage.getItem('userNic');
        const mo = {
            adminNic,
            firstName,
            lastName,
            NIC,
            address,
            email,
            mobileNumber,
            password,
        }
        if(firstName.length==0){
            setMessage("Please Enter First Name ");
        }else if(lastName.length==0){
            setMessage("Please Enter Last Name ");
        }else if(!(NIC.length==10 ||NIC.length==12 )){
            console.log(NIC.length);
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
            axios.post("http://localhost:8070/users/medicalofficer", mo).then(
                (res)=> {
                    //check password and username  
                    if(res['data']['message']=="success"){
                        window.location = "/users/medicalOfficer";
                      
                    }else{
                        setMessage("Username or Password is Not match");
                    }
                  
                }
              ).catch((err)=>{
                //sever error
                 console.log(err.message);
              }) 
        }
    }
    function successMessage() {
        if(success){ 
        return(
            <div id='sucess-message'>
              <img id='successImage' src={successImage}/>  <h3 id='sucess-message-name'> Dr {firstName + " " + lastName} Sucessfully Added   <i class="fa-solid fa-xmark close-button-success" onClick={ () =>{ setMessage("")}}></i></h3>
            </div>
        )}
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
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>

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
                        <td><button id='view-user-button-admin'>View</button></td>
                        <td><button id='remove-user-button-admin'>Deactivate</button></td>
                    </tr>
                    </>)

            }
        }
    }

    return (
        <div>
            <div id='user-contanier-admin'>

                <div id={`${success ? 'sucess-message-active' :'sucess-message' }`}>
                 <img id='successImage' src={successImage}/>  <h3 id='sucess-message-name'> Dr {firstName + " " + lastName} Added Sucessfully <i class="fa-solid fa-xmark close-button-success" onClick={ () =>{ setSuccess(!success)}}></i></h3>
                </div>
                <div id={`${formReg ? 'fade-clusterAdmin' : null}`}onClick={ () =>{ setFormReg(!formReg)}}></div>

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
                {/* <tr>
                    <td>988438430V</td>
                    <td>Dr. K.G.Weerasinghe</td>
                    <td>weer2@gmail.com</td>
                    <td>071-0987654</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
                </tr> */}
                {list}
                
                
            </table>
          

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
                              <td>Password</td>
                              <td>   <input type="text" id="register-form-user-input-admin" placeholder="Enter Password"  onChange={(e)=>{setPassword(e.target.value)}}  /> <br />
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
