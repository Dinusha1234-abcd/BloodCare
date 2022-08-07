import React from 'react';  
import '../assests/css/component.blood.display.css';
export default function Users(props) {

  return (
    <div id='blood-card-dashboard'>  
         <h1 id="blood-name-dashboard" >{props.name}</h1>
         <h id='blood-role-dashboard'>Counters</h><br/>
         <h2 id='blood-count-dashboard'>22</h2>
     </div>
  )

}