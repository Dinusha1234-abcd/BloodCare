import React, { useState, useEffect } from "react";
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import pastCamp from '../assests/images/pastCamp.png';
import OngoingCamp from '../assests/images/ongoingCamp.png';
import futureCamp from '../assests/images/furtureCamp.png';
import PendingCamp from '../assests/images/camp.png';
import '../assests/css/headnurse/headnurse.assigncamps.css';
import Camp from "../components/headnurse/component.camp.display.headnurse";



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
              <div id="upcomming" > 
                <h3>Upcomming Blood Camps</h3>   
              </div>
            
              <div id="past"  >
                <h3>Past Blood Camps</h3>
              </div>
            </div>
            <div id="row-2">
             
            </div>
          </div>
    
        </div>
      );
    }   