import React, { useState, useEffect } from "react";
import SlideMenuClusterAdmin from '../components/component.slidemenu.clusterAdmin';
import PastCamp from '../components/component.pastCamp';
import pastCamp from '../assests/images/pastCamp.png';
import OngoingCamp from '../assests/images/ongoingCamp.png';
import futureCamp from '../assests/images/furtureCamp.png';
import PendingCamp from '../assests/images/camp.png';
import '../assests/css/page.clusterAdmin.bloodcamp.css'

export default function ClusterAdminBloodCamp (){
    const [slidemenu, setSlideMenu] = useState(true);
    const passData = (data) => {
        setSlideMenu(data);
      };
    return(
        <div>
             <SlideMenuClusterAdmin headerName={"Blood Camp"} passData={passData} />
             <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
                <div id="container-1">
                    <div id="box-1"><img src={pastCamp} id='box-1-pastCamp' /><h className='camp-status'>Past Camps</h> </div>
                    <div id="box-2"><img src={OngoingCamp} id='box-2-pastCamp'/><h className='camp-status'>Ongoing Camps</h></div>
                    <div id="box-3"><img src={futureCamp} id='box-3-pastCamp'/><h className='camp-status'>Future Camps</h></div>
                    <div id="box-4"><img src={PendingCamp} id='box-4-pastCamp'/><h className='camp-status'>Pending Camps</h></div>
                </div> 
                <PastCamp/>
             </div>
          
        </div>
    )
}