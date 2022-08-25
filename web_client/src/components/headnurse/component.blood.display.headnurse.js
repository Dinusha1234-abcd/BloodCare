import React from 'react';  
import '../../assests/css/headnurse/component.blood.display.headnurse.css';
export default function Users(props) {

  return (
    <div id='blood-card-dashboard-headnurse'>  
         <h1 id="blood-name-dashboard-headnurse" >{props.name}</h1>
         <h id='blood-role-dashboard-headnurse'>Counters</h><br/>
         <h2 id='blood-count-dashboard-headnurse'>{props.count}</h2>
     </div>
  )

}