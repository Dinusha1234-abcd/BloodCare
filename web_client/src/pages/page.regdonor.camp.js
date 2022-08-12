import React from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import '../assests/css/page.regdonor.camp.css';
export default function RegDonorCamp() {
    return (
        <div>
            <SlideMenuRegDonor headerName={"Upcoming Camp Details"}/>
            <div id="camp-container">
            </div>
            <div id="camp-container2">
            </div>
            <div id="camp-container3">
            </div>
            <div id='d-history-records-table-pageButton'>
                <a className='page-navigation'>{"<< "}  </a> 
                <a className='page-navigation'>{" Prev"}  </a> 
                <a className='page-navigation'>1</a>
                <a className='page-navigation'>{"Next "}</a> 
                <a className='page-navigation'>{">>"}</a> 
            </div>
        </div>
    );
}