import React from 'react';
export default function Users(props) {

    return (
      <div id='cluster-card-admin'>  
        <img id="image-icon" src={props.image}/><br/> 
        <h id={`${ props.status ? 'user-role-change-dashboard' : 'user-role-dashboard' }`}>{props.name}</h><br/>
        <h2 id='cluster-count-admin'>12</h2>
       </div>
    )
  
  }