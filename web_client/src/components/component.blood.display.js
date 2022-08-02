import React from 'react';  
import '../assests/css/component.blood.display.css';
export default function Users(props) {

  return (
    <div id='blood-card'>  
         <h1 id="blood-name" >{props.name}</h1>
         <h id='blood-role'>Counters</h><br/>
         <h2 id='blood-count'>22</h2>
     </div>
  )

}