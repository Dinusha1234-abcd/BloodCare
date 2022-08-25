import React from 'react';
 import '../../assests/css/headnurse/component.user.display.headnurse.css';
export default function Users(props) {

  return (
    <div id='user-card-headnurse'>  
         <img id="image-icon-headnurse" src={props.image}/><br/> 
         <h id={`${ props.status ? 'user-role-change-headnurse' : 'user-role-headnurse' }`}>{props.name}</h><br/>
         <h2 id='user-count-headnurse'>{props.count}</h2>
     </div>
  )

}