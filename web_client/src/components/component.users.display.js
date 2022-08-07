import React from 'react';
 import '../assests/css/component.user.display.css';
export default function Users(props) {

  return (
    <div id='user-card-dashboard'>  
         <img id="image-icon" src={props.image}/><br/> 
         <h id={`${ props.status ? 'user-role-change-dashboard' : 'user-role-dashboard' }`}>{props.name}</h><br/>
         <h2 id='user-count-dashboard'>22</h2>
     </div>
  )

}