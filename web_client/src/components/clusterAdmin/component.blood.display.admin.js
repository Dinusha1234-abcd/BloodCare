import React from 'react';  
import '../../assests/css/admin/component.blood.display.admin.css';
export default function Users(props) {

  return (
    <div id='blood-card-dashboard-admin'>  
         <h1 id="blood-name-dashboard-admin" >{props.name}</h1>
         <h id='blood-role-dashboard-admin'>Packets</h><br/>
         <h2 id='blood-count-dashboard'>{props.number}</h2>
     </div>
  )

}