import React, { useState } from "react";
import SlideMenuAdmin from "../components/component.slidemenu.admin";
import AdminCampHeader from "../components/admin/component.campHeader.admin";
import OngoingCamp from "../components/admin/component.ongoingcamp.admin";
import UpcomingCamp from "../components/admin/component.upcomingcamp.admin";
import CompletedCamp from "../components/admin/component.completedcamp.admin";

export default function AdminBloodCamp(){

    const [slidemenu, setSlideMenu] = useState(true);
    const passData = (data) => {
    setSlideMenu(data);
  };

  if (window.location.pathname == '/bloodcamps/ongoingcamp' || window.location.pathname == '/bloodcamps') {
    return (
      <div>
        <SlideMenuAdmin headerName={"Blood Camp"} passData={passData} />
        <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
          <AdminCampHeader />
          <OngoingCamp />
        </div>
      </div>
    )
  } else if (window.location.pathname == '/bloodcamps/upcomingcamp') {
    return (<div>
      <SlideMenuAdmin headerName={"Blood Camp"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <AdminCampHeader />
        <UpcomingCamp />
      </div>
    </div>
    )
  } else if (window.location.pathname == '/bloodcamps/completedcamp') {
    return (<div>
      <SlideMenuAdmin headerName={"Blood Camp"} passData={passData} />
      <div id={`${slidemenu ? 'state-change-true' : 'state-change-false'}`} >
        <AdminCampHeader />
        <CompletedCamp />
      </div>
    </div>
    )
  } 

}