import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';  
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import '../assests/css/page.regdonor.registerform.css';
export default function RegisterForm() {
    const [slidemenu, setSlideMenu] = useState(true);
    const {id} =useParams()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [wait, setWait] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [medicalStaff, setMedicalStaff] = useState([]);
    const [status, setStatus] = useState("");
    const [staffAdd, setStaffAdd] = useState(false); 
    const [staffNic, setStaffNic] = useState("");
    const [staffId, setStaffId] = useState("");
    const [bloodCenterNumber, setBloodCenterNumber] = useState("");
    const [staffTyoe, setStaffType] = useState("");
    const [lastRow, setLastRow] = useState(0);
    const [updateFormShow, setUpdateFormShow] = useState(false);
    const regDonorNic = localStorage.getItem('userNic');
    const [getFirstName, setFirstName] = useState("");
    const [getLastName, setLastName] = useState("");
    const [getcampName, setcampName] =useState("");
    const [value, setValue] = useState(false);
    
    const passData = (data) => {
        setSlideMenu(data);
    };

    useEffect ((() => {getCampId()}), [])

   
    function getCampId() {
        const Id =id;
        const userNic = regDonorNic;
        const camp = {
            Id,
            userNic
        }

        axios.post("http://localhost:8070/registerdonor/registerform",camp).then(
            (res) => {

                setData(res.data.camps);
                setcampName(res.data.campName);
                // setFirstName(res.data.camps[0].firstName);
                // setLastName(res.data.camps[0].lastName);
                // setcampName(res.data[0].campName);
                setLoading(!loading);
                console.log(lastRow);
                setWait(true);
               
            }).catch((err) => {
                //sever 
                    setLoading(!loading);
                    setUnsuccessMessage("Network Connection Issue Please Try Again");
                    setUnSuccess(true)
            })
    }
     const changeVeg = () => {
        setValue('veg')
     }
     const changeNonVeg = () => {
        setValue('nonveg')
     }

    function registerCamp(){
        const Id =id;
        const userNic = regDonorNic;
        const   user = {
            id,
            userNic,
            value
        }
        axios.post("http://localhost:8070/registerdonor/registerformUpdate",user).then(
            (res) => {
                //check password and username  
                if (res['data']['message'] == "success") {
                    // showUpdateDonor(data[0].firstName,data[0].userNic,data[0].lastName,data[0].phoneNumber,data[0].address, data[0].district,data[0].email, data[0].province);
                    setWait(false);
                    setSuccessMessage("Doctor Update Sucessfully")
                    setSuccess(true);

                } else {
                    setWait(false);
                    setUnsuccessMessage("Doctor Update UnSucessfully");
                    setUnSuccess(true);

                }

            }
        ).catch((err) => {
            //sever error
            console.log(err.message);
            setWait(false);
            setUnsuccessMessage("Network Connection Issue Please Try Again");
            setUnSuccess(true);
         } )

         
    }
    
    return(
        <div>
            <SlideMenuRegDonor headerName={"Register Form"} passData={passData}/>
            <div id="register-form">
                <h3 id="register-form-name">Register Form</h3>
                <h4 id="register-form-camp-name" >{getcampName}</h4>
                <form id="reg-form" onSubmit={registerCamp}>
                    <label id="regDonor-camp-name" for="camp-name">Camp Name</label> 
                    <label id="camp-id" for="camp-id">Camp ID</label><br></br>
                    <input type="text" id="regDonor-camp-name" name="camp-name" value={getcampName}></input>
                    <input type="text" id="regDonor-camp-id"  value={id}></input><br></br><br></br>
                    <label id="donor-name" for="donor-name">Name</label>
                    <label id="donor-NIC" for="donor-NIC">NIC</label><br></br>
                    <input type="text" id="regDonor-name" value={localStorage.getItem("firstName")+" "+localStorage.getItem("lastName") }></input>
                    <input type="text" id="regDonor-NIC"  value={regDonorNic}></input><br></br><br></br>
                    <label for="vegiterian">Are you vegetarian or not?</label><br></br>
                    <input type="radio" id="regDonor-vegetarian" name="vegitarian" value={value==='veg'} onChange={changeVeg}></input>
                    <label  for="vegetarian">Vegetarian</label>
                    <input type="radio" id="regDonor-non" name="non"  value={value==='nonveg'} onChange={changeNonVeg}></input>
                    <label for="non">Non-Vegetarian</label><br></br><br></br>
                    <button id="donor-register">Register</button>
                    <button id="donor-cancel">Cancel </button>
                </form>
            </div>
        </div>

    );
}