/*import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import Calendar from 'react-calendar';
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import Camp from "../components/headnurse/component.camp.display.headnurse";
import pastCamp from '../assests/images/pastCamp.png';
import OngoingCamp from '../assests/images/ongoingCamp.png';
import futureCamp from '../assests/images/furtureCamp.png';
import PendingCamp from '../assests/images/camp.png';
import '../assests/css/headnurse/headnurse.assigncamps.css';



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
            <div id="row-1">
              <div id="upcomming">
                <h3>Upcomming Blood Camps</h3>
                 
              </div>
            
              <div id="past">
                <h3>Past Blood Camps</h3>
                <div id="camp-count" display='inline'> <Camp image={pastCamp} name="Completed Camps"  />  <Camp image={futureCamp} name="Upcomming Camps" status={true} /> </div>
              </div>
            </div>
            <div id="row-2">
             
            </div>
          </div>
    
        </div>
      );
    }   */