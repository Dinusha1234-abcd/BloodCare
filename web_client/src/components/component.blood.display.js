import React from 'react';  
import '../assests/css/component.blood.display.css';
export default function Users(props) {

  return (
    <div id='blood-card-dashboard-clusterAdmin'>  
         <h1 id="blood-name-dashboard-clusterAdmin" >{props.name}</h1>
         <h id='blood-role-dashboard-clusterAdmin'>Counters</h><br/>
         <h2 id='blood-count-dashboard-clusterAdmin'>22</h2>
     </div>
  )

}