import React from 'react';
import '../assests/css/admin/component.user.display.admin.css';
export default function Users(props) {

  return (
    <div id='user-card-admin'>  
         <img id="image-icon-admin" src={props.image}/><br/>  
          <h id={`${ props.status ? 'user-role-change' : 'user-role-admin' }`}>{props.name}</h><br/>
         <h4 id='user-count-member-admin'>33</h4>
     </div>
     
  )

}