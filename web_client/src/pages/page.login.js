import React, {useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "../assests/css/page.login.css";
import icon from "../assests/images/bloodcareIcon2.png";
import vector1 from "../assests/images/login.vector1.png";
import vector2 from "../assests/images/login.vector2.png";
import imageLogin from "../assests/images/login.image.png"
export default function Login() {
    //create const variable
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [ errorUserName,setErrorUserName] = useState("");
    const [ errorPassword,setErrorPassword] = useState("");
    const [ message,setMessage] = useState("");

    function userAuthentication(e){
        e.preventDefault()
        //create object
        const user = {
            userName,
            password
        }
        setErrorUserName("");
        setErrorPassword("");
        //check validation
        if(!((userName.length==10)||(userName.length==12))&&(password.length==0)){
             setErrorUserName("Please Enter Valid User Name");
             setErrorPassword("Please Enter Valid Password");
        }else if(!((userName.length==10)||(userName.length==12))){
             setErrorUserName("Please Enter Valid User Name");
        }else if(password.length==0){
             setErrorPassword("Please Enter Valid Password");
        }else{
             // pass check the data with server 
              axios.post("http://localhost:8070/login", user).then(
                (res)=> {
                    //check password and username  
                    if(res['data']['message']=="success"){
                        const token = res.data.message;
                        const firstName = res.data.firstName;
                        const lastName = res.data.lastName;
                        const type = res.data.type;
                        localStorage.setItem("token",token);
                        localStorage.setItem("firstName",firstName);
                        localStorage.setItem("lastName",lastName);
                        localStorage.setItem("type",type)
                        window.location = "/dashboard";
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
                <form id="loginForm" onSubmit={userAuthentication}>
                    {/* validation message display */}
                   { message ? <p id="message">{message}</p> : null}
                    <input type="text" id="input" placeholder=" &#xf2bd;  User name" onChange={(e)=>{setUserName(e.target.value)}}  /> <br/>
                    <p id="errorMessage">{errorUserName}</p> 
                    <input type="password" id="input" placeholder=" &#xf023;   Password"onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                    <p id="errorMessage">{errorPassword}</p> 
                    <button type="sumbit" id="signIn" > Sign In   </button> <br/><br/>
                    <Link to='/forgetpassword' id="forgetPassword"  >Forgot password?</Link>
                </form>
             <img id="imageLogin" src={imageLogin} />
            </div>
        </div>
    )
}