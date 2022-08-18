import React from 'react';
 import '../../assests/css/headnurse/component.camp.display.headnurse.css';
export default function Users(props) {

  return (
    <div id='card-camp-headnurse'>  
         <img id={`${ props.status ? 'image-camp-icon-change-headnurse' : 'image-camp-icon-headnurse' }`}src={props.image}/><br/> 
         <h id={`${ props.status ? 'user-role-change-camp-headnurse' : 'user-role-camp-headnurse' }`}>{props.name}</h><br/>
         <h2 id={`${ props.status ? 'camp-count-change-headnurse' : 'camp-count-headnurse' }`}>22</h2>
     </div>
  )

} 