import React, { useState, useEffect } from "react";
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.donorrequests.css';
import Upcomming from '../assests/images/upcomming.png';
import Past from '../assests/images/past.png';




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
              <img id="camp-img" src={Upcomming}/>
                <h3 id ="h3-user">Total Requested Dornors</h3>
                <h2 id ="h2-user">22</h2>  
              </div>
            
              <input type="text" id='search' placeholder="Search.."/>
              <button type="button" id="button-headnurse-user"> <i class="fas fa-search"></i></button>  
          </div>

          <div id="user1">
                <h4 id ="h4-user">User1</h4>
                <button type="button" id="button1-user"> Register </button>
                 <p id ="p-user"> <i class="fa-solid fa-location-dot"></i> user1@gmail.com</p>
                 <p id ="p-user">  <i class="fa-solid fa-clock"></i> Colombo</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user2">
                <h4 id ="h4-user">Tuesday, July 30, 2022</h4>
                <button type="button" id="button2-user" > Register </button>
                 <p id ="p-user"> <i class="fa-solid fa-location-dot"></i> user1@gmail.com </p>
                 <p id ="p-user">  <i class="fa-solid fa-clock"></i> Gampaha</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user3">
                <h4 id ="h4-user">Monday, July 29, 2022</h4>
                <button type="button" id="button3-user" >Register </button>
                 <p id ="p-user"> <i class="fa-solid fa-location-dot"></i> user1@gmail.com </p>
                 <p id ="p-user">  <i class="fa-solid fa-clock"></i> Matara</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user4">
                <h4 id ="h4-user">Tuesday, October 30, 2022</h4>
                <button type="button" id="button4-user" > Register </button>
                 <p id ="p-user"> <i class="fa-solid fa-location-dot"></i> user1@gmail.com</p>
                 <p id ="p-user">  <i class="fa-solid fa-clock"></i> Kandy</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user5">
                <h4 id ="h4-user">User1</h4>
                <button type="button" id="button5-user" > Register </button>
                 <p id ="p-user"> <i class="fa-solid fa-location-dot"></i> user1@gmail.com</p>
                 <p id ="p-user">  <i class="fa-solid fa-clock"></i> Colombo</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user6">
                <h4 id ="h4-user">Tuesday, July 30, 2022</h4>
                <button type="button" id="button6-user" > Register </button>
                 <p id ="p-user"> <i class="fa-solid fa-location-dot"></i> user1@gmail.com </p>
                 <p id ="p-user">  <i class="fa-solid fa-clock"></i> Gampaha</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user7">
                <h4 id ="h4-user">Monday, July 29, 2022</h4>
                <button type="button" id="button7-user" >Register </button>
                 <p id ="p-user"> <i class="fa-solid fa-location-dot"></i> user1@gmail.com </p>
                 <p id ="p-user">  <i class="fa-solid fa-clock"></i> Matara</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user8">
                <h4 id ="h4-user">Tuesday, October 30, 2022</h4>
                <button type="button" id="button8-user" > Register </button>
                 <p id ="p-user"> <i class="fa-solid fa-location-dot"></i> user1@gmail.com</p>
                 <p id ="p-user">  <i class="fa-solid fa-clock"></i> Kandy</p>
                 <p id ="p-user">071-4578142</p> 
          </div>
          <div id="user9">
                <h4 id ="h4-user">Tuesday, October 30, 2022</h4>
                <button type="button" id="button9-user" > Register </button>
                 <p id ="p-user"> <i class="fa-solid fa-location-dot"></i> user1@gmail.com</p>
                 <p id ="p-user">  <i class="fa-solid fa-clock"></i> Kandy</p>
                 <p id ="p-user">071-4578142</p> 
          </div>

          
              
        </div>
        
      );
    }   

    