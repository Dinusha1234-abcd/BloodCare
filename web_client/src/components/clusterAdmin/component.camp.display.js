import React from 'react';
 import '../../assests/css/component.camp.display.css';
export default function Users(props) {

  return (
    <div id='card-camp-clusteradmin'>  
         <img id={`${ props.status ? 'image-camp-clusteradmin-icon-change' : 'image-camp-clusteradmin-icon' }`}src={props.image}/><br/> 
         <h id={`${ props.status ? 'user-role-clusteradmin-change-camp' : 'user-role-clusteradmin-camp' }`}>{props.name}</h><br/>
         <h2 id={`${ props.status ? 'camp-count-clusteradmin-change' : 'camp-count-clusteradmin' }`}>{props.number}</h2>
     </div>
  )

} 