import React from 'react';
import '../assests/css/admin/component.user.display.admin.css';
export default function Users(props) {

  return (
    <div id='user-card-admin'>  
         <img id="image-icon-admin" src={props.image}/><br/>  
          {/* <h id={`${ props.status ? 'user-role-change' : 'user-role-admin' }`}>{props.name}</h><br/> */}
          <h id={`${ props.status ? 'user-role-change-dashboard-clusteradmin' : 'user-role-dashboard-clusteradmin' }`}>{props.name}</h><br/>
         <h4 id='user-count-member-admin'>{props.number}</h4>
     </div>
     
  )

}