import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assests/css/component.slidemenu.css';
import icon from "../assests/images/bloodcareIcon.png";
import userIcon from "../assests/images/slidemenu.icon.png";
import notification from "../assests/images/notification.png";
import select from "../assests/images/slidemenu.select.png";

 

export default function Slide(props) {
  const [show, setShow] = useState(true);
  const [option, setOption] = useState(true);
   
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("type");

    window.location = "/login";
  }
  useEffect(()=>{
    props.passData(show);
  })
  
  
  return (
    <main className={show ? 'space-toggle' : null}>
      <header className='header'>
        <div onClick={() => { setShow(!show) }}>
          <h4 id='header-name'><i className="fa-solid fa-bars fa-2xl  menu-icon"></i>{props.headerName}</h4>

        </div>
        <a id='user-name'  ><img id="icon-user" src={userIcon} /><a id='name'>{localStorage.getItem("firstName")+" "+localStorage.getItem("lastName") }</a></a><img id="notification" src={notification}/><img id="select" src={select} onClick={()=>{setOption(!option)  } } />
        <div id={`${ option ? 'user-select' : 'user-select-active' }`}>
          <Link  to='/'  className='user-select-option-profile'>View Profile</Link><br/> 
          <Link  to='/' className='user-select-option-log' onClick={logout}>logout</Link>
        </div></header>
      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <img id='logo' src={icon} alt="" />
              <span className='nav-logo-name'>BLOODCARE</span>
            </Link>
            <div className='nav-list'>
              <Link to='/dashboard' className={`${(window.location.pathname === '/dashboard'|| window.location.pathname === '/login' ) ? 'nav-link-active' : 'nav-link'} `}>
                <i className={`${(window.location.pathname === '/dashboard' || window.location.pathname === '/login' ) ? 'fa-solid fa-gauge-high nav-link-icon-active' : 'fa-solid fa-gauge-high nav-link-icon'} `}></i>
                <span className={`${(window.location.pathname === '/dashboard' || window.location.pathname === '/login') ? 'nav-link-icon-active' : 'nav-link-icon'} `}  >Dashboard</span>
              </Link>  
              <Link to='/calendar' className={`${(window.location.pathname === '/calendar'|| window.location.pathname === '/login' ) ? 'nav-link-active' : 'nav-link'} `}>
                <i className={`${(window.location.pathname === '/calendar' || window.location.pathname === '/login' ) ? 'fa-solid fa-calendar-days nav-link-icon-active' : 'fa-solid fa-calendar-days nav-link-icon'} `}></i>
                <span className={`${(window.location.pathname === '/calendar' || window.location.pathname === '/login') ? 'nav-link-icon-active' : 'nav-link-icon'} `}  >Calendar</span>
              </Link>  
             <Link to='/bloodcamp/pastcamp' className={`${(window.location.pathname === '/bloodcamp/pastcamp'||window.location.pathname==='/bloodcamp/ongoingcamp' || window.location.pathname==='/bloodcamp/futurecamp' || window.location.pathname==='/bloodcamp/pendingcamp') ? 'nav-link-active' : 'nav-link'} `}  >
              <i className={`${(window.location.pathname === '/bloodcamp/pastcamp' ||window.location.pathname==='/bloodcamp/ongoingcamp' || window.location.pathname==='/bloodcamp/futurecamp' || window.location.pathname==='/bloodcamp/pendingcamp') ? 'fa-solid fa-campground nav-link-icon-active' : 'fa-solid fa-campground nav-link-icon'} `}></i>
             <span className={`${(window.location.pathname === '/bloodcamp/pastcamp'||window.location.pathname==='/bloodcamp/ongoingcamp' ||window.location.pathname==='/bloodcamp/futurecamp'||window.location.pathname==='/bloodcamp/pendingcamp') ? 'nav-link-icon-active' : 'nav-link-icon'} `} >Blood Camps</span>
              </Link>
              <Link to='/medicalstaff/doctor' className={`${(window.location.pathname === '/medicalstaff/doctor'||window.location.pathname==='/medicalstaff/headnurse' || window.location.pathname==='/medicalstaff/nurse' || window.location.pathname==='/medicalstaff/driver') ? 'nav-link-active' : 'nav-link'} `}  >
              <i className={`${(window.location.pathname === '/medicalstaff/doctor' ||window.location.pathname==='/medicalstaff/headnurse' || window.location.pathname==='/medicalstaff/nurse' || window.location.pathname==='/medicalstaff/driver') ? 'fa-solid fa-user-nurse nav-link-icon-active' : 'fa-solid fa-user-nurse nav-link-icon'} `}></i>
             <span className={`${(window.location.pathname === '/medicalstaff/doctor'||window.location.pathname==='/medicalstaff/headnurse' ||window.location.pathname==='/medicalstaff/nurse'||window.location.pathname==='/medicalstaff/driver') ? 'nav-link-icon-active' : 'nav-link-icon'} `} >Medical Staff</span>
              </Link>
               <Link to='/donors' className={`${window.location.pathname==='/donors' ? 'nav-link-active' : 'nav-link'}`}  >
                <i className={`${window.location.pathname==='/donors' ? 'fa-solid fa-people-group nav-link-icon-active' : 'fa-solid fa-people-group nav-link-icon'}`} ></i>
                <span className={`${window.location.pathname==='/donors' ? 'nav-link-icon-active' : 'nav-link-icon'}`} >Donors</span>
              </Link>
              <Link to='/blood' className='nav-link'  >
              <i className="fa-solid fa-fire-flame-simple nav-link-icon"></i>
                <span className='nav-link-name' id='nav-link-name'>Blood</span>
              </Link>
            </div>
          </div>
        </nav>
      </aside>
    </main>
  )
}
