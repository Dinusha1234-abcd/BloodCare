import React from 'react';
import '../assests/css/admin/component.user.display.admin.css';
export default function Users(props) {

  return (
    <div id='user-card-admin'>  
         <img id="image-icon" src={props.image}/><br/> 
         <h id={`${ props.status ? 'user-role-change' : 'user-role' }`}>{props.name}</h><br/>
         <h2 id='user-count'>33</h2>
     </div>
  )

}