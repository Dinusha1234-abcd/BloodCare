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
            <a href="/headnurse/assigncamps">
              <div id="upcomming-camp-past" > 
              <img id="camp-img-past" src={Upcomming}/>
                <h3 id ="h3-head-past">Upcomming Blood Camps</h3>
                <h2 id ="h2-head-past">04</h2>  
              </div></a>
            
              <a href="/headnurse/pastcamps">
              <div id="past-camp-past"  >
              <img id="camp-img-past" src={Past}/>
                <h3 id ="h3-head-past">Past Blood Camps</h3> 
                <h2 id ="h2-head-past" >02</h2> 
              </div></a>
            </div>
               
              <h1 id ="h1-head-past">Your Past Blood Camps</h1>
              <input type="text" id='search-headnurse-pastcamps' placeholder="Search.."/>
              <button type="button" id="button-headnurse-past"> <i class="fas fa-search"></i></button>

              
              
            
          </div>
          <div id="camp1-past">
          <div id = "c-blood" > 
                 <div id="blood-count-camp1-1"><h3 id="blood-name">A+</h3> <h4 id = "blood-cont">12</h4></div>
                 <div id="blood-count-camp1-2"><h3 id="blood-name">B+</h3> <h4 id = "blood-cont">20</h4></div>
                 <div id="blood-count-camp1-3"><h3 id="blood-name">AB+</h3> <h4 id = "blood-cont">21</h4></div>
                 <div id="blood-count-camp1-4"><h3 id="blood-name">O+</h3> <h4 id = "blood-cont">50</h4></div>
                 <div id="blood-count-camp1-5"><h3 id="blood-name">A-</h3> <h4 id = "blood-cont">23</h4></div>
                 <div id="blood-count-camp1-6"><h3 id="blood-name">B-</h3> <h4 id = "blood-cont">15</h4></div>
                 <div id="blood-count-camp1-7"><h3 id="blood-name">AB-</h3> <h4 id = "blood-cont">04</h4></div>
                 <div id="blood-count-camp1-8"><h3 id="blood-name">O-</h3> <h4 id = "blood-cont">11</h4></div>
          </div> 

                <h4 id ="h4-head-past">Wednsday, August 12, 2022</h4>
                <a href="/headnurse/donors">
                <button type="button" id="button1-past" > view donor details </button> </a>
                 <p id ="p-head-past"> <i class="fa-solid fa-location-dot"></i> University of colombo</p>
                 <p id ="p-head-past">  <i class="fa-solid fa-clock"></i> at 2.00 pm</p>
                 <p id ="p-head-past">Western Province</p> 
                 <p id ="p-head-past">Organizer : Mr.Perera</p> 
                 <p id ="p-head-past">No of registered donors : 50</p> 
                 <p id ="p-head-past">No of blood counts : 45</p> 
              

          </div>
          <div id="camp2-past">
          <div id = "c-blood" > 
                 <div id="blood-count-camp1-1"><h3 id="blood-name">A+</h3> <h4 id = "blood-cont">40</h4></div>
                 <div id="blood-count-camp1-2"><h3 id="blood-name">B+</h3> <h4 id = "blood-cont">10</h4></div>
                 <div id="blood-count-camp1-3"><h3 id="blood-name">AB+</h3> <h4 id = "blood-cont">12</h4></div>
                 <div id="blood-count-camp1-4"><h3 id="blood-name">O+</h3> <h4 id = "blood-cont">21</h4></div>
                 <div id="blood-count-camp1-5"><h3 id="blood-name">A-</h3> <h4 id = "blood-cont">30</h4></div>
                 <div id="blood-count-camp1-6"><h3 id="blood-name">B-</h3> <h4 id = "blood-cont">04</h4></div>
                 <div id="blood-count-camp1-7"><h3 id="blood-name">AB-</h3> <h4 id = "blood-cont">09</h4></div>
                 <div id="blood-count-camp1-8"><h3 id="blood-name">O-</h3> <h4 id = "blood-cont">25</h4></div>
          </div> 
              
                <h4 id ="h4-head-past">Tuesday, July 30, 2022</h4>
                <a href="/headnurse/donors">
                <button type="button" id="button2-past" > view donor details </button> </a>
                 <p id ="p-head-past"> <i class="fa-solid fa-location-dot"></i> Town hall, colombo </p>
                 <p id ="p-head-past">  <i class="fa-solid fa-clock"></i> at 8.00 am</p>
                 <p id ="p-head-past">Western Province</p> 
                 <p id ="p-head-past">Organizer : Mr.Sandaruwan</p> 
                 <p id ="p-head-past">No of registered donors : 60</p> 
                 <p id ="p-head-past">No of blood counts : 50</p> 
          </div>
          

              
        </div>
        
      );
    }   

    