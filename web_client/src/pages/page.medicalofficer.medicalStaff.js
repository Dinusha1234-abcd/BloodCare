import React, { useState, useEffect } from "react";
import SlideMenuMedicalOfficer from '../components/component.slidemenu.medicalOfficer';
import Doctor from '../components/clusterAdmin/component.doctors';
import HeadNurse from "../components/clusterAdmin/component.headNurse";
import Nurse from "../components/clusterAdmin/component.nurse";
import Driver from "../components/clusterAdmin/component.driver";
import ClusterAdminMedicalStaffHeader from '../components/clusterAdmin/component.medicalStaffHeader'
import '../assests/css/page.clusterAdmin.bloodcamp.css'

export default function MedicalOfficerBloodCamp() {
  const [slidemenu, setSlideMenu] = useState(true);
  const passData = (data) => {
    setSlideMenu(data);
  };
  if (window.location.pathname === '/medicalstaff/doctor' || window.location.pathname == '/medicalstaff') {
    return (
      <div>
        <SlideMenuMedicalOfficer headerName={"Medical Staff"} passData={passData} />
        <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
          <ClusterAdminMedicalStaffHeader />
          <Doctor/>
        </div>
      </div>
    )
  } else if (window.location.pathname === '/medicalstaff/headnurse') {
    return (<div>
      <SlideMenuMedicalOfficer headerName={"Medical Staff"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminMedicalStaffHeader />
        <HeadNurse/>
      </div>
    </div>
    )
  } else if (window.location.pathname === '/medicalstaff/nurse') {
    return (<div>
      <SlideMenuMedicalOfficer headerName={"Medical Staff"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminMedicalStaffHeader />
        <Nurse/>
      </div>
    </div>
    )
  } else if (window.location.pathname == '/medicalstaff/driver') {
    return (<div>
      <SlideMenuMedicalOfficer headerName={"Medical Staff"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminMedicalStaffHeader />
        <Driver />
      </div>
    </div>
    )
  }
}