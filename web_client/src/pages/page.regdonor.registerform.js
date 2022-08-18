import React from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import '../assests/css/page.regdonor.registerform.css';
export default function RegisterForm() {
    return(
        <div>
            <SlideMenuRegDonor headerName={"Register Form"}/>
            <div id="register-form">
                <h3 id="register-form-name">Register Form</h3>
                <h4 id="register-form-camp-name">YOU CAN HELP SAVE A LIFE!</h4>
                <form id="reg-form">
                    <label for="camp-name">Camp Name</label> 
                    <label for="camp-id">Camp ID</label><br></br>
                    <input type="text" id="camp-name" name="camp-name" value="YOU CAN HELPSAVE A LIFE!"></input>
                    <input type="text" id="camp-id" name="camp-id" value="0012"></input>
                    <label for="donor-name">Name</label>
                    <label for="donor-NIC">NIC</label><br></br>
                    <input type="text" id="donor-name" name="donor-name" value="Mr. Viraj Kariyawasam"></input>
                    <input type="text" id="donor-NIC" name="donor-NIC" value="20005671338v"></input><br></br>
                    <label for="vegiterian">Are you vegetarian or not?</label><br></br>
                    <input type="radio" id="vegetarian" name="vegitarian" value="vegitarian"></input>
                    <label for="vegetarian">Vegetarian</label>
                    <input type="radio" id="non" name="non" value="non"></input>
                    <label for="non">Non-Vegetarian</label><br></br>
                    <button id="donor-register">Register</button>
                    <button id="donor-cancel">Cancel </button>
                </form>
            </div>
        </div>

    );
}