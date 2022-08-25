import React from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import '../assests/css/page.regdonor.profile.css';
import bloodo from '../assests/images/bloodOp.png';
import profileP from '../assests/images/Ellipse 11.png'
export default function RegDonorProfile() {
    return (
        <div>
            <SlideMenuRegDonor headerName={"Profile"} />

            <div>
                <img id="reg-profile-bloodOpimg" src={bloodo} />
                
            </div>
            <div id="reg-donor-profile">
                <img id="reg-donor-profile" src={profileP} />
            </div>

            <div id="profile-form">
                <h3 id="profile-page-donor-name">Viraj Kariyawasam</h3>
                <h4 id="profile-page-actor">Donor</h4>
                <form id="regDonor-profile-form">
                    <label for="reg-donor-name">Name</label>
                    <label for="register-donor-NIC">NIC</label><br></br>
                    <input type="text" id="reg-Donor-Name" name="reg-Donor-Name" value="Mr. Viraj Kariyawasam"></input>
                    <input type="text" id="reg-Donor-NIC" name="reg-Donor-NIC" value="20005671338V"></input><br></br>
                    <label for="reg-donor-contact">Contact</label>
                    <label for="reg-donor-email">E-mail</label><br></br>
                    <input type="text" id="reg-Donor-Contact" name="reg-Donor-Contact" value="0383394565/0716992521"></input>
                    <input type="text" id="reg-Donor-Email" name="reg-Donor-Email" value="virajk2000@gmail.com"></input><br></br>
                    <label for="reg-donor-address">Address</label>
                    <label for="reg-donor-district">Home District</label><br></br>
                    <input type="text" id="reg-Donor-Address" name="reg-Donor-Address" value="131/A, Waduramulla, Panadura"></input>
                    <input type="text" id="reg-Donor-District" name="reg-Donor-District" value="Kalutara"></input>
                    <button id="donor-save">Save</button>
                    <button id="Donor-cancel">Cancel </button>
                </form>
            </div>
        </div>
    );
}