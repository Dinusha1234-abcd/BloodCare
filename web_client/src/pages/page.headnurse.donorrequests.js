import React, { useState, useEffect } from "react";
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.donorrequests.css';
import Upcomming from '../assests/images/upcomming.png';
import Past from '../assests/images/past.png';
import donorheadnurse from '../assests/images/donor.png';
import man from '../assests/images/man.png';
import boy from '../assests/images/boy.png';
import woman from '../assests/images/woman.png';




export default function HeadNurseDonorRequests() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [date, setDate] = useState(new Date())
    const passData = (data) => {
      setSlideMenu(data);
    };

    return (
        <div>
          <SlideMenuHeadNurse headerName={"Donor Requests"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
              <div id="donor-count-headnurse" > 
              <img id="donor-img" src={donorheadnurse}/>
                <h3 id ="h3-user">Total Requested Dornors</h3>
                <h2 id ="h2-user">22</h2>  
              </div>
            
              <input type="text" id='search' placeholder="Search.."/>
              <button type="button" id="button-headnurse-user"> <i class="fas fa-search"></i></button>  
          </div>

          <div id="user1">
                <img id="man" src={man}/>
                <h4 id ="h4-user">User1</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button1-user"> Register </button> </a>
                 <p id ="p-user">  user1@gmail.com</p>
                 <p id ="p-user">   Colombo</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user2">
                <img id="boy" src={boy}/>
                <h4 id ="h4-user">User2</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button2-user" > Register </button></a>
                 <p id ="p-user">  user2@gmail.com </p>
                 <p id ="p-user">  Gampaha</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user3">
          <img id="woman" src={woman}/>
                <h4 id ="h4-user">User3</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button3-user" >Register </button></a>
                 <p id ="p-user"> user3@gmail.com </p>
                 <p id ="p-user">  Matara</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user4">
          <img id="man" src={man}/>
                <h4 id ="h4-user">User4</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button4-user" > Register </button></a>
                 <p id ="p-user"> user4@gmail.com</p>
                 <p id ="p-user"> Kandy</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user5">
          <img id="boy" src={boy}/>
                <h4 id ="h4-user">User5</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button5-user" > Register </button></a>
                 <p id ="p-user"> user5@gmail.com</p>
                 <p id ="p-user"> Colombo</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user6">
          <img id="woman" src={woman}/>
                <h4 id ="h4-user">User6</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button6-user" > Register </button></a>
                 <p id ="p-user"> user6@gmail.com </p>
                 <p id ="p-user"> Gampaha</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user7">
          <img id="man" src={man}/>
                <h4 id ="h4-user">User7</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button7-user" >Register </button></a>
                 <p id ="p-user"> user7@gmail.com </p>
                 <p id ="p-user"> Matara</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user8">
          <img id="boy" src={boy}/>
                <h4 id ="h4-user">User8</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button8-user" > Register </button></a>
                 <p id ="p-user"> user8@gmail.com</p>
                 <p id ="p-user"> Kandy</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user9">
          <img id="woman" src={woman}/>
                <h4 id ="h4-user">User9</h4>
                <a href="/headnurse/addnewdonor">
                <button type="button" id="button9-user" > Register </button></a>
                 <p id ="p-user"> user9@gmail.com</p>
                 <p id ="p-user"> Kandy</p>
                 <p id ="p-user">071-4578142</p> 
          </div>

          
              
        </div>
        
      );
    }   

    