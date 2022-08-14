import React from 'react';
import '../assests/css/component.blood.css';

export default function ClusterAdminBloodDisplay(){

    return(
        <div id='blood-display-container'>
            <div id='blood-display-container-box-1'>
                <h1 id='header-clusterAdmin'>O Positive Blood Counters</h1>
                 <div id='blood-display-container-subbox-1'>Cluster Center <br/> 22 <br/>Counters</div>
                 <div id='blood-display-container-subbox-1'>All Cluster Center<br/>23<br>Counters</br></div>
                 <div id='blood-display-container-subbox-1'>Collect Blood Counters Campare to Other Cluster Centers<br/>100%<br/>Percentage</div>
            </div>
            <div id='blood-display-container-box-2'>
                <div id='blood-display-container-subbox-2-1'>
                    <div id='blood-display-container-subbox-2-1-1' >Last Update Date 2022/07/28</div>
                    <div id='blood-display-container-subbox-2-1-1' >Last Update Time 12:00 PM</div>
               </div>
                <div id='blood-display-container-subbox-2-1'></div>
           </div>
           <div id='blood-display-container-box-2'>
                 <h1>Last Camping Saving O+ Blood Counters</h1>
               
           </div>
        </div>
    )
}