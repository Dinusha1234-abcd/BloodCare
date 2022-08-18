import React from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import '../assests/css/page.regdonor.profile.css'
export default function RegDonorProfile() {
    return(
        <div>
            <SlideMenuRegDonor headerName={"Profile"}/>
            <div id="profile-form">
            <h3 id="profile-page-donor-name">Viraj Kariyawasam</h3>
            <h4 id="profile-page-actor">Donor</h4>
            <form id="regDonor-profile-form">

                <button id="donor-save">Save</button>
                <button id="donor-cancel">Cancel </button>
            </form>
            </div>
        </div>
    );
}