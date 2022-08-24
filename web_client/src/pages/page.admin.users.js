import React, { useState } from "react";
import SlideMenuAdmin from "../components/component.slidemenu.admin";
import AdminUserHeader from "../components/admin/component.usersHeader.admin";
import MedicalOfficer from "../components/admin/component.medicalofficer.admin";
import ClusterAdmin from "../components/admin/component.clusteradmin.admin";
import Doctor from "../components/admin/component.doctor.admin";
import HeadNurse from "../components/admin/component.headnurse.admin";
import Nurse from "../components/admin/component.nurse.admin";
import Organizer from "../components/admin/component.organizer.admin";
import Donor from "../components/admin/component.donor.admin";
import Driver from "../components/admin/component.driver.admin";
import '../assests/css/admin/page.admin.users.css';

export default function AdminUsers() {

    const [slidemenu, setSlideMenu] = useState(true);
    const passData = (data) => {
    setSlideMenu(data);
  };

  if (window.location.pathname === '/users/medicalofficer' || window.location.pathname === '/users') {
    return (
      <div>
        <SlideMenuAdmin headerName={"Users"} passData={passData} />
        <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`}> 
          <AdminUserHeader />
          <MedicalOfficer/> 
        </div>
      </div>
    )
  } else if (window.location.pathname == '/users/clusteradmin') {
    return (<div>
      <SlideMenuAdmin headerName={"USERS"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <AdminUserHeader />
        <ClusterAdmin />
      </div>
    </div>
    )
  } else if (window.location.pathname == '/users/doctor') {
    return (<div>
      <SlideMenuAdmin headerName={"USERS"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <AdminUserHeader />
        <Doctor/>
      </div>
    </div>
    )
  } else if (window.location.pathname == '/users/headnurse') {
    return (<div>
      <SlideMenuAdmin headerName={"USERS"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <AdminUserHeader />
        <HeadNurse />
      </div>
    </div>
    )
  } else if (window.location.pathname == '/users/nurse') {
    return (<div>
      <SlideMenuAdmin headerName={"USERS"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <AdminUserHeader />
        <Nurse />
      </div>
    </div>
    )
  } else if (window.location.pathname == '/users/organizer') {
    return (<div>
      <SlideMenuAdmin headerName={"USERS"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`}>
        <AdminUserHeader />
        <Organizer />

      </div>
    </div>
    )
  } else if (window.location.pathname == '/users/driver') {
    return (<div>
      <SlideMenuAdmin headerName={"USERS"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <AdminUserHeader />
        <Driver />
      </div>
    </div>
    )
  } else if (window.location.pathname == '/users/donor') {
    return (<div>
      <SlideMenuAdmin headerName={"USERS"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <AdminUserHeader />
        <Donor/>
      </div>
    </div>
    )
  }
}
