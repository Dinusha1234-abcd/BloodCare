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
    const [clustercenterId , setClustercenterId] = useState("");
    const [password , setPassword] = useState("")

    const [ message,setMessage] = useState("");
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [wait, setWait] = useState(false);
    const [unsuccess, setUnSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [loading, setLoading] = useState(true);


    useEffect((() => {getClusterAdminData() }), [])

    function getClusterAdminData(){
        // Lottie.loadAnimation({
        //     container: document.querySelector("#loading-image"),
        // });
        
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
        e.preventDefault()
         const clusteradmin = {
            firstName,
            lastName,
            NIC,
            address,
            email,
            mobileNumber,
            clustercenterId,
            password
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

        }else if(clustercenterId.length==0){
            setMessage("Please Enter Cluster Center Id");

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
              setClustercenterId('');
              setPassword('');
              setEmail('');
              e.target.reset();
            // pass check the data with server 
            axios.post("http://localhost:8070//users/clusteradmin", clusteradmin).then(
                (res)=> {
                    //check password and username  
                    if(res['data']['message']=="success"){
                        window.location="/users/clusteradmin";
                    }else{
                        setMessage("Network connection issue!");
                    }  
                }
              ).catch((err)=>{
                //sever error
                 console.log(err.message);
              }) 
        }
    }

    const list = [];
    //display data in table
    //check the NIC number
    if (searchData == ""){
        for(let i= 0; i < data.length; i++){
            list.push(
                <><tr>
                    <td>{data[i]['userNic']}</td>
                    <td>{data[i]['firstName']+ " " + data[i]['lastName']}</td>
                    <td>{data[i]['email']}</td>
                    <td>{data[i]['phoneNumber']}</td>
                    <td><button id='view-user-button-admin'>View</button></td>
                    <td><button id='remove-user-button-admin'>Deactivate</button></td>
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
                        <td><button id='remove-user-button-admin'>Deactivate</button></td>
                    </tr>
                    </>)

            }
        }
    }

    return (
        <div>
            <div id='user-contanier-admin'> 
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
                          <tr>
                              <td>Cluster Center Id</td>
                              <td>   <input type="text" id="register-form-user-input-admin" placeholder="Enter center id"  onChange={(e)=>{setClustercenterId(e.target.value)}}  /> <br />
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
