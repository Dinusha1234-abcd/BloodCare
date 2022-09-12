import React from 'react';
 import '../../assests/css/component.user.display.css';
export default function Users(props) {
   return (
    <div id='user-card-dashboard-clusteradmin'>  
         <img id="image-icon-clusteradmin" src={props.image}/><br/> 
         <h id={`${ props.status ? 'user-role-change-dashboard-clusteradmin' : 'user-role-dashboard-clusteradmin' }`}>{props.name}</h><br/>
         <h2 id='user-count-dashboard-clusteradmin'>{props.number}</h2>
     </div>
  )

}