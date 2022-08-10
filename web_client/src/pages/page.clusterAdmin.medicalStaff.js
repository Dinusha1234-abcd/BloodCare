import React, { useState, useEffect } from "react";
import SlideMenuClusterAdmin from '../components/component.slidemenu.clusterAdmin';
import Doctor from '../components/component.doctors';
import HeadNurse from "../components/component.headNurse";
import Nurse from "../components/component.nurse";
import Driver from "../components/component.driver";
import ClusterAdminMedicalStaffHeader from '../components/component.medicalStaffHeader'
import '../assests/css/page.clusterAdmin.bloodcamp.css'

export default function ClusterAdminBloodCamp() {
  const [slidemenu, setSlideMenu] = useState(true);
  const passData = (data) => {
    setSlideMenu(data);
  };
  if (window.location.pathname === '/medicalstaff/doctor' || window.location.pathname == '/medicalstaff') {
    return (
      <div>
        <SlideMenuClusterAdmin headerName={"Medical Staff"} passData={passData} />
        <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
          <ClusterAdminMedicalStaffHeader />
          <Doctor/>
        </div>
      </div>
    )
  } else if (window.location.pathname === '/medicalstaff/headnurse') {
    return (<div>
      <SlideMenuClusterAdmin headerName={"Medical Staff"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminMedicalStaffHeader />
        <HeadNurse/>
      </div>
    </div>
    )
  } else if (window.location.pathname === '/medicalstaff/nurse') {
    return (<div>
      <SlideMenuClusterAdmin headerName={"Medical Staff"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminMedicalStaffHeader />
        <Nurse/>
      </div>
    </div>
    )
  } else if (window.location.pathname == '/medicalstaff/driver') {
    return (<div>
      <SlideMenuClusterAdmin headerName={"Medical Staff"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminMedicalStaffHeader />
        <Driver />
      </div>
    </div>
    )
  }
}