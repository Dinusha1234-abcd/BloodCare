import React, {useState} from "react";
import axios from 'axios';
import "../assests/css/page.forgetPassword.css";
import icon from "../assests/images/bloodcareIcon2.png";
import vector1 from "../assests/images/login.vector1.png";
import vector2 from "../assests/images/login.vector2.png";
import imageLogin from "../assests/images/login.image.png"
export default function ForgetPassword() {
    //create const variable
    const [userName,setUserName] = useState("");
    const [pinNumber,setPinNumber] = useState("");
    const [PIN, setPIN] = useState("");
    const [ errorUserName,setErrorUserName] = useState("");
    const [ errorPassword,setErrorPassword] = useState("");
    const [ message,setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPasword, setConfirmPasword] = useState("");
     const [ showPinconfirmation, setShowPnconfirmation] = useState(true);
    const [ showChangePassword, setShowChangePassword] = useState(false);
    function userPasswordSet(e){
        e.preventDefault()
        //create object
        const user = {
            userName
            
        }
        // setErrorUserName("");
        // setErrorPassword("");
        // //check validation
        // if(!((userName.length==10)||(userName.length==12))&&(password.length==0)){
        //      setErrorUserName("Please Enter Valid User Name");
        //      setErrorPassword("Please Enter Valid Password");
        // }else if(!((userName.length==10)||(userName.length==12))){
        //      setErrorUserName("Please Enter Valid User Name");
        // }else if(password.length==0){
        //      setErrorPassword("Please Enter Valid Password");
        // }else{
        //      // pass check the data with server 
              axios.post("http://localhost:8070/forgetpassword", user).then(
                (res)=> {
                    setPIN(res['data']['pinCode']);
                    console.log(res['data']['message']);
                    console.log(res['data']['pinCode']);

                    //check password and username  
                    // if(res['data']['message']=="success"){
 
                    // }else{
                    //     setMessage("Username or Password is Not match");
                    // }
                  
                }
              ).catch((err)=>{
                //sever error
                 console.log(err.message);
              })
        // }
    }
    function pinConfrimation(e){
        e.preventDefault()
        if(PIN==parseInt(pinNumber)){
            window.location = "/login";
        }
        
       
       
    }
    function updatePassword(){
        const userPasswordChange = {
            userName, 
            password,
           
        }
        if(password==confirmPasword){
            axios.post("http://localhost:8070/passwordchange", userPasswordChange).then(
                (res)=> {
                   
                    //check password and username  
                    // if(res['data']['message']=="success"){
 
                    // }else{
                    //     setMessage("Username or Password is Not match");
                    // }
                  
                }
              ).catch((err)=>{
                //sever error
                 console.log(err.message);
              })
        }
    }

    return (

        <div>
            <img id="vector1" src={vector1} />
            <img id="vector2" src={vector2} />

            <div className="container1">
                <div id="iconContainer">
                    <h3>WELCOME  TO</h3> <br/>
                    <img id="icon" src={icon} /> <br />
                    <h3 id="iconName"><b>BLOODCARE</b></h3>
                    
                </div>
                <form id={`${showPinconfirmation ? 'ForgetForm-display' : 'ForgetForm' }`}   >
                    {/* validation message display */}
                   { message ? <p id="message">{message}</p> : null}
                    <input type="text" id="input" placeholder="Enter User name" onChange={(e)=>{setUserName(e.target.value)}}  /> <br/>
                    {/* <p id="errorMessage">{errorUserName}</p>  */}
                    <input type="password" id="input" placeholder="Enter Pin Number"onChange={(e)=>{setPinNumber(e.target.value)}}/> <br/>
                    {/* <p id="errorMessage">{errorPassword}</p>  */}
                    <button type="sumbit" id="pinCode" onClick={userPasswordSet}> Send Pin Code </button>  {"  "}
                    <button type="sumbit" id="pinCode" onClick={pinConfrimation}> Confirm </button> <br/><br/>
                   
                </form>
                <form id={`${showChangePassword ? 'ForgetForm-display' : 'ForgetForm' }`}   >
                    {/* validation message display */}
                   { message ? <p id="message">{message}</p> : null}
                    <input type="text" id="input" placeholder="Enter New Password" onChange={(e)=>{setPassword(e.target.value)}}  /> <br/>
                    {/* <p id="errorMessage">{errorUserName}</p>  */}
                    <input type="password" id="input" placeholder="Enter Confirm Password"onChange={(e)=>{setConfirmPasword(e.target.value)}}/> <br/>
                    {/* <p id="errorMessage">{errorPassword}</p>  */}
                  
                    <button type="sumbit" id="pinCode" onClick={updatePassword}> Update Password </button> <br/><br/>
                   
                </form>
             <img id="imageLogin" src={imageLogin} />
            </div>
        </div>
    )
}