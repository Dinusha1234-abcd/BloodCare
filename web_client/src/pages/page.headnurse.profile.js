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
          <form id="edit-headnurse">
            <label id="headnurse-label" >First Name </label>  <input id="firstname-headnurse" type="text" />
            <label id="headnurse-label">Last Name </label> <input id="lastname-headnurse" type="text" /> <br></br>
            <label id="headnurse-label">Phone </label> <input id="phone-headnurse" type="text" /> 
            <label id="headnurse-label">Email </label> <input id="email-headnurse" type="text" /> <br></br>
            <label id="headnurse-label">Address   </label> <input id="address-headnurse" type="text"/> <br></br>
            <label id="headnurse-label">Work Place </label> <input id="workplace-headnurse" type="text" />
            <label id="headnurse-label">Education </label>  <input id="education-headnurse" type="text" /> <br></br>
            <input id= "headnurse-save" type="submit" value="Save"/>
          </form>
        </div>
               
       
        </div> 
        </div>
        
      );
    }  