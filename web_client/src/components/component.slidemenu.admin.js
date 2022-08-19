import { Helmet } from "react-helmet";
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
  useEffect(
    ()=>{
      props.passData(show)
    }
  )
  return (
    <main className={show ? 'space-toggle' : null}>
      <Helmet>
      <style>
        {
          'body { background-color:#FDDFE5 !important; } '
        }
      </style>
      </Helmet>
      <header className='header'>
        <div onClick={() => { setShow(!show) }}>
          <h4 id='header-name'><i className="fa-solid fa-bars fa-2xl  menu-icon"></i>{props.headerName}</h4>
        </div>
        <a id='user-name'  ><img id="icon-user" src={userIcon} /><a id='name'>{localStorage.getItem("firstName")+" "+localStorage.getItem("lastName") }</a> </a><img id="notification" src={notification}/><img id="select" src={select} onClick={()=>{setOption(!option)} } />
        <div id={`${ option ? 'user-select' : 'user-select-active' }`}>
          <Link  to='/'  className='user-select-option-profile'>View Profile</Link><br/> 
          <Link  to='/' className='user-select-option-log' onClick={logout}>Logout</Link>
        </div></header>
      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <img id='logo' src={icon} alt="" />
              <span className='nav-logo-name'>BLOODCARE</span>
            </Link>
            <div className='nav-list'>
              <Link to='/dashboard' className={`${(window.location.pathname === '/dashboard'|| window.location.pathname==='/login') ? 'nav-link-active' : 'nav-link'} `}>
                <i className={`${(window.location.pathname === '/dashboard'|| window.location.pathname === '/login') ? 'fa-solid fa-gauge-high nav-link-icon-active' : 'fa-solid fa-gauge-high nav-link-icon'} `}></i>
                <span className={`${(window.location.pathname === '/dashboard'|| window.location.pathname === '/login') ? 'nav-link-icon-active' : 'nav-link-icon'} `}  >Dashboard</span>
              </Link>
              <Link to='/calender' className='nav-link  '>
                <i class="fa-solid fa-calendar-days nav-link-icon"></i>
                <span className='nav-link-name'>Calender</span>
              </Link>

              <Link to='/users/medicalofficer' className={`${(
                  window.location.pathname === '/users/medicalofficer'|| 
                  window.location.pathname==='/users/clusteradmin' || 
                  window.location.pathname==='/users/doctor' ||
                  window.location.pathname==='/users/headnurse' ||
                  window.location.pathname==='/users/nurse' ||
                  window.location.pathname==='/users/driver' ||
                  window.location.pathname==='/users/organizer' ||
                  window.location.pathname==='/users/donor'
                ) ? 'nav-link-active' : 'nav-link'} `}  >
                <i className={`${(
                  window.location.pathname === '/users/medicalofficer'|| 
                  window.location.pathname==='/users/clusteradmin' || 
                  window.location.pathname==='/users/doctor' ||
                  window.location.pathname==='/users/headnurse' ||
                  window.location.pathname==='/users/nurse' ||
                  window.location.pathname==='/users/driver' ||
                  window.location.pathname==='/users/organizer' ||
                  window.location.pathname==='/users/donor'
                ) ? 'fa-solid fa-user-nurse nav-link-icon-active' : 'fa-solid fa-user-nurse nav-link-icon'} `}></i>                
                <span className={`${(
                  window.location.pathname === '/users/medicalofficer'|| 
                  window.location.pathname==='/users/clusteradmin' || 
                  window.location.pathname==='/users/doctor' ||
                  window.location.pathname==='/users/headnurse' ||
                  window.location.pathname==='/users/nurse' ||
                  window.location.pathname==='/users/driver' ||
                  window.location.pathname==='/users/organizer' ||
                  window.location.pathname==='/users/donor'
                ) ? 'nav-link-icon-active' : 'nav-link-icon'} `}>Users</span>
              </Link>

              <Link to='/clustercenter' className={`${( 
                  window.location.pathname==='/clustercenter'
                ) ? 'nav-link-active' : 'nav-link'} `}  >
                <i className={`${(
                  window.location.pathname==='/clustercenter'
                ) ? 'fa-solid fa-user-nurse nav-link-icon-active' : 'fa-solid fa-user-nurse nav-link-icon'} `}></i>
                <span className={`${(
                  window.location.pathname==='/clustercenter'
                ) ? 'nav-link-icon-active' : 'nav-link-icon'} `}>Cluster Center</span>
              </Link>

              <Link to='/bloodcamps/ongoingcamp' className={`${(
                  window.location.pathname === '/bloodcamps/ongoingcamp'|| 
                  window.location.pathname==='/bloodcamps/upcomingcamp' || 
                  window.location.pathname==='/bloodcamps/completedcamp'
                ) ? 'nav-link-active' : 'nav-link'} `}  >
                <i className={`${(
                  window.location.pathname === '/bloodcamps/ongoingcamp'|| 
                  window.location.pathname==='/bloodcamps/upcomingcamp' || 
                  window.location.pathname==='/bloodcamps/completedcamp'
                ) ? 'fa-solid fa-people-group nav-link-icon-active' : 'fa-solid fa-people-group nav-link-icon'} `}></i>
                <span className={`${(
                  window.location.pathname === '/bloodcamps/ongoingcamp'|| 
                  window.location.pathname==='/bloodcamps/upcomingcamp' || 
                  window.location.pathname==='/bloodcamps/completedcamp'
                ) ? 'nav-link-icon-active' : 'nav-link-icon'} `}>Blood Camp</span>
              </Link>
              
            </div>
          </div>
        </nav>
      </aside>
    </main>
  )
}
