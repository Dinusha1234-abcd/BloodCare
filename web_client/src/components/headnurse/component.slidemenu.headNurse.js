import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assests/css/component.slidemenu.css';
import icon from "../../assests/images/bloodcareIcon.png";
import userIcon from "../../assests/images/slidemenu.icon.png";
import notification from "../../assests/images/notification.png";
import select from "../../assests/images/slidemenu.select.png";

 

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

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className='header'>
        <div onClick={() => { setShow(!show) }}>
          <h4 id='header-name'><i className="fa-solid fa-bars fa-2xl  menu-icon"></i>{props.headerName}</h4>

        </div>
        <a id='user-name'  ><img id="icon-user" src={userIcon} /><a id='name'>{localStorage.getItem("firstName")+" "+localStorage.getItem("lastName") }</a></a><img id="notification" src={notification}/><img id="select" src={select} onClick={()=>{setOption(!option)} } />
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
               
             

              <Link to='/landingpage' className={`${(window.location.pathname === '/landingpage' ) ? 'nav-link-active' : 'nav-link'} `}>
                <i className={`${(window.location.pathname === '/landingpage' ) ? 'fa-solid fa-house nav-link-icon-active' : 'fa-solid fa-house nav-link-icon'} `}></i>
                <span className={`${(window.location.pathname === '/landingpage' ) ? 'nav-link-icon-active' : 'nav-link-icon'} `}  >Home</span>
              </Link> 

              <Link to='/dashboard' className={`${(window.location.pathname === '/dashboard'||'/login') ? 'nav-link-active' : 'nav-link'} `}>
                <i className={`${(window.location.pathname === '/dashboard'||'/login') ? 'fa-solid fa-gauge-high nav-link-icon-active' : 'fa-solid fa-gauge-high nav-link'} `}></i>
                <span className={`${(window.location.pathname === '/dashboard'||'/login') ? 'nav-link-icon-active' : 'nav-link-icon'} `}  >Dashboard</span>
              </Link>

              <Link to='/calender' className={`${(window.location.pathname === '/calender' ) ? 'nav-link-active ' : 'nav-link'} `}>
              <i className={`${(window.location.pathname === '/calender' ) ? 'fa-solid fa-calendar-days nav-link-icon-active' : 'fa-solid fa-calendar-days nav-link-icon'} `}></i>
                <span className={`${(window.location.pathname === '/calender' ) ? 'nav-link-icon-active' : 'nav-link-icon'} `}  >Calender</span>
              </Link>

              <Link to='/headnurse/assigncamps' className={`${(window.location.pathname === '/headnurseassigncamps' ) ? 'nav-link-active ' : 'nav-link'} `}>
                <i className={`${(window.location.pathname === '/headnurseassigncamps' ) ? 'fa-solid fa-campground nav-link-icon-active' : 'fa-solid fa-campground nav-link-icon'} `}></i>
                <span className={`${(window.location.pathname === '/headnurseassigncamps' ) ? 'nav-link-icon-active' : 'nav-link-icon'} `}  >Blood Camps</span>
              </Link>

              <Link to='/headnurse/summarywork' className={`${(window.location.pathname === '/headnurse/summarywork' ) ? 'nav-link-active ' : 'nav-link'} `}>
                <i className={`${(window.location.pathname === '/headnurse/summarywork' ) ? 'fa-solid fa-user-nurse nav-link-icon-active' :'fa-solid fa-user-nurse nav-link-icon'} `}></i>
                <span className={`${(window.location.pathname === '/headnurse/summarywork' ) ? 'nav-link-icon-active' : 'nav-link-icon'} `}  >Summary Work</span>
              </Link>

              <Link to='/headnurse/addnewdonor' className={`${(window.location.pathname === '/headnurse/addnewdonor' ) ? 'nav-link-active ' : 'nav-link'} `}>
                <i className={`${(window.location.pathname === '/headnurse/addnewdonor' ) ? 'fa-solid fa-user-plus nav-link-icon-active' :'fa-solid fa-user-plus nav-link-icon'} `}></i>
                <span className={`${(window.location.pathname === '/headnurse/addnewdonor' ) ? 'nav-link-icon-active' : 'nav-link-icon'} `}  >Add News Donor</span>
              </Link>
              

            </div>
          </div>
        </nav>
      </aside>
    </main>
  )
}

