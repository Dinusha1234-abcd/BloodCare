import React, { useState, useEffect } from "react";
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.assigncamps.css';

import Upcomming from '../assests/images/upcomming.png';
import Past from '../assests/images/past.png';




export default function HeadNurseAssignCamps() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [date, setDate] = useState(new Date())
    const passData = (data) => {
      setSlideMenu(data);
    };

    return (
        <div>
          <SlideMenuHeadNurse headerName={"Blood Camps"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
            <div id="view-count">
              <div id="upcomming-camp" > 
              <img id="camp-img" src={Upcomming}/>
                <h3>Upcomming Blood Camps</h3>
                <h2>04</h2>   
              </div>
            
              <div id="past-camp"  >
              <img id="camp-img" src={Past}/>
                <h3>Past Blood Camps</h3>
                <h2>05</h2>
              </div>
            </div>
               
              <h1>Your Upcomming Blood Camps</h1>
              <input type="text" id='search' placeholder="Search.."/>
              <button type="button" > <i class="fas fa-search"></i></button>

              <div id="camp1">
                <h4>Wednsday, August 12, 2022</h4>
                 <p>University of colombo</p>
                 <p>at 2.00 pm</p>
                 <p>Western Province</p>
                 <button type="button" id="button1" > view requested donors </button>
              </div>
              
            
          </div>
          
        </div>
        
      );
    }   

    