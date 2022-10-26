import React from 'react';  
import '../../assests/css/component.blood.display.css';
export default function Users(props) {

  return (
    <div id='blood-card-dashboard-clusterAdmin'>  
         <h1 id="blood-name-dashboard-clusterAdmin" >{props.name}</h1>
         <h id='blood-role-dashboard-clusterAdmin'>Packets</h><br/>
         <h2 id='blood-count-dashboard-clusterAdmin'>{props.number}</h2>
     </div>
  )

}