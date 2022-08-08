import React from 'react';
 import '../../assests/css/headnurse/component.camp.display.headnurse.css';
export default function Users(props) {

  return (
    <div id='card-camp'>  
         <img id={`${ props.status ? 'image-camp-icon-change' : 'image-camp-icon' }`}src={props.image}/><br/> 
         <h id={`${ props.status ? 'user-role-change-camp' : 'user-role-camp' }`}>{props.name}</h><br/>
         <h2 id={`${ props.status ? 'camp-count-change' : 'camp-count' }`}>22</h2>
     </div>
  )

} 