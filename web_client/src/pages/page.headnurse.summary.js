import React, { useState, useEffect } from "react";
import SlideMenuHeadNurse from "../components/headnurse/component.slidemenu.headNurse";
import '../assests/css/headnurse/headnurse.summary.css';
import boy_details from '../assests/images/boy.png';
import formimage from '../assests/images/donate.png';

export default function HeadNurseSummaryWork() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [date, setDate] = useState(new Date())
    const passData = (data) => {
      setSlideMenu(data);
    };

    return (
        <div>
          <SlideMenuHeadNurse headerName={"Summary Work"} passData={passData} />
          <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} > 
          <input type="text" id='search-headnurse-summary' placeholder="Search.."/>
          <button type="button" id="button-headnurse-summary"> <i class="fas fa-search"></i></button> <br/>
          <div id="details-summary">
              <label id="details-names-summary">Camp No : 02</label> <br/>
              <label id="details-names-summary">Blood Center No : 11</label> <br/>
              <label id="details-names-summary">Camp Name : Camp2</label> <br/>
              <label id="details-names-summary">Date : 2022/05/22</label> <br/>
              <label id="details-names-summary">Location : Colombo</label> <br/>
              <label id="details-names-summary">Time : 8.00 am</label> 

              
              <label id="details-organizer-summary">Camp No : 02</label> <br/>
              <label id="details-organizer-summary">Camp No : 02</label> <br/>
              <label id="details-organizer-summary">Camp No : 02</label> <br/>
             
          </div>

          
        </div> 
        </div>
        
      );
    }  