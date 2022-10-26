import React, { useState, useEffect } from "react";
import SlideMenuClusterAdmin from '../components/component.slidemenu.medicalOfficer';
import PastCamp from '../components/clusterAdmin/component.pastCamp';
import OngoingCamp from "../components/clusterAdmin/component.ongoingCamp";
import FutureCamp from "../components/clusterAdmin/component.futureCamp";
import PendingCamp from "../components/clusterAdmin/component.pendingCamp";
import ClusterAdminCampHeader from '../components/clusterAdmin/component.campHeader'
import PendingCampView from "../components/clusterAdmin/component.pendingCampView";
import '../assests/css/page.clusterAdmin.bloodcamp.css'

export default function MedicalOfficerBloodCamp() {
  const [slidemenu, setSlideMenu] = useState(true);
  const passData = (data) => {
    setSlideMenu(data);
  };
  if (window.location.pathname == '/bloodcamp/pastcamp' || window.location.pathname == '/bloodcamp') {
    return (
      <div>
        <SlideMenuClusterAdmin headerName={"Blood Camp"} passData={passData} />
        <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
          <ClusterAdminCampHeader />
          <PastCamp />
        </div>
      </div>
    )
  } else if (window.location.pathname == '/bloodcamp/ongoingcamp') {
    return (<div>
      <SlideMenuClusterAdmin headerName={"Blood Camp"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminCampHeader />
        <OngoingCamp />
      </div>
    </div>
    )
  } else if (window.location.pathname == '/bloodcamp/futurecamp') {
    return (<div>
      <SlideMenuClusterAdmin headerName={"Blood Camp"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminCampHeader />
        <FutureCamp />
      </div>
    </div>
    )
  } else if (window.location.pathname == '/bloodcamp/pendingcamp') {
    return (<div>
      <SlideMenuClusterAdmin headerName={"Blood Camp"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminCampHeader />
        <PendingCamp />
      </div>
    </div>
    )
  } else if (window.location.pathname == '/bloodcamp/pendingcampView/NamalSilva/982345678V/kesbewa/0777123456/namal@gmail.com') {
    return (<div>
      <SlideMenuClusterAdmin headerName={"Blood Camp"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <ClusterAdminCampHeader />
        <PendingCampView />
      </div>
    </div>
    )
  }
}