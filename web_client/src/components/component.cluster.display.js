import React from 'react';
export default function Users(props) {

    return (
      <div id='cluster-card-admin'>  
        <img id="image-icon" src={props.image}/><br/> 
        <h id={`${ props.status ? 'user-role-change-dashboard' : 'user-role-dashboard' }`}>{props.name}</h><br/>
<<<<<<< HEAD
        <h2 id='cluster-count-admin'>{props.number}</h2>
=======
        <h2 id='cluster-count-admin'>12</h2>
>>>>>>> 7ad938bf52df83b899930d0362c810bf5b87db85
       </div>
    )
  
  }