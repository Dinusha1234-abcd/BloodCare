import React, { useState, useEffect } from "react";
import SlideMenuMedicalOfficer from '../components/component.slidemenu.medicalOfficer';
import PastCamp from '../components/component.pastCamp';
import OngoingCamp from "../components/component.ongoingCamp";
import FutureCamp from "../components/component.futureCamp";
import PendingCamp from "../components/component.pendingCamp";
import ClusterAdminCampHeader from '../components/component.campHeader'
import PendingCampView from "../components/component.pendingCampView";
import '../assests/css/page.clusterAdmin.bloodcamp.css'

export default function MedicalOfficerBloodCamp() {
  const [slidemenu, setSlideMenu] = useState(true);
  const passData = (data) => {
    setSlideMenu(data);
  };
  if (window.location.pathname == '/bloodcamp/pastcamp' || window.location.pathname == '/bloodcamp') {
    return (
      <div>
        <SlideMenuMedicalOfficer headerName={"Blood Camp"} passData={passData} />
        <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
          <ClusterAdminCampHeader />
          <PastCamp />
        </div>
      </div>
    )
  } else if (window.location.pathname == '/bloodcamp/ongoingcamp') {
    return (<div>
      <SlideMenuMedicalOfficer headerName={"Blood Camp"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminCampHeader />
        <OngoingCamp />
      </div>
    </div>
    )
  } else if (window.location.pathname == '/bloodcamp/futurecamp') {
    return (<div>
      <SlideMenuMedicalOfficer headerName={"Blood Camp"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminCampHeader />
        <FutureCamp />
      </div>
    </div>
    )
  } else if (window.location.pathname == '/bloodcamp/pendingcamp') {
    return (<div>
      <SlideMenuMedicalOfficer headerName={"Blood Camp"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminCampHeader />
        <PendingCamp />
      </div>
    </div>
    )
  } else if (window.location.pathname == '/bloodcamp/pendingcampView/NamalSilva/982345678V/kesbewa/0777123456/namal@gmail.com') {
    return (<div>
      <SlideMenuMedicalOfficer headerName={"Blood Camp"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminCampHeader />
        <PendingCampView />
      </div>
    </div>
    )
  }
}