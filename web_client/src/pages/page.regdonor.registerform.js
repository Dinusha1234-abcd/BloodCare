import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';  
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import '../assests/css/page.regdonor.registerform.css';
export default function RegisterForm() {

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
    const regDonorNic = localStorage.getItem('userNic');
    useEffect ((() => {getCampId()}), [])

   
    function getCampId() {
        const campNumber =id;
        const camp = {
            campNumber,
            regDonorNic
        }

        axios.post("http://localhost:8070/registerdonor/registerform",camp).then(
            (res) => {

                setData(res.data.camps);
                // setData(res.data.donor);
                 setLoading(!loading);
                setWait(true);
               
            }).catch((err) => {
                //sever 
                    setLoading(!loading);
                    setUnsuccessMessage("Network Connection Issue Please Try Again");
                    setUnSuccess(true)
            })
    }
    
    return(
        <div>
            <SlideMenuRegDonor headerName={"Register Form"}/>
            <div id="register-form">
                <h3 id="register-form-name">Register Form</h3>
                <h4 id="register-form-camp-name">YOU CAN HELP SAVE A LIFE!</h4>
                <form id="reg-form">
                    <label id="regDonor-camp-name" for="camp-name">Camp Name</label> 
                    <label id="camp-id" for="camp-id">Camp ID</label><br></br>
                    <input type="text" id="regDonor-camp-name" name="camp-name" value="YOU CAN HELPSAVE A LIFE!"></input>
                    <input type="text" id="regDonor-camp-id" name="camp-id" value="0012"></input><br></br><br></br>
                    <label id="donor-name" for="donor-name">Name</label>
                    <label id="donor-NIC" for="donor-NIC">NIC</label><br></br>
                    <input type="text" id="regDonor-name" name="donor-name" value="Mr. Viraj Kariyawasam"></input>
                    <input type="text" id="regDonor-NIC" name="donor-NIC" value="20005671338v"></input><br></br><br></br>
                    <label for="vegiterian">Are you vegetarian or not?</label><br></br>
                    <input type="radio" id="regDonor-vegetarian" name="vegitarian" value="vegitarian"></input>
                    <label  for="vegetarian">Vegetarian</label>
                    <input type="radio" id="regDonor-non" name="non" value="non"></input>
                    <label for="non">Non-Vegetarian</label><br></br><br></br>
                    <button id="donor-register">Register</button>
                    <button id="donor-cancel">Cancel </button>
                </form>
            </div>
        </div>

    );
}