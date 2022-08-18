import React, { useState, useEffect } from "react";
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.pastcamps.css';
import Upcomming from '../assests/images/upcomming.png';
import Past from '../assests/images/past.png';




export default function HeadNursePastCamps() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [date, setDate] = useState(new Date())
    const passData = (data) => {
      setSlideMenu(data);
    };

    return (
        <div>
          <SlideMenuHeadNurse headerName={"Blood Camps"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
            <div id="view-count-past">
              <div id="upcomming-camp-past" > 
              <img id="camp-img-past" src={Upcomming}/>
                <h3 id ="h3-head-past">Upcomming Blood Camps</h3>
                <h2 id ="h2-head-past">04</h2>  
              </div>
            
              <div id="past-camp-past"  >
              <img id="camp-img-past" src={Past}/>
                <h3 id ="h3-head-past">Past Blood Camps</h3> 
                <h2 id ="h2-head-past" >05</h2> 
              </div>
            </div>
               
              <h1 id ="h1-head-past">Your Past Blood Camps</h1>
              <input type="text" id='search' placeholder="Search.."/>
              <button type="button" id="button-headnurse-past"> <i class="fas fa-search"></i></button>

              
              
            
          </div>
          <div id="camp1-past">
                <h4 id ="h4-head-past">Wednsday, August 12, 2022</h4>
                <button type="button" id="button1-past" > view requested donors </button>
                 <p id ="p-head-past"> <i class="fa-solid fa-location-dot"></i> University of colombo</p>
                 <p id ="p-head-past">  <i class="fa-solid fa-clock"></i> at 2.00 pm</p>
                 <p id ="p-head-past">Western Province</p> 
          </div>
          <div id="camp2-past">
                <h4 id ="h4-head-past">Tuesday, July 30, 2022</h4>
                <button type="button" id="button2-past" > view requested donors </button>
                 <p id ="p-head-past"> <i class="fa-solid fa-location-dot"></i> Town hall, colombo </p>
                 <p id ="p-head-past">  <i class="fa-solid fa-clock"></i> at 8.00 am</p>
                 <p id ="p-head-past">Western Province</p> 
          </div>
          <div id="camp3-past">
                <h4 id ="h4-head-past">Monday, July 29, 2022</h4>
                <button type="button" id="button3-past" > view requested donors </button>
                 <p id ="p-head-past"> <i class="fa-solid fa-location-dot"></i> Gampaha </p>
                 <p id ="p-head-past">  <i class="fa-solid fa-clock"></i> at 9.45 am</p>
                 <p id ="p-head-past">Western Province</p> 
          </div>
          <div id="camp4-past">
                <h4 id ="h4-head-past">Tuesday, October 30, 2022</h4>
                <button type="button" id="button4-past" > view requested donors </button>
                 <p id ="p-head-past"> <i class="fa-solid fa-location-dot"></i> Colombo </p>
                 <p id ="p-head-past">  <i class="fa-solid fa-clock"></i> at 11.00 am</p>
                 <p id ="p-head-past">Western Province</p> 
          </div>

              
        </div>
        
      );
    }   

    