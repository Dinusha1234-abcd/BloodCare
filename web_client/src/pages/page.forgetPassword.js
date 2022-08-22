import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "../assests/css/page.forgetPassword.css";
import icon from "../assests/images/bloodcareIcon2.png";
import vector1 from "../assests/images/login.vector1.png";
import vector2 from "../assests/images/login.vector2.png";
import imageLogin from "../assests/images/login.image.png"
export default function ForgetPassword() {
    //create const variable
    const [userName, setUserName] = useState(""); 
    const [pinNumber, setPinNumber] = useState("");
    const [PIN, setPIN] = useState(""); 
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPasword, setConfirmPasword] = useState("");
    const [showPinconfirmation, setShowPnconfirmation] = useState(true);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [counter, setCounter] = useState(60);
    const [show, setShow] = useState("true")
    function userPasswordSet(e) {
        e.preventDefault()
        //create object
        const user = {
            userName

        }
     // check validation
        if (!((userName.length == 10) || (userName.length == 12))) {
            setMessage("Please Enter Valid User Name");

        } else {
            setMessage("Please Check Your Email");
            //  pass check the data with server 
            axios.post("http://localhost:8070/forgetpassword", user).then(
                (res) => {
                    setPIN(res['data']['pinCode']);

                }
            ).catch((err) => {
                //sever error
                console.log(err.message);
                setMessage("Please Check Your Email");
            })
        }
    }
    function pinConfrimation(e) {
        e.preventDefault()
        if (PIN == parseInt(pinNumber)) {
            setShowPnconfirmation(false);
            setShowChangePassword(true);
        } else {
            if (pinNumber.length == 0) {
                setMessage("Your Not Entered Pin Code ");
            } else {
                setMessage("Enter PIN code Incorrect");
            }
        }



    }
    function updatePassword(e) {
        e.preventDefault()
        const userPasswordChange = {
            userName,
            password,

        }
        if (password == confirmPasword) {
            axios.post("http://localhost:8070/passwordchange", userPasswordChange).then(
                (res) => {
                    console.log(res['data']['passwordChange']);
                    window.location = "/login";

                }
            ).catch((err) => {
                //sever error
                console.log(err.passwordChange);
            })
            setConfirmPasword("");
            setPassword("");
        }
    }

    return (

        <div>
            <img id="vector1" src={vector1} />
            <img id="vector2" src={vector2} />

            <div className="container1">
                <div id="iconContainer">
                    <h3>WELCOME  TO</h3> <br />
                    <img id="icon" src={icon} /> <br />
                    <h3 id="iconName"><b>BLOODCARE</b></h3>

                </div>
                <form id={`${showPinconfirmation ? 'ForgetForm-display' : 'ForgetForm'}`}   >

                    {message ? <p id="message">{message}</p> : null}
                    <input type="text" id="input" placeholder="Enter User name" onChange={(e) => { setUserName(e.target.value) }} /> <br />

                    <input type="password" id="inputPin" placeholder="Enter Pin" onChange={(e) => { setPinNumber(e.target.value) }} /> {"  "}

                    <button type="sumbit" id="pinCode" onClick={userPasswordSet}  > Send Pin Code  </button>  <br />
                    <button type="sumbit" id="updatePassword" onClick={pinConfrimation}> Confirm </button> <br /><br />
                    {/* <Link to='/login' id="forgetPasswordlogin"  >You have Password?</Link> */}
                </form>
                <form id={`${showChangePassword ? 'ForgetForm-display' : 'ForgetForm'}`}   >

                    {message ? <p id="message">{message}</p> : null}
                    <input type="password" id="input" placeholder="Enter New Password" onChange={(e) => { setPassword(e.target.value) }} /> <br />

                    <input type="password" id="input" placeholder="Enter Confirm Password" onChange={(e) => { setConfirmPasword(e.target.value) }} /> <br />


                    <button type="sumbit" id="updatePassword" onClick={updatePassword}> Update Password </button> <br /><br />
                    {/* <Link to='/login' id="forgetPasswordlogin"  >You have Password?</Link> */}
                </form>
                <img id="imageLogin" src={imageLogin} />
            </div>
        </div>
    )
}