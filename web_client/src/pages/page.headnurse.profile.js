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
          <img id="nurse-img-profile" src={headnurseprofile}  /> 
          <input type="file" id="headnurse-upload-pic"/> 
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
            <label id="headnurse-label1" >First Name </label> <i class="fa fa-edit icon" id="icon-headnurse"></i><input id="firstname-headnurse" type="text" placeholder="Nimali.." />
            <label id="headnurse-label2">Last Name </label> <i class="fa fa-edit icon" id="icon-headnurse"></i><input id="lastname-headnurse" type="text" placeholder="Perera.." /> <br></br>
            <label id="headnurse-label3">Phone </label>  <i class="fa fa-edit icon" id="icon-headnurse"></i><input id="phone-headnurse" type="text" placeholder="071-2458741.." />  
            <label id="headnurse-label4">Email </label>  <i class="fa fa-edit icon" id="icon-headnurse"></i><input id="email-headnurse" type="text" placeholder="nimali@gmail.com.."  />  <br></br>
            <label id="headnurse-label5">Address   </label> <i class="fa fa-edit icon" id="icon-headnurse"></i><input id="address-headnurse" type="text" placeholder="Colombo.." /> <br></br>
            <label id="headnurse-label6">Work Place </label> <i class="fa fa-edit icon" id="icon-headnurse"></i> <input id="workplace-headnurse" type="text" placeholder="General Hospital, Colombo.."/>  
            <label id="headnurse-label7">Education </label> <i class="fa fa-edit icon" id="icon-headnurse"></i> <input id="education-headnurse" type="text" placeholder="BSc. (Hons.) Nursing Studies." /> <br></br>
            <input id= "headnurse-save" type="submit" value="Save"/>
          </form>
        </div>
               
       
        </div> 
        </div>
        
      );
    }  