import React from 'react';
 import '../../assests/css/headnurse/component.user.display.headnurse.css';
export default function Users(props) {

  return (
    <div id='user-card'>  
         <img id="image-icon" src={props.image}/><br/> 
         <h id={`${ props.status ? 'user-role-change' : 'user-role' }`}>{props.name}</h><br/>
         <h2 id='user-count'>22</h2>
     </div>
  )

}