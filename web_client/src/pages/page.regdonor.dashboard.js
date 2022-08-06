import React from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import '../assests/css/page.regdonor.dashboard.css';
import backgroundimg from '../assests/images/blood donation.jpg';

export default function RegDonorDashboard() {
    return(
        <div>
        <SlideMenuRegDonor headerName={"Home"}/>
        <div>
            <img id="backgroundimg" src={backgroundimg} />
            <div id="tableContainer">


    

            </div>
        </div>
        </div>
    );
}