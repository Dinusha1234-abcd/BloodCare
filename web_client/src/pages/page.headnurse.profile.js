import React, { useState, useEffect } from "react";
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.profile.css';
import headnurseprofile from '../assests/images/headnurseprofile.png';

export default function HeadNurseProfile() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [date, setDate] = useState(new Date())
    const passData = (data) => {
      setSlideMenu(data);
    };

    return (
        <div>
          <SlideMenuHeadNurse headerName={"Profile"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >   
          <img id="nurse-img-profile" src={headnurseprofile}/>
          <div id="headnurse-details-profile" > 
             
                <h4 id="name-headnurse" > Mrs. Nimali Perera </h4> 
                <p id ="postion">Head Nurse</p>
                <p id ="age-headnurse">29 years</p>
                <p id ="center">Cluster Center : Colombo</p>
                <p id ="camp-count-attend-name">Number of blood camps     participated</p>
                <h3 id ="camp-count-attend">10</h3>
                <p id ="date-joined">Joined date : 13/02/2021</p>

        </div>

        <div id="profile-edit-headnurse">
             
        </div>
               
       
        </div> 
        </div>
        
      );
    }  